const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'ArrayElementRemove'

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

        it('Should get the correct size or array', async () => {
            const size = Number(await contract.getLength())
            assert(size === 5, 'Could not get the correct size of array')
        })

        it('Should remove element by shifting', async () => {
            await contract.removeByShifting(1)

            const arr = Array(await contract.getArray())[0]
            const lastElement = Number(arr[arr.length - 1])
            assert(arr.length === 4 && lastElement === 5, 'Could not remove element by shifting')
        })

        it('Should remove element by swapping', async () => {
            await contract.removeBySwap(1)

            const arr = Array(await contract.getArray())[0]
            const lastElement = Number(arr[arr.length - 1])

            assert(arr.length === 3 && lastElement === 4, 'Could not remove element by swapping')
        })

    })