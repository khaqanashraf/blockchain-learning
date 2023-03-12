const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')


if (network.name === 'localhost')
    describe(`Testing Callee and Caller smart contracts`, async () => {
        let callee
        let caller
        before(async () => {
            const Callee = await hre.ethers.getContractFactory('Callee')
            const Caller = await hre.ethers.getContractFactory('Caller')

            callee = await Callee.deploy()
            caller = await Caller.deploy(callee.address)

        })

        it(`Should deploy Callee and Caller smart contracts to local environment`, async () => {
            assert(callee.address && caller.address, 'Contract is not deployed successfuly!')
        })

        it('Should get num equals 0 in callee contract', async () => {
            const num = Number(await callee.getNum())
            assert(num === 0, 'Could not get num equals to 0 in callee contract')
        })
        it('Should call method of caller contract', async () => {
            await caller.incrementInCallee()
            assert(true, 'Could not call method of caller contract')
        })
        it('Should have number incremented in callee contract', async () => {
            const num = Number(await callee.getNum())
            assert(num === 1, 'Could not get num equals to 1 in callee contract')
        })


    })