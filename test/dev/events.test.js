const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Events'

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

        it('Should eposite amount to the contract', async () => {
            const accounts = await hre.ethers.getSigners()
            const tx = await contract.deposite(10)
            const response = await tx.wait()
            const event = (response.events.filter(e => e.event === 'Deposite'))[0]
            const { depositor, amount } = event.args
            const currentAmount = Number(await contract.getAmount())
            assert(currentAmount === 10 && depositor == accounts[0].address && Number(amount) === 10, 'Could not deposite the amount')
        })


    })