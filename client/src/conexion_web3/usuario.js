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
    

    // Obtener la instancia del contrato StorageCAD.
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Usuario.networks[networkId];
    const usuario_contrato = new web3.eth.Contract(
        Usuario.abi,
      deployedNetwork && deployedNetwork.address,
    );
    console.log(deployedNetwork.address);
    console.log(cuenta);
    console.log(usuario_contrato);
    const response = await usuario_contrato.methods.getContador.call();
    // const response = await usuario_contrato.methods.crear("John", "1105279044", "1105279044").call();
    console.log(response);
    // console.log(result);
    // const networkId = await web3.eth.net.getId();
    // const deployedNetwork = Usuario.networks[networkId];
    // const usuario_contrato = new web3.eth.Contract(
    //     Usuario.abi,
    //     deployedNetwork && deployedNetwork.address,
    // );
    // var result = usuario_contrato.methods.contador.call();

    return [];
};




