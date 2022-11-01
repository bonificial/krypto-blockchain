 // https://eth-goerli.g.alchemy.com/v2/5AI-j_xhNZVSwL2kPUg4HSlYn2vwAerK

 
 require('@nomiclabs/hardhat-waffle');

 module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/5AI-j_xhNZVSwL2kPUg4HSlYn2vwAerK",
      accounts:['8858eacc8a0cdcd3ad0bc5c87c039193a2c203a02ce231b355638c0d12db136a']
    }
  }
 }