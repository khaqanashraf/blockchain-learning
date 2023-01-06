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
    const deployerPrivateKey = '6e2c3b6b7e70d0e28a6d19b938e02adbf77ebdd99dc5c210caf3fcf39228e4a3'
    const rpcUrl = 'https://data-seed-prebsc-1-s1.binance.org:8545/'

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