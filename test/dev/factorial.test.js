const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Factorial'

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

        it('Should calculate factorial of 0 is 1', async () => {
            const factorial = Number(await contract.fact(0))
            assert(factorial === 1, 'Could not calculate accurate factorial of 0')
        })
        it('Should calculate factorial of 1 is 1', async () => {
            const factorial = Number(await contract.fact(1))
            assert(factorial === 1, 'Could not calculate accurate factorial of 1')
        })
        it('Should calculate factorial of 2 is 2', async () => {
            const factorial = Number(await contract.fact(2))
            assert(factorial === 2, 'Could not calculate accurate factorial of 2')
        })
        it('Should calculate factorial of 3 is 6', async () => {
            const factorial = Number(await contract.fact(3))
            assert(factorial === 6, 'Could not calculate accurate factorial of 3')
        })
        it('Should calculate factorial of 4 is 24', async () => {
            const factorial = Number(await contract.fact(4))
            assert(factorial === 24, 'Could not calculate accurate factorial of 4')
        })
        it('Should calculate factorial of 5 is 120', async () => {
            const factorial = Number(await contract.fact(5))
            assert(factorial === 120, 'Could not calculate accurate factorial of 5')
        })


    })