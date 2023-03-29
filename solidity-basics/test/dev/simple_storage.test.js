const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'SimpleStorage'

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

        it('Should get num from SimpleStorage smart contract', async () => {
            const num = Number(await contract.getNum());

            assert(num === 0, 'Could not get the num by calling the function')
        })

        it('Should set num from SimpleStorage smart contract', async () => {
            let updateSuccess = false
            try {
                await contract.setNum(123);
                updateSuccess = true
            } catch (error) {

            }

            assert(updateSuccess, 'Could not set the num by calling the function')
        })

        it('Should get updated num from SimpleStorage smart contract', async () => {
            const num = Number(await contract.getNum());

            assert(num === 123, 'Could not get the num by calling the function')
        })

    })