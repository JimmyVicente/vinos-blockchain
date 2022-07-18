import TVAToken from '../contracts/TVAToken.json';
import { infoCuenta, cargarContatrato } from "./getWeb3";



export const encontrarBotellaVendida = async (hash) => {
  var { web3 } = await infoCuenta();
  var contratoTVAToken = await cargarContatrato(web3, TVAToken);
  return await contratoTVAToken.encontrarBotellaVendida(hash);
}

export const enviarToken = async (hash) => {
  var { web3, cuenta } = await infoCuenta();
  var config = { from: cuenta };
  var contratoTVAToken = await cargarContatrato(web3, TVAToken);
  await contratoTVAToken.enviarToken(hash, config);
}