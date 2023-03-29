const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Array'

if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        let signers
        before(async () => {
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy()
            signers = await hre.ethers.getSigners()
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should add two contributers to array', async () => {
            await contract.pushContributer(signers[0].address)
            await contract.pushContributer(signers[1].address)

            assert(true, 'Could not add multiple contributers')
        })

        it('Should get length of array and it should be 2', async () => {
            const numOfContributers = Number(await contract.getNumberOfContributers())
            assert(numOfContributers === 2, 'Could not get 2 number of contributers')
        })

        it('Should pop the last contributer and the length should be 1 now', async () => {
            await contract.popContributer()
            const numOfContributers = Number(await contract.getNumberOfContributers())
            assert(numOfContributers === 1, 'Could not get 1 number of contributers')
        })

        it('Should get first contributer and it has to be deployer', async () => {
            const contributer = String(await contract.getContributer(0))
            assert(contributer === signers[0].address, 'First contributer is not deployer')
        })

        it('Should not get any other contributer', async () => {
            let success = false
            try {
                await contract.getContributer(1)

            } catch (error) {
                success = true
            }
            assert(success, 'There should not be any other contributer')
        })

    })