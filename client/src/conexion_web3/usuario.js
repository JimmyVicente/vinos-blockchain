import Usuario from '../../../build/contracts/UsuarioContract.json';
import { getWeb3, getCuentas } from "./getWeb3";
// import { contract } from '@truffle/contract';
var contract = require('@truffle/contract');

const cargarContatrato = async () => {
    var web3 = await getWeb3();
    const usuario = contract(Usuario);
    usuario.setProvider(web3.eth.currentProvider);
    const usuario_contrato = await usuario.deployed();
    return usuario_contrato;
};


export const cargarUsuarios = async () => {
    var addressAccount = await getCuentas();
    var usuario_contrato = cargarContatrato();
    const contador = await usuario_contrato.contador(addressAccount);
    console.log(contador);
    const usuarios = [];
    for (var i = 0; i < contador; i++) {
        const usuario = await usuario.lista(addressAccount, i);
        usuarios.push(usuario);
    }
    return usuarios;
};




