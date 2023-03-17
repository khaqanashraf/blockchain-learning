const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')


if (network.name === 'localhost')
    describe(`Testing AbiEncode smart contract`, async () => {
        let token
        let abiEncode
        before(async () => {
            const Token = await hre.ethers.getContractFactory('contracts/AbiEncode.sol:Token')
            const AbiEncode = await hre.ethers.getContractFactory('contracts/AbiEncode.sol:AbiEncode')
            token = await Token.deploy()
            abiEncode = await AbiEncode.deploy()
        })

        it(`Should deploy AbiEncode smart contract to local environment`, async () => {
            assert(abiEncode.address && token.address, 'Contract is not deployed successfuly!')
        })


    })