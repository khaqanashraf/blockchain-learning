const { network } = require('hardhat')
const hre = require('hardhat')
const { updateContractDeployedAddress } = require('../utils/global')

const CONTRACT_NAME = 'HelloWorld'
module.exports = async () => {
    const args = []
    const ChildContract = await hre.ethers.getContractFactory("Child")
    const BaseContract = await hre.ethers.getContractFactory("Base")
    const childContract = await ChildContract.deploy(...args)
    const baseContract = await BaseContract.deploy(...args)

    console.log(`The contract Child for visibility is deployed on address: ${childContract.address}`);
    console.log(`The contract Base for visibility is deployed on address: ${baseContract.address}`);

    await updateContractDeployedAddress("Child", network.name, childContract.address, args)
    await updateContractDeployedAddress("Base", network.name, baseContract.address, args)

}

module.exports.tags = [CONTRACT_NAME]