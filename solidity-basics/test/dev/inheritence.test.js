const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Cop'

if (network.name === 'localhost')
    describe(`Testing inheritece in ${CONTRACT_NAME} smart contract`, async () => {
        let contract
        const stars = 3
        const rank = 6
        const name = 'John'
        before(async () => {
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy(rank, stars, name)
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should get attribute of base and parent contracts', async () => {
            const attributes = await contract.getAttributes()
            const _stars = Number(attributes.stars)
            const _rank = Number(attributes.rank)
            const _name = String(attributes.name)

            assert(_stars === stars && _rank === rank && _name === name, 'Could not call functions of parent contracts')
        })

    })