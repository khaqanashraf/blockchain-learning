const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Discriminant'

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

        it('Should calculate discriminant', async () => {
            const a = 1, b = 2, c = 3;
            const discriminant = Number(await contract.calculateDiscriminant(a, b, c))
            assert(discriminant === -8, 'Could not calculate discriminant successfully!')
        })

        it('Should tell the roots are imaginary', async () => {
            const a = 1, b = 2, c = 3;
            const roots = String(await contract.roots(a, b, c))
            assert(roots === 'Imaginary and Unequal', 'Could not determine nature of roots')

        })
        it('Should tell the roots are real', async () => {
            const a = 1, b = 4, c = 3;
            const roots = String(await contract.roots(a, b, c))
            assert(roots === 'Real and Unequal', 'Could not determine nature of roots')
        })

    })