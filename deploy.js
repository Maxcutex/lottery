const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'kidney peace episode delay spare identify waste fan behind celery wrestle buyer',
  'https://rinkeby.infura.io/v3/629d9f80191b4d7e81b025442af82cef'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('interface is : ', interface);
  console.log('Contract deployed to ', result.options.address);
};

deploy();
