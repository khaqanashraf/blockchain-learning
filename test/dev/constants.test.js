const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Constants'

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

        it('Should get address and code', async () => {
            const address = String(await contract.CONTRACT_ADDRESS())
            const code = Number(await contract.CODE())

            assert(address === '0x7bb1Dff3cFa2c96034574D43396Cf6F0dAb506c8' && code === 1234, 'Could not get address and code')
        })

    })