const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'NestedMapping'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        let deployerAddress
        before(async () => {
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy()

            const deployer = (await hre.ethers.getSigners())[0]
            deployerAddress = deployer.address
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should get nested mapping bool status', async () => {
            const status = Boolean(await contract.getNested(deployerAddress, 1))
            assert(status === false, 'Could not get nested mapping bool status')
        })

        it('Should set token 1 for deployer true', async () => {
            await contract.setNested(deployerAddress, 1, true)
            assert(true, 'Could not set token 1 for deployer true')
        })

        it('Should set token 2 for deployer false', async () => {
            await contract.setNested(deployerAddress, 2, false)
            assert(true, 'Could not set token 2 for deployer false')

        })

        it('Should get token 1 for deployer true', async () => {
            const status = Boolean(await contract.getNested(deployerAddress, 1))
            assert(status === true, 'Could not get token 1 for deployer true')
        })

        it('Should get token 2 for deployer false', async () => {
            const status = Boolean(await contract.getNested(deployerAddress, 2))
            assert(status === false, 'Could not get token 2 for deployer false')
        })

        it('Should remove token 1 for deployer', async () => {
            await contract.removeNested(deployerAddress, 1)
            assert(true, 'Could not remove token 1 for deployer')
        })

        it('Should get token 1 for deployer false', async () => {
            const status = Boolean(await contract.getNested(deployerAddress, 1))
            assert(status === false, 'Could not get token 1 for deployer false')
        })

    })