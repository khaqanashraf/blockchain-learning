const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'BasicNFT'

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

        it('Should mint a new nft and should have tokenId 0', async () => {
            await contract.mint()
            const tokenId = Number(await contract.getTokenCounter()) - 1
            assert(tokenId === 0, 'Could not mint an nft and get 0 tokenid')
        })
        it('Should mint a new nft and should have tokenId 1', async () => {
            await contract.mint()
            const tokenId = Number(await contract.getTokenCounter()) - 1
            assert(tokenId === 1, 'Could not mint an nft and get 1 tokenid')
        })
        it('Should mint a new nft and should have tokenId 2', async () => {
            await contract.mint()
            const tokenId = Number(await contract.getTokenCounter()) - 1
            assert(tokenId === 2, 'Could not mint an nft and get 2 tokenid')
        })
        it('Should mint a new nft and should have tokenId 3', async () => {
            await contract.mint()
            const tokenId = Number(await contract.getTokenCounter()) - 1
            assert(tokenId === 3, 'Could not mint an nft and get 3 tokenid')
        })
        it('Should get same token uri for token id 0 and 3', async () => {
            const tokenUri0 = await contract.tokenURI(0)
            const tokenUri3 = await contract.tokenURI(3)
            assert(tokenUri0 === tokenUri3, 'Could not get same token uri for token id 0 and 3')
        })

    })