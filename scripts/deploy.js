
const { network } = require('hardhat');
const hre = require('hardhat')
const fs = require('fs')

async function main() {
   
    /**
     * Contracts file name and file path that contains contract name and constructor arguments to be deployed
     */
    const contractsDataFileName = 'contracts.json'
    const contractsDataFilePath = __dirname + '/' + contractsDataFileName
    const contractsData = require('./' + contractsDataFileName)

    /**
     * Get network identifier from hardhat
     */
    const networkIdentifier = network.name

    /**
     * Iterate over each contract then deploy and save contract address into same json
     */
    for(let contractData of contractsData){
        const contractName = contractData.name
        const constructorArguments = contractData.args

        /**
         * Deploy and get contract address using hardhat
         */
        const Contract = await hre.ethers.getContractFactory(contractName)
        const contract = await Contract.deploy(...constructorArguments)
        const contractAddress = contract.address
    
        contractData[networkIdentifier] = {address: contractAddress}
        console.log(`The contract ${contractName} is deployed on address: ${contractAddress}`);
    }

    /**
     * Update contracts json with newly deployed addresses
     */
    fs.writeFileSync( contractsDataFilePath, JSON.stringify(contractsData))
    
}

main().then(() => { 

    console.log('Program executed successfully!');
}).catch((e) => { 

    console.log('An error occured during execution with following error.');
    console.log(e);
})