const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Loops'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        before(async () => {
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy()
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should run while loop 9 iterations', async () => {
            const counterBefore = Number(await contract.s_counter())
            await contract.whileLoop()
            const counterAfter = Number(await contract.s_counter())

            assert(counterBefore===1 && counterAfter==10, 'While loop not iterate 9 times')
        })

        it('Should run for loop 10 iterations', async () => {
            const counterBefore = Number(await contract.s_counter())
            await contract.forLoop()
            const counterAfter = Number(await contract.s_counter())

            assert(counterBefore===10 && counterAfter==20, 'For loop not iterate 10 times')
        })

    })