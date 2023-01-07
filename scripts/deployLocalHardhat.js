const hre = require('hardhat')

async function main() {
   
    const Contract = await hre.ethers.getContractFactory('HelloWorld')
    const contract = await Contract.deploy()

    console.log(`The contract is deployed on address: ${contract.address}`);
}

main().then(() => { 

    console.log('Program executed successfully!');
}).catch((e) => { 

    console.log('An error occured during execution with following error,');
    console.log(e);
})