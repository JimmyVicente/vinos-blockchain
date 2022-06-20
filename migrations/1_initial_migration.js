const Migrations = artifacts.require("Migrations");
const proceso1 = artifacts.require("MateriaPrimaContract");
const proceso2 = artifacts.require("ExtraccionMostoContract");
const proceso3 = artifacts.require("PasteurizacionMostoContract");
const proceso4 = artifacts.require("FermentacionContract");
const proceso5 = artifacts.require("ClarificacionContract");
const proceso6 = artifacts.require("TrasiegoContract");
const proceso7 = artifacts.require("EnvasadoContract");
const usuario = artifacts.require("ProcesoContract");
const proceso = artifacts.require("UsuarioContract");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(proceso1);
  deployer.deploy(proceso2);
  deployer.deploy(proceso3);
  deployer.deploy(proceso4);
  deployer.deploy(proceso5);
  deployer.deploy(proceso6);
  deployer.deploy(proceso7);
  deployer.deploy(usuario);
  deployer.deploy(proceso);
};
