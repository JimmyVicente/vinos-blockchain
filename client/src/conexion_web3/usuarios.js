import { infoCuenta } from "./getWeb3";
import controlador_usuario from "../controlador/controlador_usuario";
var usuario_cache;


export const encontrarMiUsuario = async () => {
    const { cuenta } = await infoCuenta();
    console.log("encontrarMiUsuario - cuenta Web3:", cuenta);
    
    // Validar en caché primero (para no hacer múltiples peticiones al backend)
    if (usuario_cache != undefined && usuario_cache.billetera && cuenta && usuario_cache.billetera.toLowerCase() === cuenta.toLowerCase()) {
        return usuario_cache;
    }
    
    var usuario = await controlador_usuario.encontrar_usuario(cuenta) ?? {};
    console.log("encontrarMiUsuario - usuario DB:", usuario);
    
    usuario_cache = usuario;
    usuario.esMiCuenta = false;
    usuario.permisos = JSON.parse(usuario.permisos ?? "[]");
    usuario.isSeller = (usuario.permisos ?? []).includes(8);
    
    if (usuario.billetera && cuenta && usuario.billetera.toLowerCase() === cuenta.toLowerCase()) {
        usuario.esMiCuenta = true;
    }
    
    console.log("encontrarMiUsuario - esMiCuenta:", usuario.esMiCuenta, "rol:", usuario.rol);
    return usuario;
};

