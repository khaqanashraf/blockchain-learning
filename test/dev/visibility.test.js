const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')


if (network.name === 'localhost')
    describe(`Testing Visiblity smart contracts`, async () => {
        let childContract
        let baseContract
        before(async () => {
            const ChildContract = await hre.ethers.getContractFactory("Child")
            const BaseContract = await hre.ethers.getContractFactory("Base")
            childContract = await ChildContract.deploy()
            baseContract = await BaseContract.deploy()

        })

        it(`Should deploy Child smart contract to local environment`, async () => {
            assert(childContract.address, 'Child Contract is not deployed successfuly!')
        })

        it(`Should deploy Baes smart contract to local environment`, async () => {
            assert(baseContract.address, 'Base Contract is not deployed successfuly!')
        })

        it('Should call internal function inside the child contract', async () => {
            const fun = String(await childContract.testInternalFunction())
            assert(fun === 'internal', 'Could not call internal function in child contract')
        })
        it('Should call private function inside the base contract', async () => {
            const fun = String(await baseContract.testPrivateFunction())
            assert(fun === 'private', 'Could not call private function in child contract')
        })
        it('Should call public function outside the base contract', async () => {
            const fun = String(await baseContract.publicFunction())
            assert(fun === 'public', 'Could not call public function in child contract')
        })
        it('Should call external function outside the base contract', async () => {
            const fun = String(await baseContract.externalFunction())
            assert(fun === 'external', 'Could not call external function in child contract')
        })

    })