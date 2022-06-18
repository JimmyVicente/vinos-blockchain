const Migrations = artifacts.require("Migrations");
const proceso1 = artifacts.require("MateriaPrimaContrac");
const proceso2 = artifacts.require("ExtraccionMostoContrac");
const proceso3 = artifacts.require("PasteurizacionMostoContrac");
const proceso4 = artifacts.require("FermentacionContrac");
const proceso5 = artifacts.require("ClarificacionContrac");
const proceso6 = artifacts.require("TrasiegoContrac");
const proceso7 = artifacts.require("EnvasadoContrac");
const usuario = artifacts.require("ProcesoContrac");
const proceso = artifacts.require("UsuarioContrac");

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
