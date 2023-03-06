const { network } = require('hardhat')
const hre = require('hardhat')
const { updateContractDeployedAddress } = require('../utils/global')

module.exports = async () => {
    const args = []
    const CallReceiverContract = await hre.ethers.getContractFactory("CallReceiver")
    const CallResponseContract = await hre.ethers.getContractFactory("CallResponse")
    const callReceiverContract = await CallReceiverContract.deploy(...args)
    const callResponseContract = await CallResponseContract.deploy(...args)

    console.log(`The contract CallReceiver is deployed on address: ${callReceiverContract.address}`);
    console.log(`The contract CallResponse is deployed on address: ${callResponseContract.address}`);

    await updateContractDeployedAddress("CallReceiver", network.name, callReceiverContract.address, args)
    await updateContractDeployedAddress("CallResponse", network.name, callResponseContract.address, args)

}

module.exports.tags = ["CallReceiver", "CallResponse"]