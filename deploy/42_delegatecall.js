const { network } = require('hardhat')
const hre = require('hardhat')
const { updateContractDeployedAddress } = require('../utils/global')

module.exports = async () => {
    const args = []
    const DelegateCalledContract = await hre.ethers.getContractFactory('DelegateCalledContract')
    const DelegateCallerContract = await hre.ethers.getContractFactory('DelegateCallerContract')

    const delegateCalledContract = await DelegateCalledContract.deploy(...args)
    const delegateCallerContract = await DelegateCallerContract.deploy(...args)


    console.log(`The contract "DelegateCalledContract" is deployed on address: ${delegateCalledContract.address}`);
    console.log(`The contract "DelegateCallerContract" is deployed on address: ${delegateCallerContract.address}`);

    await updateContractDeployedAddress('DelegateCalledContract', network.name, delegateCalledContract.address, args)
    await updateContractDeployedAddress('DelegateCallerContract', network.name, delegateCallerContract.address, args)

}

module.exports.tags = ['DelegateCalledContract', 'DelegateCallerContract']