const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'PerfectNumber'

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

        it('Should find out that 1 is a perfect number', async () => {
            const isPerfectNumber = Number(await contract.isPerfectNumber(1))
            assert(isPerfectNumber, 'Could not find out that 1 is a perfect number')
        })
        it('Should find out that 6 is a perfect number', async () => {
            const isPerfectNumber = Number(await contract.isPerfectNumber(6))
            assert(isPerfectNumber, 'Could not find out that 6 is a perfect number')
        })
        it('Should find out that 28 is a perfect number', async () => {
            const isPerfectNumber = Number(await contract.isPerfectNumber(28))
            assert(isPerfectNumber, 'Could not find out that 28 is a perfect number')
        })
        it('Should find out that 153 is not a perfect number', async () => {
            const isPerfectNumber = Number(await contract.isPerfectNumber(153))
            assert(!isPerfectNumber, 'Could not find out that 153 is a perfect number')
        })
        it('Should find out that 36 is not a perfect number', async () => {
            const isPerfectNumber = Number(await contract.isPerfectNumber(36))
            assert(!isPerfectNumber, 'Could not find out that 36 is a perfect number')
        })


    })