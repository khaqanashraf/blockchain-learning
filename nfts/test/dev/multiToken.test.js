const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Components'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        let accounts
        before(async () => {
            // accounts = await hre.ethers.getSigners()
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy()
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should get the uri of assets', async () => {
            const uri = await contract.uri(2);

            assert(uri, 'Could not get the uri for tokens')
        })

        it('Should get mint item of type 0', async () => {
            let success = true
            try {
                await contract.safeMint(0, 1, 0xf)
            } catch (error) {
                success = false
            }

            assert(success, 'Could not mint item of type 0')
        })



    })