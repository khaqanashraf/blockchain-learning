const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Account'

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

        it('Should get initial balance as 0', async () => {
            const balance = Number(await contract.getBalance())
            assert(balance === 0, 'Could not get 0 initial balance of account')
        })
        it('Should deposite 10 into account', async () => {
            await contract.deposite(10);
            assert(true, 'Coult not deposite 10 wei in account')
        })
        it('Should get balance of 10 now', async () => {
            const balance = Number(await contract.getBalance())
            assert(balance === 10, 'Could not get correct balance after depoisite')
        })
        it('Should withdraw 3 from account', async () => {
            await contract.withdraw(3);
            assert(true, 'Coult not withdraw 3 wei in account')
        })
        it('Should get balance of 7 now', async () => {
            const balance = Number(await contract.getBalance())
            assert(balance === 7, 'Could not get correct balance after withdraw')
        })


    })