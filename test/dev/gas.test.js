const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Gas'

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

        it('Should get state variable num and it must be equal to 0', async () => {
            const num = Number(await contract.getNum())

            assert(num === 0, 'state variable is not equal to 0')
        })
        it('Should call run function and it must failed the transaction', async () => {
            let transactionFailed = false
            try {
                // await contract.run()

            } catch (error) {
                transactionFailed = true
            }

            assert(transactionFailed, 'The program is running forever')
        })
        it('Should get state variable num and it should be still 0', async () => {
            const num = Number(await contract.getNum())

            assert(num === 0, 'state variable is not equal to 0')
        })

    })