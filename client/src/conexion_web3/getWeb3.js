import Web3 from 'web3';

const getWeb3 = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    return web3;
  } else if (window.web3) {
    const web3 = new Web3(window.web3.currentProvider);
    return web3;
  } else {
    throw { mensaje: "Se detectó un navegador que no admitido. ¡Deberías considerar probar MetaMask!" };
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
    var mensaje = error.mensaje ?? "Ocurrió un problema al conectarse con la blockchain";
    if (error.code == 4001) mensaje = "Rechazaste la solicitud para conectarte con metamask";
    if (error.code == -32002) mensaje = "Revisa la extensión de metamask y confirma la solicitud";
    throw { mensaje };
  }
};




