const { network } = require('hardhat')
const hre = require('hardhat')
const { updateContractDeployedAddress } = require('../utils/global')

const CONTRACT_NAME = 'ArmstrongNumber'
module.exports = async () => {
    const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
    const contract = await Contract.deploy()

    console.log(`The contract "${CONTRACT_NAME}" is deployed on address: ${contract.address}`);

    await updateContractDeployedAddress(CONTRACT_NAME, network.name, contract.address)

}

module.exports.tags = [CONTRACT_NAME]