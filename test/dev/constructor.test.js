const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Constructor'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        const name = 'John'
        let owner
        before(async () => {
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            const accounts = await hre.ethers.getSigners()
            owner = accounts[0].address
            contract = await Contract.deploy(name, owner)
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should initialize state variables accordingly', async () => {
            const _name = String(await contract.getName())
            const _owner = String(await contract.getOwner())
            assert(_name === name && _owner === owner, 'Could not initialze state variables in constructor')
        })

    })