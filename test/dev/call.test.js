const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')


if (network.name === 'localhost')
    describe(`Testing CallReceiver and CallResponse smart contracts`, async () => {
        let callReceiverContract
        let callResponseContract
        before(async () => {
            const CallReceiverContract = await hre.ethers.getContractFactory("CallReceiver")
            const CallResponseContract = await hre.ethers.getContractFactory("CallResponse")
            callReceiverContract = await CallReceiverContract.deploy()
            callResponseContract = await CallResponseContract.deploy()
        })

        it(`Should deploy CallReceiver and CallResponse smart contracts to local environment`, async () => {
            assert(callReceiverContract.address && callResponseContract.address, 'Contracts are not deployed successfuly!')
        })


    })