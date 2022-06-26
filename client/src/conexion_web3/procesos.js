import MateriaPrimaContract from '../contracts/MateriaPrimaContract.json';
import ExtraccionMostoContract from '../contracts/ExtraccionMostoContract.json';
import PasteurizacionMostoContract from '../contracts/PasteurizacionMostoContract.json';
import FermentacionContract from '../contracts/FermentacionContract.json';
import ClarificacionContract from '../contracts/ClarificacionContract.json';
import TrasiegoContract from '../contracts/TrasiegoContract.json';
import EnvasadoContract from '../contracts/EnvasadoContract.json';
import { infoCuenta, cargarContatrato, encontrarProceso } from "./getWeb3";


export const listarProcesos = async () => {
  const { web3, cuenta } = await infoCuenta();
  const contrato = await cargarContatrato(web3, MateriaPrimaContract);
  const contador = await contrato.contador(cuenta);
  const lista = [];
  for (var i = 0; i < contador; i++) {
    const item = await contrato.lista(cuenta, i);
    var materia_prima_obj = item;
    var _id = materia_prima_obj.id;
    console.log(_id);
    var proceso = await generarProceso(_id);
    lista.push(proceso);
  }
  return lista;
};

export const generarProceso = async (_id) => {
  const { web3 } = await infoCuenta();
  var titulo1, titulo2, titulo3, titulo4, titulo5, titulo6, titulo7 = "";
  var materia_prima = await encontrarProceso(web3, MateriaPrimaContract, _id);
  var extraccion_mosto = await encontrarProceso(web3, ExtraccionMostoContract, _id);
  var pasteurizacion = await encontrarProceso(web3, PasteurizacionMostoContract, _id);
  var fermentacion = await encontrarProceso(web3, FermentacionContract, _id);
  var clarificacion = await encontrarProceso(web3, ClarificacionContract, _id);
  var trasiego = await encontrarProceso(web3, TrasiegoContract, _id);
  var envasado = await encontrarProceso(web3, EnvasadoContract, _id);
  //titulos
  if (materia_prima != undefined) titulo1 = "Nro cosecha " + materia_prima.nro_cosecha;
  if (extraccion_mosto != undefined) titulo2 = "tipo " + extraccion_mosto.tipo;
  if (pasteurizacion != undefined) titulo3 = pasteurizacion.temperatura_caliente + " ~C";
  if (fermentacion != undefined) titulo4 = "Grados invertidos " + fermentacion.grados_invertidos;
  if (clarificacion != undefined) titulo5 = "Turbidez " + clarificacion.turbidez;
  if (trasiego != undefined) titulo6 = "Porcentaje " + trasiego.liquido_claro;
  if (envasado != undefined) titulo7 = "Nro botellas " + envasado.nro_botellas;
  return {
    materia_prima, titulo1,
    extraccion_mosto, titulo2,
    pasteurizacion, titulo3,
    fermentacion, titulo4,
    clarificacion, titulo5,
    trasiego, titulo6,
    envasado, titulo7,
  };
};



export const crearMateriaPrima = async (data) => {
  const { web3, cuenta } = await infoCuenta();
  const contrato = await cargarContatrato(web3, MateriaPrimaContract);
  const config = { from: cuenta }
  const result = await contrato.crear(data.nro_cosecha, data.lugar_procedencia, data.nombre_propietario, data.gadros_brix, config);
  console.log(result);
};

export const crearExtraccionMosto = async (data) => {
  const { web3, cuenta } = await infoCuenta();
  const contrato = await cargarContatrato(web3, ExtraccionMostoContract);
  const config = { from: cuenta }
  await contrato.crear(data.hash_anterior, data.tipo, config);
};

export const crearPasteurizacion = async (data) => {
  const { web3, cuenta } = await infoCuenta();
  const contrato = await cargarContatrato(web3, PasteurizacionMostoContract);
  const config = { from: cuenta }
  await contrato.crear(data.hash_anterior, data.temperatura_caliente, data.temperatura_fria, data.tiempo_proceso, config);
};

export const crearFermentacion = async (data) => {
  const { web3, cuenta } = await infoCuenta();
  const contrato = await cargarContatrato(web3, FermentacionContract);
  const config = { from: cuenta }
  await contrato.crear(data.hash_anterior, data.fecha_inicio, data.fecha_final, data.grados_invertidos, config);
};

export const crearClarificacion = async (data) => {
  const { web3, cuenta } = await infoCuenta();
  const contrato = await cargarContatrato(web3, ClarificacionContract);
  const config = { from: cuenta }
  await contrato.crear(data.hash_anterior, data.turbidez, config);
};

export const crearTrasiego = async (data) => {
  const { web3, cuenta } = await infoCuenta();
  const contrato = await cargarContatrato(web3, TrasiegoContract);
  const config = { from: cuenta }
  await contrato.crear(data.hash_anterior, data.liquido_claro, data.liquido_oscuro, config);
};

export const crearEnvasado = async (data) => {
  const { web3, cuenta } = await infoCuenta();
  const contrato = await cargarContatrato(web3, EnvasadoContract);
  const config = { from: cuenta }
  await contrato.crear(data.hash_anterior, data.nro_lote, data.nro_botellas, config);
};