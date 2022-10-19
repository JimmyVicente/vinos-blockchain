const ProcesoContract = artifacts.require("ProcesoContract");

module.exports = function (deployer) {
  deployer.deploy(ProcesoContract);
};
