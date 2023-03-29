const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'DataLocations'

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

        it('Should sort array using storage, memory and call data', async () => {
            const arr = [7, 3, 4, 2, 8, 5, 1, 9, 0, 6];
            await contract.sort(arr, 0)
            const sortedArray = await contract.getSortedArr()
            let isSorted = true
            for (let i = 0; i < sortedArray.length; i++) {
                if (i !== Number(sortedArray[i])) isSorted = false
            }

            assert(isSorted, 'Could not sort the array in asc order')
        })


    })