const { network } = require('hardhat')
const hre = require('hardhat')
const { updateContractDeployedAddress } = require('../utils/global')

const CONTRACT_NAME = 'RandomPriates'
module.exports = async () => {
    const args = [83, 47, 10, 30, 60]
    const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
    const contract = await Contract.deploy(...args)

    console.log(`The contract "${CONTRACT_NAME}" is deployed on address: ${contract.address}`);

    await updateContractDeployedAddress(CONTRACT_NAME, network.name, contract.address, args)

}

module.exports.tags = [CONTRACT_NAME]