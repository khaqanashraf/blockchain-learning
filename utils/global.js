const fs = require('fs')

const readContractsData = () => {
    const contractsData = require('../contracts.json')
    return contractsData
}

const writeContractsData = async (data) => {
    const rootPath = process.env.PWD
    fs.writeFileSync(rootPath + '/contracts.json', JSON.stringify(data))
}

const updateContractDeployedAddress  = async (contractName, networkIdentifier, contractAddress, constructorArguments = []) => {
    const contractsData = readContractsData()

    const contract = contractsData[contractName]
    if(contract && contract[networkIdentifier]){
        contractsData[contractName][networkIdentifier] = {address: contractAddress, args: constructorArguments}
    }
    else {
        const obj = {}
        obj[networkIdentifier] = {address: contractAddress}
        contractsData[contractName] = obj
    }

    await writeContractsData(contractsData)
}

module.exports = {
    readContractsData,
    writeContractsData,
    updateContractDeployedAddress
}