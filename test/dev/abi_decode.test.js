const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')


if (network.name === 'localhost')
    describe(`Testing AbiEncode smart contract`, async () => {
        let contract
        before(async () => {
            const Contract = await hre.ethers.getContractFactory('contracts/AbiDecode.sol:AbiDecode')
            contract = await Contract.deploy()
        })

        it(`Should deploy AbiEncode smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        let encoded
        it('Should encode data successfully', async () => {
            const signers = await hre.ethers.getSigners()
            encoded = await contract.encode(signers[1].address, String(0.1 * 1e18))
            assert(encoded, 'Could not encode data successfully')
        })

        it('Should decode data successfully', async () => {
            const signers = await hre.ethers.getSigners()
            const decoded = await contract.decode(encoded)
            assert(decoded[0] == signers[1].address && decoded[1] == String(0.1 * 1e18), 'Could not decode data successfully')
        })


    })