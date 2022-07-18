import { infoCuenta } from "./getWeb3";
import controlador_usuario from "../controlador/controlador_usuario";


export const encontrarMiUsuario = async () => {
    const { cuenta } = await infoCuenta();
    var usuario = await controlador_usuario.encontrar_usuario(cuenta);
    usuario.esMiCuenta = false;
    if (usuario.billetera == cuenta) usuario.esMiCuenta = true;
    return usuario;
};

