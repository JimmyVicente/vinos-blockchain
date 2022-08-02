import Web3 from 'web3';
var TruffleContract = require('@truffle/contract');

const getWeb3 = async () => {
  console.log(window.ethereum);
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    return web3;
  } else if (window.web3) {
    const web3 = new Web3(window.web3.currentProvider);
    return web3;
  } else {
    throw { mensaje_metamask: "Se detectó un navegador que no admitido. ¡Deberías considerar probar MetaMask!" };
  }
}


export const infoCuenta = async () => {
  try {
    // Obtener el proveedor de red y la instancia web3.
    const web3 = await getWeb3();
    // Usar web3 para obtener las cuentas de los usuarios.
    const cuentas = await web3.eth.getAccounts();
    const cuenta = cuentas[0];
    web3.eth.defaultAccount = cuentas[0];
    //balance
    const balanceG = await web3.eth.getBalance(cuentas[0]);
    const balanceETHER = web3.utils.fromWei(balanceG, 'ether');
    return { web3, cuenta, balanceETHER };
  } catch (error) {
    console.log(error);
    var mensaje_metamask = error.mensaje_metamask ?? "Ocurrió un problema al conectarse con la wallet";
    if (error.code == 4001) mensaje_metamask = "Rechazaste la solicitud para conectarte con metamask";
    if (error.code == -32002) mensaje_metamask = "Revisa la extensión de metamask y confirma la solicitud";
    throw { mensaje_metamask };
  }
};

export const cargarContatrato = async (web3, contrato_json) => {
  const contrato_instancia = TruffleContract(contrato_json);
  contrato_instancia.setProvider(web3.eth.currentProvider);
  const contrato = await contrato_instancia.deployed();
  return contrato;
};


export const encontrarProceso = async (web3, contrato_json, _id) => {
  const contrato = await cargarContatrato(web3, contrato_json);
  var model = await contrato.encontrar(_id);
  if (model.createdAt != "0") {
    return model;
  } else {
    return undefined;
  }
};

export const escucharEvento = async (contrato_json, call) => {
  const { web3 } = await infoCuenta();
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = contrato_json.networks[networkId];
  const contrato = new web3.eth.Contract(
    contrato_json.abi,
    deployedNetwork && deployedNetwork.address,
  );
  contrato.events.Id(function (error, result) {
    if (!error) {
      call(result.returnValues.id);
    }
  });
};


