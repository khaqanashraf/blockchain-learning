const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Shapes'

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

        it('Should add circle shape', async () => {
            await contract.addCircle();
            assert(true, 'Could not add circle shape')
        })
        it('Should add square shape', async () => {
            await contract.addSquare();
            assert(true, 'Could not add square shape')
        })
        it('Should shapes in order', async () => {
            const shapes = await contract.getShapeNames()
            const shapeNames = ['Circle', 'Square']
            let success = true
            for (let i = 0; i < shapes.length; i++) {
                if (shapes[i] !== shapeNames[i]) {
                    success = false
                }
            }
            assert(success, 'Could not get shapes in order')
        })

    })