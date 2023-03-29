const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'MultiSigWallet'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        let owners
        let accounts
        before(async () => {
            accounts = await hre.ethers.getSigners()
            owners = [accounts[0].address, accounts[1].address, accounts[2].address]
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy(owners, 3)
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should transfer ethers to contract by anyone', async () => {
            await contract.connect(accounts[3]).deposit({ value: String(0.5 * 1e18) })
            assert(true, 'Could not transfer ethers to contract by anyone')
        })

        it('Should create a transaction to transfer some funds to some account', async () => {
            const to = owners[1]
            const value = String(0.1 * 1e18)
            const data = 0xff
            await contract.submitTransaction(to, value, data)

            assert(true, 'Could not create transaction to transfer funds')
        })

        it('Should not execute the transaction', async () => {
            const txIndex = 0
            let success = false
            try {
                await contract.executeTransaction(txIndex)

            } catch (error) {
                if (String(error).includes('cannot execute tx'))
                    success = true
            }

            assert(success, 'Coudl not execute the transaction')
        })

        it('Should increase confirmation by one', async () => {
            const txIndex = 0
            await contract.confirmTransaction(txIndex)
            assert(true, 'Could not increase confirmation')
        })

        it('Should not execute transaction', async () => {
            const txIndex = 0
            let success = false
            try {
                await contract.executeTransaction(txIndex)
            } catch (error) {
                if (String(error).includes('cannot execute tx'))
                    success = true
            }
            assert(success, 'Could execute transaction')
        })

        it('Should not confirm same transaction by same owner twice', async () => {
            const txIndex = 0
            let success = false
            try {
                await contract.confirmTransaction(txIndex)
            } catch (error) {
                if (String(error).includes('tx already confirmed'))
                    success = true
            }
            assert(success, 'Could confirm transaction twice')
        })

        it('Should have enough confirmations', async () => {
            const txIndex = 0
            await contract.connect(accounts[1]).confirmTransaction(txIndex)
            await contract.connect(accounts[2]).confirmTransaction(txIndex)
            assert(true, 'Could not have enough confirmations')
        })

        it('Should revoke confirmation by one', async () => {
            const txIndex = 0
            await contract.revokeConfirmation(txIndex)
            assert(true, 'Could not revoke confirmation')
        })

        it('Should not execute transaction', async () => {
            const txIndex = 0
            let success = false
            try {
                await contract.executeTransaction(txIndex)
            } catch (error) {
                if (String(error).includes('cannot execute tx'))
                    success = true
            }
            assert(success, 'Could execute transaction')
        })

        it('Should have enought confirmations', async () => {
            const txIndex = 0
            await contract.confirmTransaction(txIndex)
            assert(true, 'Could not increase confirmation')
        })

        it('Should execute the transaction', async () => {
            const txIndex = 0
            await contract.executeTransaction(txIndex)
            assert(true, 'Could not execute transaction')
        })

        it('Should decrease the total funds of the contract', async () => {
            const balance = await contract.getBalance()
            assert(balance == String(0.4 * 1e18), 'Could not decrease the total funds')
        })

        it('Should transfer funds to respective account', async () => {
            const accountBalance = await accounts[1].getBalance()
            assert(accountBalance / 1e18 > 10000, 'Could not funds to respective account')
        })


    })