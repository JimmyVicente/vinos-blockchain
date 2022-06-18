// import Usuario from '../../build/contracts/UsuarioContrac.json';
import Web3 from 'web3';
// var contract = require('@truffle/contract');
// var contract = require('@truffle/contract');


export const load = async (data) => {
    var web3 = new Web3();
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            window.ethereum.enable().then(function () {
                // User has allowed account access to DApp...
            });
        } catch (e) {
            // User has denied account access to DApp...
        }
    } else if (window.web3) {
        web3 = new Web3(web3.currentProvider);
    } else {
        data.error("Se detectó un navegador que no es Ethereum. ¡Deberías instalar MetaMask!");
    }
    window.ethereum.enable();
    data.success(web3);
};






