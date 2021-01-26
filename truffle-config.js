const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    /* SET BY DEFAULT: Truffle local development
    develop: {
      port: 8545
    } 
    */
    // Ganache local developemnt 
    development: {
      port: 7545,
      network_id: "*",
      host: "127.0.0.1"
    }
  },
  compilers: {
    solc: {
      version: ">=0.6.0 <0.8.0"
    }
  }
};
