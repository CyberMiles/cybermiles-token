var CyberMilesToken = artifacts.require("./CyberMilesToken.sol");

module.exports = function(deployer) {
  deployer.deploy(CyberMilesToken);
};