const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')


if (network.name === 'localhost')
    describe(`Testing AbiEncode smart contract`, async () => {
        let token
        let abiEncode
        before(async () => {
            const Token = await hre.ethers.getContractFactory('contracts/AbiEncode.sol:Token')
            const AbiEncode = await hre.ethers.getContractFactory('contracts/AbiEncode.sol:AbiEncode')
            token = await Token.deploy()
            abiEncode = await AbiEncode.deploy()
        })

        it(`Should deploy AbiEncode smart contract to local environment`, async () => {
            assert(abiEncode.address && token.address, 'Contract is not deployed successfuly!')
        })

        it('Should get encoded with signature', async () => {
            const signers = await hre.ethers.getSigners()
            const signature = await abiEncode.encodeWithSignature(signers[1].address, String(0.1 * 1e18))
            assert(signature, 'Could not get signature')
        })

        it('Should get encoded with selector', async () => {
            const signers = await hre.ethers.getSigners()
            const signature = await abiEncode.encodeWithSelector(signers[1].address, String(0.1 * 1e18))
            assert(signature, 'Could not get signature')
        })

        it('Should get encoded call', async () => {
            const signers = await hre.ethers.getSigners()
            const signature = await abiEncode.encodeCall(signers[1].address, String(0.1 * 1e18))
            assert(signature, 'Could not get signature')
        })

        it('Should call transfer function with encoded signature', async () => {
            const signers = await hre.ethers.getSigners()
            const data = await abiEncode.encodeWithSignature(signers[1].address, String(0.1 * 1e18))
            await abiEncode.test(token.address, data)
            assert(true, 'Call failed with abi encoded data')
        })

    })