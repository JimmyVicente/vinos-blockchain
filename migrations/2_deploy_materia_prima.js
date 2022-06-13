const MateriasPrimas = artifacts.require("MateriasPrimas");

module.exports = function (deployer) {
  deployer.deploy(MateriasPrimas);
};