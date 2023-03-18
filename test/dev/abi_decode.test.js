const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')


if (network.name === 'localhost')
    describe(`Testing AbiEncode smart contract`, async () => {
        let contract
        before(async () => {
            const Contract = await hre.ethers.getContractFactory('contracts/AbiDecode.sol:AbiDecode')
            contract = await Contract.deploy()
        })

        it(`Should deploy AbiEncode smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })



    })