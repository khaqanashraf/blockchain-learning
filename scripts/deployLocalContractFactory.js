const { ethers } = require("ethers");
const fs = require('fs')

async function main() {
    
    /**
     * Read abi and byte code generated after compilation
     */
    const abiFileData = fs.readFileSync('/Users/tk-lpt-0687/Documents/kk/web3/chainlearning/outputs/contracts_HelloWorld_sol_HelloWorld.abi', 'utf8')
    const byteCodeFileData = fs.readFileSync('/Users/tk-lpt-0687/Documents/kk/web3/chainlearning/outputs/contracts_HelloWorld_sol_HelloWorld.bin', 'utf8')
    const abi = JSON.parse(abiFileData)

    /**
     * Get network on which the contract has to be dployed i.e. Ganache rpc url
     * Also get private key of contract deployer
     */
    const deployerPrivateKey = 'd02d7c06a97d3e3bccb3fac5afb30f19f876aa436c3ff7724e39bb4aedeaa349'
    const rpcUrl = 'http://127.0.0.1:7545'

    /**
     * Create contract instance using ethers lib and deploy
     * And Get deployed contract address
     */
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
    const wallet = new ethers.Wallet(deployerPrivateKey, provider)
    const Contract = new ethers.ContractFactory(abi, byteCodeFileData, wallet)
    const contract = await Contract.deploy()
    
    console.log(`The contract is deployed on address: ${contract.address}`);
}

main().then(() => { 

    console.log('Program executed successfully!');
}).catch((e) => { 

    console.log('An error occured during execution with following error,');
    console.log(e);
})