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
      network_id: 3 // Ropsten
    },
    live: {
      host: "localhost",
      port: 8545,
      network_id: 1,
      from: "0x02e21934252d43fdcea032ed2abb2c963033a950"
    }
  }
};
