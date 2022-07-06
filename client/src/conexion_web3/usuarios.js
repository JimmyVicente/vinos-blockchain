import UsuarioContract from '../contracts/UsuarioContract.json';
import { infoCuenta, cargarContatrato, escucharEvento } from "./getWeb3";

export const listarUsuarios = async (call) => {
    const { web3 } = await infoCuenta();
    const contrato = await cargarContatrato(web3, UsuarioContract);
    const contador = await contrato.contador();
    for (var i = 0; i < contador; i++) {
        var item = await encontrarUsuario(i);
        if (item != undefined) call(item);
    }
};

export const encontrarUsuario = async (id, address) => {
    try {
        const { web3, cuenta } = await infoCuenta();
        const contrato = await cargarContatrato(web3, UsuarioContract);
        var usuario = {};
        if (address != undefined) {
            usuario = await contrato.encontrarBilletera(address);
        } else {
            usuario = await contrato.encontrar(id);
        }
        var item = {};
        item.id = usuario.id;
        item.nombre = usuario.nombre;
        item.billetera = usuario.billetera;
        item.cuenta = cuenta;
        item.esMiCuenta = false;
        if (item.billetera == item.cuenta) item.esMiCuenta = true;
        item.rol = usuario.rol;
        item.createdAt = new Date(usuario.createdAt * 1000).toLocaleDateString();
        item.permisos = [];
        var permisos_array = [];
        usuario.permisos.forEach(e => {
            item.permisos.push(e * 1);
            if (e == 1) permisos_array.push(" Materia prima");
            if (e == 2) permisos_array.push(" Extracción del mosto");
            if (e == 3) permisos_array.push(" Pasteurización");
            if (e == 4) permisos_array.push(" Fermentación");
            if (e == 5) permisos_array.push(" Clarificación");
            if (e == 6) permisos_array.push(" Trasiego");
            if (e == 7) permisos_array.push(" Envasado");
        });
        item.permisos_array = permisos_array;
        if (usuario.rol == 0) item.rol_str = "Administración";
        if (usuario.rol == 1) item.rol_str = "Empleado";
        if (usuario.createdAt != "0") {
            return item;
        } else {
            return undefined;
        }
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

export const encontrarMiUsuario = async () => {
    const { cuenta } = await infoCuenta();
    return await encontrarUsuario(undefined, cuenta);
};

export const escucharEventos = async (call) => {
    escucharEvento(UsuarioContract, call);
};

export const crearUsuario = async (data) => {
    const { web3, cuenta } = await infoCuenta();
    const contrato = await cargarContatrato(web3, UsuarioContract);
    const config = { from: cuenta };
    await contrato.crear(data.billetera, data.nombre, data.permisos, data.rol, config);
};

export const editarUsuario = async (data) => {
    const { web3, cuenta } = await infoCuenta();
    const contrato = await cargarContatrato(web3, UsuarioContract);
    const config = { from: cuenta };
    await contrato.editar(data.id, data.billetera, data.nombre, data.permisos, data.rol, config);
};

export const eliminarUsuario = async (id) => {
    const { web3, cuenta } = await infoCuenta();
    const contrato = await cargarContatrato(web3, UsuarioContract);
    const config = { from: cuenta };
    await contrato.eliminar(id, config);
};