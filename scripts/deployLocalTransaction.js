const { ethers } = require("ethers");
const fs = require('fs')

async function main() {
    
    /**
     * Read abi and byte code generated after compilation
     */
    const byteCodeFileData = fs.readFileSync('/Users/tk-lpt-0687/Documents/kk/web3/chainlearning/outputs/contracts_HelloWorld_sol_HelloWorld.bin', 'utf8')

    /**
     * Get network on which the contract has to be dployed i.e. Ganache rpc url
     * Also get private key of contract deployer
     */
    const deployerPrivateKey = 'd02d7c06a97d3e3bccb3fac5afb30f19f876aa436c3ff7724e39bb4aedeaa349'
    const rpcUrl = 'http://127.0.0.1:7545'

    /**
     * instantiate provider and wallet
     */
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
    const wallet = new ethers.Wallet(deployerPrivateKey, provider)

    /**
     * get nonce of the account and build a raw transaction
     */
    const nonce = await wallet.getTransactionCount()
    const tx = {
        nonce: nonce,
        gasPrice: 50000000000000,
        gasLimit: 1000000,
        value: 0,
        to: null,
        data: "0x" + byteCodeFileData,
        chainId: 1337
    }

    /**
     * Send transaction to network and get contract address
     */
    const txResponse = await wallet.sendTransaction(tx)
    await txResponse.wait()
    const contractAddress = ethers.utils.getContractAddress(txResponse)
    console.log(`The contract is deployed on address: ${contractAddress}`);
}

main().then(() => { 

    console.log('Program executed successfully!');
}).catch((e) => { 

    console.log('An error occured during execution with following error,');
    console.log(e);
})