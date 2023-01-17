const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

if (network.name === 'localhost')
    describe('Testing Counter smart contract', async () => {
        const CONTRACT_NAME = 'Counter'
        let contract
        before(async () => {
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy()
        })

        it('Should deploy smart contract to local environment', async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should get count variable value and it should be zero', async () => {
            const value = await contract.getCount()
            assert(String(value) === '0', 'Count value is not zero')
        })

        it('Should increment count value', async () => {
            await contract.increment()
            const value = await contract.getCount()
            assert(String(value) === '1', 'Count value is not incrementing')
        })
        it('Should decrement count value', async () => {
            await contract.decrement()
            const value = await contract.getCount()
            assert(String(value) === '0', 'Count value is not incrementing')
        })
        it('Should not set count value to negative', async () => {
            try {
                await contract.decrement()
            } catch (error) {

            }
            const value = await contract.getCount()
            console.log(value);
            assert(String(value) === '0', 'Count value must not be negative')
        })

    })