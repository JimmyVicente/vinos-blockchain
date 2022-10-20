const TVATOKEN = artifacts.require("TVATOKEN");

module.exports = function (deployer) {
  deployer.deploy(TVATOKEN);
};
