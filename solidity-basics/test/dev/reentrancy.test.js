const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Reentracy'

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

        it('Should get initial value of number as 0', async () => {
            const num = Number(await contract.getNum())
            assert(num === 0, 'Could not get correct value of number')
        })

        it('Should increment the number', async () => {
            await contract.increment()
            const num = Number(await contract.getNum())
            assert(num === 1, 'Could not increment the number')
        })

        it('Should prevent reentracy', async () => {
            let success = false
            try {
                await contract.recursiveIncrement()
            } catch (error) {
                if (String(error).includes('No reentracy')) {
                    success = true
                }
            }
            assert(success, 'Could not prevent reentracy')
        })

    })