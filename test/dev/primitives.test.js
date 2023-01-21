const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'Primitives'


if (network.name === 'localhost')
    describe(`Testing ${CONTRACT_NAME} smart contract`, async () => {
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
            const address = String( await contract.addr())
            const bytes = String( await contract.bt())

            const valid = smallInt===9 && num===-20 && smallUInt===10 && uInt===1200 && flag===true && address==='0x36C02dA8a0983159322a80FFE9F24b1acfF8B570' && bytes==='0x61'

            assert(valid , 'Could not get variables of primitive data types')
        })

        it('Should get all default values for primitive variables from smart contract', async ()=>{
            const defaultSmallInt = Number( await contract.defaultSmallInt())
            const defaultInt = Number( await contract.defaultInt())
            const defaultSmallUInt = Number( await contract.defaultSmallUInt())
            const defaultUInt = Number( await contract.defaultUInt())
            const defaultBool = Boolean( await contract.defaultBool())
            const defaultAddress = String( await contract.defaultAddress())
            const defaultBytes = String( await contract.defaultBytes())

            const valid = defaultSmallInt===0 && defaultInt===0 && defaultSmallUInt===0 && defaultUInt===0 && defaultBool===false && defaultAddress==='0x0000000000000000000000000000000000000000' && defaultBytes==='0x00'

            assert(valid , 'Could not get default values of primitive data type variables')
        })


    })