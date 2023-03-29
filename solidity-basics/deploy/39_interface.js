const { network } = require('hardhat')
const hre = require('hardhat')
const { updateContractDeployedAddress } = require('../utils/global')

module.exports = async () => {
    const args = []
    const MyCounterContract = await hre.ethers.getContractFactory("MyCounter")
    const myCounterContract = await MyCounterContract.deploy()
    const CounterTestContract = await hre.ethers.getContractFactory("CounterTest")
    const counterTestContract = await CounterTestContract.deploy(myCounterContract.address)


    console.log(`The contract "MyCounter" is deployed on address: ${myCounterContract.address}`);
    console.log(`The contract "Counter" is deployed on address: ${counterTestContract.address}`);

    await updateContractDeployedAddress("MyCounter", network.name, myCounterContract.address, [])
    await updateContractDeployedAddress("CounterTest", network.name, counterTestContract.address, [myCounterContract.address])

}

module.exports.tags = ["MyCounter", "CounterTest"]