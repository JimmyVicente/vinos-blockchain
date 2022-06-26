import MateriaPrimaJson from '../contracts/MateriaPrimaContract.json';
import { infoCuenta, cargarContatrato } from "./getWeb3";




export const cargarMateria = async () => {
  const { web3, cuenta } = await infoCuenta();
  const contrato = await cargarContatrato(web3, MateriaPrimaJson);
  const contador = await contrato.contador(cuenta);
  const lista = [];
  for (var i = 0; i < contador; i++) {
    const item = await contrato.lista(cuenta, i);
    var materia_prima_obj = {};
    materia_prima_obj.id = item[0].toNumber();
    materia_prima_obj.nro_cosecha = item[1].toNumber();
    materia_prima_obj.lugar_procedencia = item[2];
    materia_prima_obj.nombre_propietario = item[3];
    materia_prima_obj.gadros_brix = item[4];
    materia_prima_obj.aprobado = item[5];
    materia_prima_obj.createdAt = new Date(item[6].toNumber())
    var materia_prima = "Nro cosecha: " + materia_prima_obj.nro_cosecha;
    //extracion del mosto
    var extarccion_mosto = "---------";
    var pasteurizacion = "---------";
    var fermentacion = "---------";
    var clarificacion = "---------";
    var trasiego = "---------";
    var envasado = "---------";

    lista.push({ 
      materia_prima_obj, materia_prima, 
      extarccion_mosto, 
      pasteurizacion, 
      fermentacion, 
      clarificacion, 
      trasiego, 
      envasado, 
    });
  }
  console.log(lista);
  return lista;
};

export const crearMateriaPrima = async (data) => {
  const { web3, cuenta } = await infoCuenta();
  const contrato = await cargarContatrato(web3, MateriaPrimaJson);
  const config = { from: cuenta }
  const result = await contrato.crear(data.nro_cosecha, data.lugar_procedencia, data.nombre_propietario, data.gadros_brix, config);
  console.log(result);
};

