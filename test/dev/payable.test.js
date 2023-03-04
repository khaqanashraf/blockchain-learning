const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Funds'

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

        it('Should send some ethers to contract', async () => {
            const accounts = await hre.ethers.getSigners()
            await contract.connect(accounts[1]).deposite({ value: String(0.5 * 1e18) })
            assert(true, 'Could not send ethers to contract')
        })
        it('Should not send some ethers to non payable function contract', async () => {
            let success
            try {
                const accounts = await hre.ethers.getSigners()
                await contract.connect(accounts[1]).depositeNonPayable({ value: String(0.5 * 1e18) })
                success = false
            } catch (error) {
                success = true
            }

            assert(success, "Could sent Eth to non payable function")
        })
        it('Should get correct amount of ethers received till now', async () => {
            const balance = String(await contract.getBalance())
            assert(balance === String(0.5 * 1e18), 'Could not get the correct balance of the contract')
        })
        it('Should transfer some ethers to other address', async () => {
            const accounts = await hre.ethers.getSigners()
            await contract.transfer(accounts[1].address, String(0.1 * 1e18))
            assert(true, 'Could not transfer some ethers to another account')
        })
        it('Should have the remaining amount of ethers', async () => {
            const balance = String(await contract.getBalance())
            assert(balance === String(0.4 * 1e18), 'Could not get the correct balance of the contract')
        })

        it('Should not allow withdraw other than the owner', async () => {
            const accounts = await hre.ethers.getSigners()
            let success = false
            try {
                await contract.connect(accounts[1]).withdraw()
            } catch (error) {
                if (String(error).includes('Not Owner')) {
                    success = true
                }
            }
            assert(success, 'Anyone can withdraw ethers')
        })
        it('Should withdraw all remaining ethers', async () => {
            await contract.withdraw()
            assert(true, 'Could not withdraw all the balance')
        })
        it('Should have all ethers in owner account', async () => {
            const balance = String(await contract.getBalance())
            assert(balance === "0", 'Not transfered successfuly')
        })

    })