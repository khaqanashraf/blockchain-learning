const { network } = require('hardhat')
const hre = require('hardhat')
const { updateContractDeployedAddress } = require('../utils/global')

const CONTRACT_NAME = 'Constructor'
module.exports = async () => {
    const name = 'John'
    const owner = '0x7bb1Dff3cFa2c96034574D43396Cf6F0dAb506c8'

    const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
    const contract = await Contract.deploy(name, owner)

    console.log(`The contract "${CONTRACT_NAME}" is deployed on address: ${contract.address}`);

    await updateContractDeployedAddress(CONTRACT_NAME, network.name, contract.address)

}

module.exports.tags = [CONTRACT_NAME]