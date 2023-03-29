const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'ViewAndPureFunctions'

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

        it('Should call view function', async () => {
            const num = Number(await contract.viewFunction())
            assert(num === 10, 'Could not call view function')
        })

        it('Should call pure function', async () => {
            const num = Number(await contract.pureFunction(2, 3))
            assert(num === 5, 'Could not call pure function')
        })

    })