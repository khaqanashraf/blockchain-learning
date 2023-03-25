const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Charity'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        let owner
        let user
        let ownerInitialBalance
        before(async () => {
            const signers = await hre.ethers.getSigners()
            owner = signers[1]
            user = signers[2]
            ownerInitialBalance = await owner.getBalance()
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy(owner.address)
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should get the right owner of the contract', async () => {
            const _owner = await contract.getOwner()
            assert(_owner == owner.address, 'Could not get the right owner of the contract')
        })

        it('Should get zero balance of the contract', async () => {
            const balance = String(await contract.getBalance())
            assert(balance === '0', 'Could not get zero balance of the contract')
        })

        it('Should receive ethers from non owner account', async () => {
            await contract.connect(user).deposit({ value: String(0.1 * 1e18) })
            assert(true, 'Could not receive ethers from non owner account')
        })

        it('Should get the updated balance', async () => {
            const balance = String(await contract.getBalance())
            assert(balance === String(0.1 * 1e18), 'Could not get updated balance of the contract')
        })

        it('Should withdraw ethers to owner account', async () => {
            await contract.withdraw()
            assert(true, 'Could not withdraw balance to owner account')
        })

        it('Should get zero balance after withdraw', async () => {
            const balance = String(await contract.getBalance())
            assert(balance === '0', 'Could not get zero balance of the contract')
        })

        it('Should increase the owner balance', async () => {
            const ownerCurrentBalance = await owner.getBalance()
            const currentBalanceEth = Number(ownerCurrentBalance / 1e18)
            const initialBalanceEth = Number(ownerInitialBalance / 1e18)
            assert(initialBalanceEth + 0.1 == currentBalanceEth, 'Could not increase owner balance')
        })

    })