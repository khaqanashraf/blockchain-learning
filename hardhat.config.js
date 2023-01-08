/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config()
require( "@nomicfoundation/hardhat-toolbox")

const RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.17",
  networks: {
    bsc: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      chain: 31337
    }
  }
};
