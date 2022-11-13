const TVAToken = artifacts.require("TVAToken");

module.exports = function (deployer) {
  deployer.deploy(TVAToken);
};
