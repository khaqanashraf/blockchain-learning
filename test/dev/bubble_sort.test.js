const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'BubbleSort'

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
            const array = [7, 3, 4, 2, 8, 5, 1, 9, 0, 6]
            const sortedArray = await contract.sortAscending(array)
            let isSorted = true
            for (let i = 0; i < array.length; i++) {
                const num = Number(sortedArray[i])
                if (num !== i) {
                    isSorted = false;
                    break;
                }
            }
            assert(isSorted, 'Could not sort array in ascending order')
        })

        it('Should sort array in descending order', async () => {
            const array = [7, 3, 4, 2, 8, 5, 1, 9, 0, 6]
            const sortedArray = await contract.sortAscending(array)
            let isSorted = true
            for (let i = array.length - 1; i >= 0; i--) {
                const num = Number(sortedArray[i])
                if (num !== i) {
                    isSorted = false;
                    break;
                }
            }
            assert(isSorted, 'Could not sort array in descending order')
        })

    })