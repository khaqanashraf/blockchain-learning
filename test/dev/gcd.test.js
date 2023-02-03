const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'GCD'

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

        it('Should find gcd of 12 and 18 is 6', async () => {
            const gcd = Number(await contract.findGcd(12, 18))
            assert(gcd === 6, 'Could not find correct gcd')
        })

        it('Should find gcd of 99 and 9 is 9', async () => {
            const gcd = Number(await contract.findGcd(99, 9))
            assert(gcd === 9, 'Could not find correct gcd')
        })

        it('Should find gcd of 17 and 19 is 1', async () => {
            const gcd = Number(await contract.findGcd(17, 19))
            assert(gcd === 1, 'Could not find correct gcd')
        })

        it('Should find gcd of 7 and 23 is 1', async () => {
            const gcd = Number(await contract.findGcd(7, 23))
            assert(gcd === 1, 'Could not find correct gcd')
        })

    })