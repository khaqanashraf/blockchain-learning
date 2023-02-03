const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Variables'
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

        it('Should get variables of smart contracts', async () => {
            const message = String(await contract.s_message());
            const num = Number(await contract.s_num());
            assert(message === 'Hello World!' && num === 123, 'Could not get variables')
        })

        it('Should get values of variables set by global variables', async () => {
            const owner = String(await contract.s_owner());
            const blockTime = Number(await contract.s_blockTime());
            const signers = await hre.ethers.getSigners()
            const deployer = signers[0].address

            assert(owner === deployer && blockTime > 0, 'Could net get values set by Global variables')
        })

    })