const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Ravi'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        let owner
        let spender
        let accounts
        before(async () => {
            accounts = await hre.ethers.getSigners()
            owner = accounts[0]
            spender = accounts[1]
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy(owner.address)
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should get owner of the token', async () => {
            const ownerAddress = await contract.getOwner()
            assert(ownerAddress == owner.address, 'Could not get the owner of token')
        })

        it('Should get balance of owner as zero', async () => {
            const balance = Number(await contract.balanceOf(owner.address))
            assert(balance === 0, 'Could not get zero balance of owner')
        })

        it('Should mint 25 tokens to the account of owner', async () => {
            await contract.mint(25)
            assert(true, 'Could not mint tokens')
        })

        it('Should have 25 tokens in owner account', async () => {
            const balance = await contract.balanceOf(owner.address)
            assert(balance == String(25 * 1e18), 'Could not have 25 tokens in owner account')
        })

        it('Should get total supply of token as 25', async () => {
            const totalSupply = await contract.totalSupply()
            assert(totalSupply == String(25 * 1e18), 'Could not get totaly supply as 25 tokens')
        })

        it('Should not transfer tokens from owners account using spender account', async () => {
            let success = false
            try {
                await contract.transferFrom(owner.address, spender.address, String(1 * 1e18))
            } catch (error) {
                if (String(error).includes("insufficient allowance"))
                    success = true
            }

            assert(success, 'Could not prevent invalid transfer from owners account using spender account')
        })

        it('Should approve allowance for 5 tokens on behalf of owner', async () => {
            await contract.approve(spender.address, String(5 * 1e18))
            assert(true, 'Could not approve allownce on behalf of owner')
        })

        it('Should verify allowance of 5 tokens on behalf of owner', async () => {
            const allowance = await contract.allowance(owner.address, spender.address)
            assert(allowance == String(5 * 1e18), 'Could not verify 5 tokens allowance')
        })

        it('Shoulf transfer 1 token using spender account from owner account on behalf of owner', async () => {
            await contract.connect(spender).transferFrom(owner.address, accounts[2].address, String(1 * 1e18))
            assert(true, 'Could not transfer 1 token on behalf of owner')
        })

        it('Should verify allowance of 4 tokens on behalf of owner', async () => {
            const allowance = await contract.allowance(owner.address, spender.address)
            assert(allowance == String(4 * 1e18), 'Could not verify 4 tokens allowance')
        })

        it('Should reduce balance of owner by 1 token', async () => {
            const balance = await contract.balanceOf(owner.address)
            assert(balance == String(24 * 1e18), 'Could not have 24 tokens in owner account')
        })

        it('Should have increased the balance of recepient', async () => {
            const balance = await contract.balanceOf(accounts[2].address)
            assert(balance == String(1 * 1e18), 'Could not have 1 token in recipient account')
        })

    })