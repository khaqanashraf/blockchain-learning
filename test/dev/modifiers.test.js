const { assert } = require('chai')
const { ethers } = require('ethers')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Modifiers'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        let deployerAddress
        before(async () => {
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy()
            const signer = (await hre.ethers.getSigners())[0]
            deployerAddress = signer.address
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should get and verify owner address', async () => {
            const ownerAddress = String(await contract.getOwner())
            assert(ownerAddress === deployerAddress, 'Could not get correct owner address')
        })

        it('Should not update owner from another account', async () => {
            const accounts = await hre.ethers.getSigners()
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)

            const modifiersContract = new ethers.Contract(contract.address, Contract.interface, accounts[1])
            let success = false
            try {
                await modifiersContract.changeOwner(accounts[1].address)
            } catch (error) {
                if (String(error).includes('Not owner'))
                    success = true
            }

            assert(success, 'Could able to update owner address from another account')
        })

        it('Should update owner address', async () => {
            const accounts = await hre.ethers.getSigners()
            await contract.changeOwner(accounts[1].address)
            assert(true, 'Could not change owner')
        })

        it('Should have updated the owner of contract', async () => {
            const ownerAddress = String(await contract.getOwner())
            const accounts = await hre.ethers.getSigners()
            assert(ownerAddress === accounts[1].address, 'Could not update the owner')
        })

    })