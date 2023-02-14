const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Enum'

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

        it('Should set initial shipping status to Pending', async () => {
            const status = Number(await contract.getShippingStatus())
            assert(status === 0, 'Did not set the default shipping status to Pending')
        })
        it('Should set complete the shipping', async () => {
            await contract.completeShipping()
            const status = Number(await contract.getShippingStatus())
            assert(status === 2, 'Could not set status to shipped')
        })
        it('Should set cancel shipping', async () => {
            await contract.cancelShipping()
            const status = Number(await contract.getShippingStatus())
            assert(status === 1, 'Could not set status to cancel')
        })


    })