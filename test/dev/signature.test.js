const { assert } = require('chai')
const { network, ethers } = require('hardhat')
const hre = require('hardhat')
const { hashMessage } = require("@ethersproject/hash");

const CONTRACT_NAME = 'VerifySignature'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        const message = "Changaiz Khan"
        let ecrecoverSign
        let signer
        let signedMessage
        before(async () => {
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy()

            const signers = await hre.ethers.getSigners()
            signer = signers[0]

            const messageHash = ethers.utils.id(message);
            const messageHashBytes = ethers.utils.arrayify(messageHash)
            ecrecoverSign = await signer.signMessage(messageHashBytes);

            signedMessage = await signer.signMessage(message)
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })


        it('Should split signature to get v,r and s', async () => {
            const { r, s, v } = await contract.splitSignature(ecrecoverSign)
            assert(r && s && v, 'Could not split signature')
        })

        it('Should get message hash', async () => {
            const hash = await contract.getMessageHash(message)
            assert(hash, 'Could not get message hash')
        })

        it('Should get signed message hash', async () => {
            const signedMessageHash = await contract.getEthSignedMessageHash('0x55153420bacbf1096545b4af53e0f41da9fa9a6d5401fee803d1259af438c145')
            assert(signedMessageHash, 'Could not get signed message hash')
        })

        it('Should recover signer from eth signed hash using ecreciver', async () => {
            const { r, s, v } = await contract.splitSignature(ecrecoverSign)
            const hash = await contract.getMessageHash(message)
            const recovered = await contract.verifyHash(hash, v, r, s)
            assert(recovered == signer.address, 'Could not reciver signer from eth signed hash')
        })

        it('Should recover signer by custom recovery', async () => {
            const { r, s, v } = await contract.splitSignature(signedMessage)
            const recovered = await contract.verifyString(message, v, r, s)
            assert(recovered == signer.address, 'Could not recover signer by custom computation')
        })

    })