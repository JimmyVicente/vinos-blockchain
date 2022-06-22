import Usuario from '../contracts/UsuarioContract.json';
import { infoCuenta } from "./getWeb3";

// const cargarContatrato = async () => {
//     var web3 = await getWeb3();
//     const usuario = contract(Usuario);
//     usuario.setProvider(web3.eth.currentProvider);
//     const usuario_contrato = await usuario.deployed();
//     return usuario_contrato;
// };


export const cargarUsuarios = async () => {
    const { web3, cuenta } = await infoCuenta();
    var contract = new web3.eth.contract(Usuario.abi).at(cuenta);
    const contador = await contract.methods.contador.call().call();
    console.log(contador);
    // const networkId = await web3.eth.net.getId();
    // const deployedNetwork = Usuario.networks[networkId];
    // const usuario_contrato = new web3.eth.Contract(
    //     Usuario.abi,
    //     deployedNetwork && deployedNetwork.address,
    // );
    // var result = usuario_contrato.methods.contador.call();
    // console.log(cuenta);
    // console.log(result);

    return [];
};




