require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind concert hunt narrow flip spread'; 
let testAccounts = [
"0xea84f7509a41f74c73e7e4b951292c1c26127f1cff3d575da1304145b7a9f6b7",
"0xf09c1a272f61c9b24b934b204bf7805be1db527f2dd139d3867d9240021c80c3",
"0xfa705931f19c1b66173c7c1ddd5a35f0583f7fbb24426faeb883a71276cc8e85",
"0x71789649e890c5a519486b9e62a6db2a80ef63c8b157cbf6cab5a4470f7b1738",
"0xa8949bb008a91f0b45675ad6e191d1a01334985b8f42586a3ccc97ebc8c45613",
"0x70d15d6aaf2ed011dd030fa1a4591c606b1c20a4ebd8ae0d4c151775b18d403b",
"0x40515e175125c708a6aadd8dbfaff6445d3ab41d4c2abd4b2744271f1e901182",
"0x6820d0b6163b6df276e33a65a85b58b21208680990b5dffabdd4f40f75006735",
"0x61c2b93ecd850a6e5905756c17bf83f6b3a4777d46bc49b1f89df264034a3896",
"0x9f5414a123516c6efb1dd69852d4947d3dc0a94f4d57d17e9c2c98879b519e00"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


