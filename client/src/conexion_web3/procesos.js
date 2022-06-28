import MateriaPrimaContract from '../contracts/MateriaPrimaContract.json';
import ExtraccionMostoContract from '../contracts/ExtraccionMostoContract.json';
import PasteurizacionMostoContract from '../contracts/PasteurizacionMostoContract.json';
import FermentacionContract from '../contracts/FermentacionContract.json';
import ClarificacionContract from '../contracts/ClarificacionContract.json';
import TrasiegoContract from '../contracts/TrasiegoContract.json';
import EnvasadoContract from '../contracts/EnvasadoContract.json';
import { infoCuenta, cargarContatrato, encontrarProceso, escucharEvento } from "./getWeb3";
var contrato1, contrato2, contrato3, contrato4, contrato5, contrato6, contrato7;
export const cargarContratos = async () => {
  const { web3 } = await infoCuenta();
  contrato1 = await cargarContatrato(web3, MateriaPrimaContract);
  contrato2 = await cargarContatrato(web3, ExtraccionMostoContract);
  contrato3 = await cargarContatrato(web3, PasteurizacionMostoContract);
  contrato4 = await cargarContatrato(web3, FermentacionContract);
  contrato5 = await cargarContatrato(web3, ClarificacionContract);
  contrato6 = await cargarContatrato(web3, TrasiegoContract);
  contrato7 = await cargarContatrato(web3, EnvasadoContract);
};


export const listarProcesos = async () => {
  const { web3, cuenta } = await infoCuenta();
  const contrato = await cargarContatrato(web3, MateriaPrimaContract);
  const contador = await contrato.contador(cuenta);
  const lista = [];
  for (var i = 0; i < contador; i++) {
    const item = await contrato.lista(cuenta, i);
    var materia_prima_obj = item;
    var _id = materia_prima_obj.id;
    var proceso = await generarProceso(_id);
    lista.push(proceso);
  }
  return lista;
};

export const generarProceso = async (_id) => {
  const { web3 } = await infoCuenta();
  var titulo1 = "---------", titulo2 = "---------", titulo3 = "---------", titulo4 = "---------", titulo5 = "---------", titulo6 = "---------", titulo7 = "---------";
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

export const escucharEventos = async (call) => {
  escucharEvento(MateriaPrimaContract, call);
  escucharEvento(ExtraccionMostoContract, call);
  escucharEvento(PasteurizacionMostoContract, call);
  escucharEvento(FermentacionContract, call);
  escucharEvento(ClarificacionContract, call);
  escucharEvento(TrasiegoContract, call);
  escucharEvento(EnvasadoContract, call);
};

export const crearProceso = async (proceso, data) => {
  const { cuenta } = await infoCuenta();
  // const contrato1 = await cargarContatrato(web3, MateriaPrimaContract);
  // const contrato2 = await cargarContatrato(web3, ExtraccionMostoContract);
  // const contrato3 = await cargarContatrato(web3, PasteurizacionMostoContract);
  // const contrato4 = await cargarContatrato(web3, FermentacionContract);
  // const contrato5 = await cargarContatrato(web3, ClarificacionContract);
  // const contrato6 = await cargarContatrato(web3, TrasiegoContract);
  // const contrato7 = await cargarContatrato(web3, EnvasadoContract);
  const config = { from: cuenta };
  if (proceso == 1) await contrato1.crear(data.nro_cosecha, data.lugar_procedencia, data.nombre_propietario, data.gadros_brix, config);
  if (proceso == 2) await contrato2.crear(data.hash_anterior, data.tipo, config);
  if (proceso == 3) await contrato3.crear(data.hash_anterior, data.temperatura_caliente, data.temperatura_fria, data.tiempo_proceso, config);
  if (proceso == 4) await contrato4.crear(data.hash_anterior, data.fecha_inicio, data.fecha_final, data.grados_invertidos, config);
  if (proceso == 5) await contrato5.crear(data.hash_anterior, data.turbidez, config);
  if (proceso == 6) await contrato6.crear(data.hash_anterior, data.liquido_claro, data.liquido_oscuro, config);
  if (proceso == 7) await contrato7.crear(data.hash_anterior, data.nro_lote, data.nro_botellas, config);
};

export const editarProceso = async (proceso, data) => {
  const { cuenta } = await infoCuenta();
  // const contrato1 = await cargarContatrato(web3, MateriaPrimaContract);
  // const contrato2 = await cargarContatrato(web3, ExtraccionMostoContract);
  // const contrato3 = await cargarContatrato(web3, PasteurizacionMostoContract);
  // const contrato4 = await cargarContatrato(web3, FermentacionContract);
  // const contrato5 = await cargarContatrato(web3, ClarificacionContract);
  // const contrato6 = await cargarContatrato(web3, TrasiegoContract);
  // const contrato7 = await cargarContatrato(web3, EnvasadoContract);
  const config = { from: cuenta };
  if (proceso == 1) await contrato1.editar(data.hash_anterior, data.nro_cosecha, data.lugar_procedencia, data.nombre_propietario, data.gadros_brix, config);
  if (proceso == 2) await contrato2.editar(data.hash_anterior, data.tipo, config);
  if (proceso == 3) await contrato3.editar(data.hash_anterior, data.temperatura_caliente, data.temperatura_fria, data.tiempo_proceso, config);
  if (proceso == 4) await contrato4.editar(data.hash_anterior, data.fecha_inicio, data.fecha_final, data.grados_invertidos, config);
  if (proceso == 5) await contrato5.editar(data.hash_anterior, data.turbidez, config);
  if (proceso == 6) await contrato6.editar(data.hash_anterior, data.liquido_claro, data.liquido_oscuro, config);
  if (proceso == 7) await contrato7.editar(data.hash_anterior, data.nro_lote, data.nro_botellas, config);
};

export const aprobarProceso = async (proceso, data) => {
  const { cuenta } = await infoCuenta();
  // const contrato1 = await cargarContatrato(web3, MateriaPrimaContract);
  // const contrato2 = await cargarContatrato(web3, ExtraccionMostoContract);
  // const contrato3 = await cargarContatrato(web3, PasteurizacionMostoContract);
  // const contrato4 = await cargarContatrato(web3, FermentacionContract);
  // const contrato5 = await cargarContatrato(web3, ClarificacionContract);
  // const contrato6 = await cargarContatrato(web3, TrasiegoContract);
  // const contrato7 = await cargarContatrato(web3, EnvasadoContract);
  const config = { from: cuenta };
  if (proceso == 1) await contrato1.aprobarProceso(data.id, config);
  if (proceso == 2) await contrato2.aprobarProceso(data.id, config);
  if (proceso == 3) await contrato3.aprobarProceso(data.id, config);
  if (proceso == 4) await contrato4.aprobarProceso(data.id, config);
  if (proceso == 5) await contrato5.aprobarProceso(data.id, config);
  if (proceso == 6) await contrato6.aprobarProceso(data.id, config);
  if (proceso == 7) await contrato7.aprobarProceso(data.id, data.info, config);
};

export const encontrarBotella = async (hash) => {
  // const { web3 } = await infoCuenta();
  // const contrato7 = await cargarContatrato(web3, EnvasadoContract);
  var botella = await contrato7.encontrarBotella(hash);
  return botella;
}