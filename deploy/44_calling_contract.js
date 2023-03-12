const { network } = require('hardhat')
const hre = require('hardhat')
const { updateContractDeployedAddress } = require('../utils/global')

module.exports = async () => {
    const Callee = await hre.ethers.getContractFactory('Callee')
    const callee = await Callee.deploy()

    const Caller = await hre.ethers.getContractFactory('Caller')
    const caller = await Caller.deploy(callee.address)

    console.log(`The contract Callee is deployed on address: ${callee.address}`);
    console.log(`The contract Caller is deployed on address: ${caller.address}`);


    await updateContractDeployedAddress('Callee', network.name, callee.address, [])
    await updateContractDeployedAddress('Caller', network.name, caller.address, [callee.address])

}

module.exports.tags = ['Callee', 'Caller']