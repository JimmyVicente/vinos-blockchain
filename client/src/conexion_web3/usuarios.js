import { infoCuenta } from "./getWeb3";
import controlador_usuario from "../controlador/controlador_usuario";
var usuario_cache;


export const encontrarMiUsuario = async () => {
    const { cuenta } = await infoCuenta();
    if (usuario_cache != undefined && usuario_cache.billetera == cuenta) return usuario_cache;
    var usuario = await controlador_usuario.encontrar_usuario(cuenta) ?? {};
    usuario_cache = usuario;
    usuario.esMiCuenta = false;
    usuario.permisos = JSON.parse(usuario.permisos ?? "[]");
    usuario.isSeller = (usuario.permisos ?? []).includes(8);
    if (usuario.billetera == cuenta) usuario.esMiCuenta = true;
    return usuario;
};

