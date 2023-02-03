const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'PrimeNumbers'

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

        it('Should tell that 2 is a factor of 4', async () => {
            const isFactor = Boolean(await contract.isFactor(2, 4))
            assert(isFactor, 'Could not tell the truth that 2 is a factor of 4')
        })

        it('Should tell that 3 is a factor of 6', async () => {
            const isFactor = Boolean(await contract.isFactor(3, 6))
            assert(isFactor, 'Could not tell the truth that 3 is a factor of 6')
        })

        it('Should tell that 2 is not a factor of 5', async () => {
            const isFactor = Boolean(await contract.isFactor(2, 5))
            assert(!isFactor, 'Could not tell the truth that 2 is not a factor of 5')
        })

        it('Should tell that 5 is a prime number', async () => {
            const isPrime = Boolean(await contract.isPrime(5))
            assert(isPrime, 'Could not tell the truth that 5 is a prime numner')
        })

        it('Should tell that 13 is a prime number', async () => {
            const isPrime = Boolean(await contract.isPrime(13))
            assert(isPrime, 'Could not tell the truth that 13 is a prime numner')
        })

        it('Should tell that 18 is not a prime number', async () => {
            const isPrime = Boolean(await contract.isPrime(18))
            assert(!isPrime, 'Could not tell the truth that 18 is a prime numner')
        })

    })