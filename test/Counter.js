const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", () => {
  let counter;

  beforeEach(async () => {
    const CounterFactory = await ethers.getContractFactory("Counter");
    counter = await CounterFactory.deploy("Amit", 1);
  });

  describe("Deployment", () => {
    it("sets the initial count", async () => {
      const number = await counter.number();
      expect(number).to.be.equal(1);
    });

    it("sets the initial name", async () => {
      const name = await counter.name();
      expect(name).to.be.equal("Amit");
    });
  });

  describe("Counting", async () => {
    const prevCount = await counter.number();

    it("increments the count", async () => {
      let txn = await counter.increment();
      await txn.wait();

      const newCount = await counter.number();
      expect(newCount).to.be.equal(prevCount + 1);
    });

    it("decrements the count", async () => {
      let txn = await counter.decrement();
      await txn.wait();

      const newCount = await counter.number();
      expect(newCount).to.be.equal(prevCount - 1);
    });
  });
});
