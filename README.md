# NodeJS TypeScript Starter
===

The main purpose of this repository is to show to show an example project setup and workflow for writing **Node** in typescript and docker.

**contributions and recommendations for improvements are encouraged and will be most welcome.**



## Requirements
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/get-started)


## Getting started

- Clone the repo
    - HTTPS 
        ```
        git clone https://github.com/bhaniel/NodeJS-TypeScript-Starter.git <project_name>
        ```

    - SSH
        ```
        git clone git@github.com:bhaniel/NodeJS-TypeScript-Starter.git <project_name>
        ```

- Install dependencies
    ```
    cd <project_name>
    npm install
    ```

- Start dev environment if you already used this command before please check that worker-node conatiner is down. if you need to work with anothr project change worker-node name is docker-compse.yml file.
    ```
    npm run docker:start
    ```

- Access your worker node container in case you changed the service name please change also in packge.json
    ```
    npm run docker:bash
    ```

    - All this commands will work only if you are inside your conatiner. Run your code in watch mode ( please check that you are inside the conatiner first ) no debuuger here
        ```
        npm run watch:nodebug
        ```
        in case you want to work with the debbuger use this command and attach visual studio code to the docker
        ```
        npm run watch:debug
        ```

- Run your tests ( you should open a new cmd/bash window for that )
    ```
    npm run docker:test
    ```

## Enjoy your Develop


