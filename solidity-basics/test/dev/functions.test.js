const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Functions'

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

        it('Should receive multiple values in return of a function', async () => {
            const [id, status, message] = await contract.returnMany();
            assert(Number(id) === 1 && Boolean(status) === true && String(message) === 'Hello World', 'Could not receive multiple values from a function')
        })
        it('Should receive named values in return of a function', async () => {
            const { id, status, message } = await contract.namedReturn();
            assert(Number(id) === 1 && Boolean(status) === true && String(message) === 'Hello World', 'Could not receive named values from a function')
        })
        it('Should destructure arguments of a function', async () => {
            await contract.destructuredReturn()
            assert(true, 'Could not destructure arguments of a function')

        })
        it('Should call parameterized function with and without named arguments', async () => {
            await contract.callFunction()
            assert(true, 'Could not call parameterized function with or without named arguments')
        })


    })