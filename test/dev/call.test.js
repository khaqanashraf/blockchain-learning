const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')


if (network.name === 'localhost')
    describe(`Testing CallReceiver and CallResponse smart contracts`, async () => {
        let callReceiverContract
        let callResponseContract
        before(async () => {
            const CallReceiverContract = await hre.ethers.getContractFactory("CallReceiver")
            const CallResponseContract = await hre.ethers.getContractFactory("CallResponse")
            callReceiverContract = await CallReceiverContract.deploy()
            callResponseContract = await CallResponseContract.deploy()
        })

        it(`Should deploy CallReceiver and CallResponse smart contracts to local environment`, async () => {
            assert(callReceiverContract.address && callResponseContract.address, 'Contracts are not deployed successfuly!')
        })

        it('Should call the relevent function using call', async () => {
            const tx = await callResponseContract.callTest(callReceiverContract.address, { value: String(0.1 * 1e18) });
            const response = await tx.wait()
            const event = response.events.find(e => e.event === 'Response')
            const args = event.args
            assert(args[0], "Could not call existing function using lower level call");
        })
        it('Should call fallback function using call when function not exists', async () => {
            const tx = await callResponseContract.callFallback(callReceiverContract.address, { value: String(0.1 * 1e18) });
            const response = await tx.wait()
            const event = response.events.find(e => e.event === 'Response')
            const args = event.args
            assert(args[0], "Could not call a function if not exists even fallback exists");
        })

    })