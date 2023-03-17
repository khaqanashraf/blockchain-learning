const { network } = require('hardhat')
const hre = require('hardhat')
const { updateContractDeployedAddress } = require('../utils/global')

module.exports = async () => {
    const args = []
    const Token = await hre.ethers.getContractFactory('contracts/AbiEncode.sol:Token')
    const token = await Token.deploy(...args)

    const AbiEncode = await hre.ethers.getContractFactory('contracts/AbiEncode.sol:AbiEncode')
    const abiEncode = await AbiEncode.deploy(...args)

    console.log(`The contract Token is deployed on address: ${token.address}`);
    console.log(`The contract AbiEncode is deployed on address: ${abiEncode.address}`);


    await updateContractDeployedAddress('Token', network.name, token.address, args)
    await updateContractDeployedAddress('AbiEncode', network.name, abiEncode.address, args)

}

module.exports.tags = ['Token', 'AbiEncode']