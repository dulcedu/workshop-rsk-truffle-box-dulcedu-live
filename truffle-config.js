const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');

const gasPriceTestnetRaw = fs.readFileSync(".gas-price-testnet.json").toString().trim();
const gasPriceTestnet = parseInt(JSON.parse(gasPriceTestnetRaw).result, 16);
if (typeof gasPriceTestnet !== 'number' || isNaN(gasPriceTestnet)) {
  throw new Error('unable to retrieve network gas price from .gas-price-testnet.json');
}
const gasPriceRegtestRaw = fs.readFileSync(".gas-price-regtest.json").toString().trim();
const gasPriceRegtest = parseInt(JSON.parse(gasPriceRegtestRaw).result, 16);
console.log(gasPriceRegtest);
if (typeof gasPriceRegtest !== 'number' || isNaN(gasPriceRegtest)) {
  throw new Error('unable to retrieve network gas price from .gas-price-regtest.json');
}
const mnemonic = fs.readFileSync(".secret").toString().trim();
if (!mnemonic || mnemonic.split(' ').length !== 12) {
  throw new Error('unable to retrieve mnemonic from .mnemonic');
}
console.log({
  mnemonic,
  gasPriceTestnet,
  gasPriceRegtest,
});
// NOTE only do the above in demo code.
// This is not, by far, secure enough for a real use scenario.

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  compilers: {
    solc: {
      version: '0.5.2',
      // ...
    },
  },

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  }
};
