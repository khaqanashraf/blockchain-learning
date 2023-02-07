const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Mapping'

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

        it('Should set balance against deployer address', async () => {
            const deployer = (await hre.ethers.getSigners())[0]
            const deployerAddress = deployer.address
            const balance = 100
            let success = true
            try {
                await contract.addBalance(deployerAddress, balance)

            } catch (error) {
                success = false
            }

            assert(success, 'Could not set balance against address')

        })

        it('Should get deployer balance', async () => {
            const deployer = (await hre.ethers.getSigners())[0]
            const deployerAddress = deployer.address
            const balance = Number(await contract.getBalance(deployerAddress))
            assert(balance === 100, 'Could not get deployer balance')
        })

        it('Should remove deployer balance', async () => {
            const deployer = (await hre.ethers.getSigners())[0]
            const deployerAddress = deployer.address
            await contract.removeBalance(deployerAddress)
            assert(true, 'Could not remove deployer balance')
        })

        it('Should not get deployer balance', async () => {
            const deployer = (await hre.ethers.getSigners())[0]
            const deployerAddress = deployer.address
            const balance = Number(await contract.getBalance(deployerAddress))

            assert(balance === 0, 'It should not get deployer balance after it was removed')
        })


    })