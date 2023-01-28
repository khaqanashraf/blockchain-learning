const { assert } = require('chai')
const { network } = require('hardhat')
const hre = require('hardhat')

const CONTRACT_NAME = 'IfElse'

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

        it('Should return Even for integer number 8', async () => {
            const evenOrOdd = String(await contract.evenOrOdd(8));

            assert(evenOrOdd === 'Even', 'It could not determine that 8 is even');
        })
        it('Should return Odd for integer numner 7', async () => {
            const evenOrOdd = String(await contract.evenOrOdd(7));

            assert(evenOrOdd === 'Odd', 'It could not determine that 7 is odd');
        })
        it('Should return B for 75 percentage', async () => {
            const grade = String(await contract.calculateGrade(75))
            assert(grade === 'B', 'Grade is not calculated correctly');
        })
        it('Should return F for 49 percentage', async () => {
            const grade = String(await contract.calculateGrade(49))
            assert(grade === 'F', 'Grade is not calculated correctly');
        })
        it('Should return Not valid for 110 percentage', async () => {
            const grade = String(await contract.calculateGrade((110)))
            assert(grade === 'Not Valid', 'Grade is not calculated correctly');
        })

    })