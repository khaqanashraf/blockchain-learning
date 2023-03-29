const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'EtherUnits'

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

        it('Should get one wei and it must be equal to 1', async () => {
            const oneWei = Number(await contract.i_oneWei());
            const isOneWei = Boolean(await contract.i_isOneWei());

            assert(oneWei && oneWei === 1 && isOneWei, '1 wei is not equal to 1 in js')
        })

        it('Should get one ether and it must be equal to 1e18', async () => {
            const oneEther = Number(await contract.i_oneEther());
            const isOneEther = Boolean(await contract.i_isOneEther());

            assert(oneEther && oneEther === 1e18 && isOneEther, '1 ether is not equal to 1e18 in js')
        })

    })