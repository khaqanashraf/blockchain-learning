const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'LCM'

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

        it('Should find LCM of 3 and 9 is 9', async () => {
            const lcm = Number(await contract.findLcm(3, 9))
            assert(lcm === 9, 'Could not find the correct lcm of 3 and 9')
        })

        it('Should find LCM of 12 and 9 is 36', async () => {
            const lcm = Number(await contract.findLcm(12, 9))
            assert(lcm === 36, 'Could not find the correct lcm of 12 and 9')
        })

        it('Should find LCM of 7 and 8 is 56', async () => {
            const lcm = Number(await contract.findLcm(7, 8))
            assert(lcm === 56, 'Could not find the correct lcm of 7 and 8')
        })

    })