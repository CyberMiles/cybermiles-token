module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    testnet: {
      host: "localhost",
      port: 8545,
      network_id: 3, // Ropsten,
      from: "0x93B6D9d35D3a845c77d22FAB566f0A74c92B897d",
      gas: 4712388,
      gasPrice: 20000000000
    },
    live: {
      host: "localhost",
      port: 8545,
      network_id: 1,
      from: "0x02e21934252d43fdcea032ed2abb2c963033a950",
      gas: 4712388,
      gasPrice: 20000000000
    }
  }
};
