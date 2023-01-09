/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config()
require( "@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-etherscan")

const RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
  solidity: "0.8.17",
  networks: {
    bscTestnet: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 97
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
};
