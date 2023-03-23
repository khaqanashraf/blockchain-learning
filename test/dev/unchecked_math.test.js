const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'UncheckedMath'

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

        it('Should add two big size integers', async () => {
            const num1 = String(1e18)
            const num2 = String(1e18)
            const result = await contract.add(num1, num2)
            assert(result == String(2e18), 'Could not add two big size integers')
        })

        it('Should subtract two big size integers', async () => {
            const num1 = String(1e18)
            const num2 = String(2e18)
            await contract.sub(num1, num2)
            /**
             * Even underflow occurred but the program executed successfuly
             */
            assert(true, 'Could not subtract two big size integers')
        })

    })