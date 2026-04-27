require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const privateKey = process.env.PRIVATE_KEY;
const infuraUrl  = process.env.INFURA_URL;

module.exports = {
  contracts_build_directory: "./client/src/contracts",

  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },

    sepolia: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [privateKey],
          providerOrUrl: infuraUrl,
          pollingInterval: 15000,
        }),
      network_id: 11155111,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 4500000,
      gasPrice: 10000000000, // 10 gwei
    },
  },

  mocha: {
    timeout: 200000,
  },

  compilers: {
    solc: {
      version: "0.8.11",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
