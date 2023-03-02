const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'CounterTest'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        before(async () => {
            const MyCounterContract = await hre.ethers.getContractFactory("MyCounter")
            const myCounterContract = await MyCounterContract.deploy()

            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy(myCounterContract.address)
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })


        it('Should increment counter', async () => {
            await contract.incrementCounter()
            assert(true, 'Could not increment using interface')
        })

        it('Should get incremented counter', async () => {
            const count = Number(await contract.getCounter())
            assert(count === 1, 'Could not get incremented counter')
        })

    })