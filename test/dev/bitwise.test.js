const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'BitwiseOps'

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

        it('Should calculate and of 1001 and 0110 to 0000', async () => {
            const num1 = 9  // 1001
            const num2 = 6  // 0110
            const result = Number(await contract.and(num1, num2))
            assert(result === 0, 'Could not calculate and')
        })

        it('Should calculate or of 1001 and 0110 to 1111', async () => {
            const num1 = 9  // 1001
            const num2 = 6  // 0110
            const result = Number(await contract.or(num1, num2))
            assert(result === 15, 'Could not calculate or')
        })

        it('Should calculate xor of 1010 and 1100 to 0110', async () => {
            const num1 = 10 // 1010
            const num2 = 12 // 1100
            const result = Number(await contract.xor(num1, num2))
            assert(result === 6, 'Could not calculate xor')
        })

        it('Should calculate not of 11110001 to 00001110', async () => {
            const num = 241   // 11110001
            const expected = 14  // 00001110
            const result = Number(await contract.not(num))
            assert(result === expected, 'Could not calculate not')
        })

        it('Should shift left binary by 2 bit from 0001 to 0100', async () => {
            const num = 1   // 0001
            const bits = 2
            const expected = 4  // 0100
            const result = Number(await contract.shiftLef(num, bits))
            assert(result === expected, 'Could not shift left bits to left by 2 bit')
        })

        it('Should shift right binary by 2 bit from 0100 to 0001', async () => {
            const num = 4   // 0100
            const bits = 2
            const expected = 1  // 0001
            const result = Number(await contract.shiftRight(num, bits))
            assert(result === expected, 'Could not shift right bits to left by 2 bit')
        })

        it('Should get mask of 4 bits to 1111', async () => {
            const bits = 4
            const result = Number(await contract.getMask(bits))
            assert(result === 15, 'Could not get mask of 4 bits')
        })

    })