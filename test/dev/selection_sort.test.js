const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'SelectionSort'

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

        it('Should sort array in ascending order', async () => {
            const arr = [7, 3, 4, 2, 8, 5, 1, 9, 0, 6]
            const sortedArray = await contract.sortAsc(arr);
            let isSorted = true
            for (let i = 0; i < sortedArray.length; i++) {
                const num = Number(sortedArray[i])
                if (num !== i) {
                    isSorted = false
                    break
                }
            }
            assert(isSorted, 'Could not sort array in ascending order')
        })

        it('Should sort array in descending order', async () => {
            const arr = [7, 3, 4, 2, 8, 5, 1, 9, 0, 6]
            const sortedArray = await contract.sortDesc(arr);
            let isSorted = true
            let n = arr.length
            for (let i = 0; i < n; i++) {
                const num = Number(sortedArray[i])
                if (num !== n - 1 - i) {
                    isSorted = false
                    break
                }
            }
            assert(isSorted, 'Could not sort array in descending order')
        })

    })