const ProcesoContract = artifacts.require("ProcesoContract");
const TVAToken = artifacts.require("TVAToken");

module.exports = function (deployer) {
  deployer.deploy(ProcesoContract);
  deployer.deploy(TVAToken);
};
