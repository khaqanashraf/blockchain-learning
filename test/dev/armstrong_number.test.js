const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'ArmstrongNumber'

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

        it('Should determine that 1 is an armstronge number', async () => {
            const isArmestrong = Number(await contract.isArmestrong(1))
            assert(isArmestrong, 'Could not determine that 1 is an armstronge number')
        })

        it('Should determine that 1634 is an armstronge number', async () => {
            const isArmestrong = Number(await contract.isArmestrong(1634))
            assert(isArmestrong, 'Could not determine that 1634 is an armstronge number')
        })

        it('Should determine that 153 is an armstronge number', async () => {
            const isArmestrong = Number(await contract.isArmestrong(153))
            assert(isArmestrong, 'Could not determine that 153 is an armstronge number')
        })

        it('Should determine that 64 is not an armstronge number', async () => {
            const isArmestrong = Number(await contract.isArmestrong(64))
            assert(!isArmestrong, 'Could not determine that 64 is not an armstronge number')
        })

        it('Should determine that 144 is not an armstronge number', async () => {
            const isArmestrong = Number(await contract.isArmestrong(144))
            assert(!isArmestrong, 'Could not determine that 144 is not an armstronge number')
        })

    })