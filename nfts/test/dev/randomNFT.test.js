const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'RandomPriates'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        before(async () => {
            const RandomNumberContract = await hre.ethers.getContractFactory("RandomNumber")
            const randomNumberContract = await RandomNumberContract.deploy()

            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy(randomNumberContract.address, 10, 20, 70)
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should get correct ranges', async () => {
            const { whitebearedRagne, redhairedRange, blackbeardRange } = await contract.getRanges()
            assert(Number(whitebearedRagne) === 9 && Number(redhairedRange) === 29 && Number(blackbeardRange) === 99, 'Could not get correct ranges')
        })

        it('Should a mint a new nft randomly', async () => {
            await contract.mint()
            assert(true, 'Could not mint a new nft')
        })

    })