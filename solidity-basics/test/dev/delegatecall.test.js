const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')


if (network.name === 'localhost')
    describe(`Testing DelegateCalledContract and DelegateCallerContract smart contracts`, async () => {
        let delegateCalledContract
        let delegateCallerContract
        before(async () => {
            const DelegateCalledContract = await hre.ethers.getContractFactory('DelegateCalledContract')
            const DelegateCallerContract = await hre.ethers.getContractFactory('DelegateCallerContract')

            delegateCalledContract = await DelegateCalledContract.deploy()
            delegateCallerContract = await DelegateCallerContract.deploy()

        })

        it(`Should deploy DelegateCalledContract and DelegateCallerContract smart contracts to local environment`, async () => {
            assert(delegateCalledContract.address && delegateCallerContract.address, 'Contracts are not deployed successfuly!')
        })

        it('Should update storage variables of caller contracts after delegatecall', async () => {
            await delegateCallerContract.setValues(delegateCalledContract.address, 123, { value: String(0.1 * 1e18) })

            const callerValues = await delegateCallerContract.getValues()
            const calledValues = await delegateCalledContract.getValues()

            assert(String(callerValues[2]) === "123" && String(calledValues[2]) === "0", 'Could not update storage variables of caller contracts')
        })

    })