import { describe, it } from 'mocha';
import * as chai from 'chai';

import { positiveNumber , testLocalEnv } from "./main";

const expect = chai.expect;

/**
 * Dummy test
 */
describe("Testing Skalton", () => {
  it("works if positive number", () => {
    expect(positiveNumber(2)).to.be.true
  })

  it("work if negative number", () => {
    expect(positiveNumber(-1)).to.be.false
  })
})

describe("Tesitng Env" , ()=>{
  it("check my local MYENV" , ()=>{
    expect(testLocalEnv("MYENV")).to.be.equal("locally")
  })

  it("check my GLOBAL env" , ()=>{
    expect(testLocalEnv("TMP")).not.to.be.null
  })
  
})
