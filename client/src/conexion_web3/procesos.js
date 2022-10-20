import ProcesoContract from '../contracts/ProcesoContract.json';
import TVATOKEN from '../contracts/TVAToken.json';
import { infoCuenta, cargarContatrato } from "./getWeb3";
var sha256 = require('sha256');

export const generarSha256Firma = async (proceso) => {
  var { materia_prima, extraccion, pasteurizacion, fermentacion, clarificacion, trasiego, envasado } = proceso;
  var data = { materia_prima, extraccion, pasteurizacion, fermentacion, clarificacion, trasiego, envasado };
  return sha256(JSON.stringify(data));
}


export const firmarProceso = async (proceso) => {
  var { web3, cuenta } = await infoCuenta();
  const config = { from: cuenta };
  var contratoProceso = await cargarContatrato(web3, ProcesoContract);
  var hash = await generarSha256Firma(proceso);
  var result = await contratoProceso.crear(hash, config);
  var txn_hash = result?.tx ?? "";
  return { hash, txn_hash };
}

export const encontrarFirmaProceso = async (proceso) => {
  var { web3 } = await infoCuenta();
  var contratoProceso = await cargarContatrato(web3, ProcesoContract);
  var hashSend = await generarSha256Firma(proceso);
  var hash = await contratoProceso.encontrar(hashSend);
  console.log(hash);
  return hash;
}

export const crearBotella = async (hash) => {
  var { web3, cuenta } = await infoCuenta();
  const config = { from: cuenta };
  var contratoTVATOKEN = await cargarContatrato(web3, TVATOKEN);
  await contratoTVATOKEN.crearBotella(cuenta, hash, config);
  return { billetera: cuenta };
}

export const encontrarBotella = async (hash) => {
  var { web3 } = await infoCuenta();
  var contratoTVATOKEN = await cargarContatrato(web3, TVATOKEN);
  var encontrar = await contratoTVATOKEN.encontrarBotella(hash);
  return encontrar;
}

