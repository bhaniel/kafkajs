import {Kafka} from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['broker:29092'],
});

async function produceMessage() {
  return 1;
  //   const producer = kafka.producer();

  //   await producer.connect();
  //   await producer.send({
  //     topic: "test-topic",
  //     messages: [{ value: "Hello KafkaJS user!~" }],
  //   });
}

async function consumeMessages() {
  const consumer = kafka.consumer({
    groupId: 'test-group',
    retry: {
      retries: 4,
      maxRetryTime: 3000,
    },
  });

  await consumer.connect();
  await consumer.subscribe({topic: 'test-topic', fromBeginning: true});

  await consumer.run({
    autoCommit: false,
    eachMessage: async ({topic, partition, message}) => {
      try {
        await retry(async () => {
          await consumeMessage(topic, partition, message);
        }, 5);
      } catch (e) {
        // TODO send to DLQ
        // await send
      }

      const commit_message = {
        topic,
        partition,
        offset: message.offset,
      };
      // TODO
      await consumer.commitOffsets([commit_message]);
    },
  });
}

async function retry(cb, retryNumber) {
  let retryCounter = 0;
  let error: Error;
  while (retryCounter < retryNumber) {
    try {
      await cb();
      return true;
    } catch (e) {
      error = e;
      retryCounter++;
    }
  }

  throw error;
}

async function consumeMessage(topic, partition, message) {
  console.log({
    value: message.value.toString(),
  });

  throw new Error('Test');
}

produceMessage().catch();
consumeMessages().catch();
