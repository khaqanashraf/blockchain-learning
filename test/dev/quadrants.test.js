const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Quadrants'

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

        it('Should find a point in first quadrant', async () => {
            const x = 1, y = 2;
            const quadrant = Number(await contract.findQuadrant(x, y))

            assert(quadrant === 0, 'Could not find point in first quadrant')
        })

        it('Should find a point in second quadrant', async () => {
            const x = -1, y = 2;
            const quadrant = Number(await contract.findQuadrant(x, y))

            assert(quadrant === 1, 'Could not find point in second quadrant')
        })

        it('Should find a point in third quadrant', async () => {
            const x = -1, y = -2;
            const quadrant = Number(await contract.findQuadrant(x, y))

            assert(quadrant === 2, 'Could not find point in third quadrant')
        })

        it('Should find a point in fourth quadrant', async () => {
            const x = 1, y = -2;
            const quadrant = Number(await contract.findQuadrant(x, y))

            assert(quadrant === 3, 'Could not find point in fourth quadrant')
        })

        it('Should not find point in first quadrant', async () => {
            const x = 1, y = -2;
            const quadrant = Number(await contract.findQuadrant(x, y))

            assert(quadrant !== 0, 'Wrongly find point in first quadrant')
        })

    })