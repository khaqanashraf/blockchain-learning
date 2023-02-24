const { network } = require('hardhat')
const hre = require('hardhat')
const { updateContractDeployedAddress } = require('../utils/global')

const CONTRACT_NAME = 'Cop'
module.exports = async () => {
    const args = [6, 3, 'John Doe']
    const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
    const contract = await Contract.deploy(...args)

    console.log(`The contract "${CONTRACT_NAME}" for inheritence is deployed on address: ${contract.address}`);

    await updateContractDeployedAddress(CONTRACT_NAME, network.name, contract.address, args)

}

module.exports.tags = [CONTRACT_NAME]