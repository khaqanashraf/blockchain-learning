/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config()
require( "@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")

const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.17",
  networks: {
    bscTestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: [PRIVATE_KEY],
      chainId: 97
    }
  },
  etherscan: {
    apiKey: {
      bscTestnet: process.env.BSCSCAN_API_KEY
    },
    
  },
  PROJECT_DIRECTORY: __dirname
};
