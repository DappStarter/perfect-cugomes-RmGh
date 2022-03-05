require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth miss provide hunt hen fresh gesture'; 
let testAccounts = [
"0x6432864635e1053376ebdba22c411f7ba21c4da5580d7cfb67a42c21a8e803d0",
"0x8c64fc7dcd7ca3405a4a76dd182bd77c920f46ef833c23b9b2aba277457e4391",
"0xb41bd4e33cb84b29b09b2192942bda0ee0e535264a318c1f0cc07e1d96b12d6d",
"0xda562f0abf5a2ba35fff463d19469d58de07d5ff35a55eba49a2a749c7c14947",
"0xf74b7f093cebe68cd748c9cbd933d9ce94956e6a251096b8691cade954f31d90",
"0x3a1ea82a8ccbcf9c63c7ffb95fb0e55673bd8b3cbc65bd5b8b06151fa45dec29",
"0x8e198a79ab0a4993f73230dabdae3a7cc72746ee319628eeffaa6ba93f953f48",
"0x1c296d53487915903991fd8dd019957c9af3ceb75cd5cc34a6093bfab7a64be3",
"0x47576d5429131e903e4f3785ee5503a5c8f921c93d74599211545e43524f833d",
"0x23b1eb51d5ac610025c65ff83567c603699848a36cd9143d3b6a8ecb8b346f54"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

