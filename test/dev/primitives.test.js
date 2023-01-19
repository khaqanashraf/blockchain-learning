const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

if (network.name === 'localhost')
    describe('Testing Primitives smart contract', async () => {
        const CONTRACT_NAME = 'Primitives'
        let contract
        before(async () => {
            const Contract = await hre.ethers.getContractFactory(CONTRACT_NAME)
            contract = await Contract.deploy()
        })

        it(`Should deploy ${CONTRACT_NAME} smart contract to local environment`, async () => {
            assert(contract.address, 'Contract is not deployed successfuly!')
        })

        it('Should get all primitive values from smart contract', async ()=>{
            const smallInt = Number( await contract.smallInt())
            const num = Number( await contract.num())
            const smallUInt = Number( await contract.smallUInt())
            const uInt = Number( await contract.uInt())
            const flag = Boolean( await contract.flag())

            const valid = smallInt===9 && num===-20 && smallUInt===10 && uInt===1200 && flag===true

            assert(valid , 'Could not get variables of primitive data types')
        })

        it('Should get all default values for primitive variables from smart contract', async ()=>{
            const defaultSmallInt = Number( await contract.defaultSmallInt())
            const defaultInt = Number( await contract.defaultInt())
            const defaultSmallUInt = Number( await contract.defaultSmallUInt())
            const defaultUInt = Number( await contract.defaultUInt())
            const defaultBool = Boolean( await contract.defaultBool())
            
            const valid = defaultSmallInt===0 && defaultInt===0 && defaultSmallUInt===0 && defaultUInt===0 && defaultBool===false

            assert(valid , 'Could not get default values of primitive data type variables')
        })


    })