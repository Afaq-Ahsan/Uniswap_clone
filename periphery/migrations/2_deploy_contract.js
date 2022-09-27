const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
  let weth;
  const FACTORY_ADDRESS = "0xdbBD64bd67a244534509d8BC9977dA0c6c4EC6D9"; // address where factory contract is deployed

  if (network == "mainnet") {
    weth = WETH.at("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"); //goto etherscan and and search for WETH and copy that address and paste it here
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }
  //router takes 2 arguments 1st one is factory address and second one is WETH address
  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
