const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'PersonStruct'

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

        it('Should get a person with no name and age', async () => {
            const [name, age] = await contract.getPerson()
            assert(name == '' && age == 0, 'Could not get person with no name')
        })
        it('Should set name of the person', async () => {
            await contract.setName('John Doe')
            assert(true, 'Could not set person name in struct')
        })
        it('Should set the age of the person', async () => {
            await contract.setAge(25)
            assert(true, 'Could not set person age of a struct')
        })
        it('Should get the updated name and age of the person', async () => {
            const [name, age] = await contract.getPerson()
            assert(name == 'John Doe' && age == 25, 'Could not get person with no name')
        })

    })