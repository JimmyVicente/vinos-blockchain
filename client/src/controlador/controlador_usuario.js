import path from "./api";
import axios from "axios";

export default {
    listar_usuario(call) {
        axios.post(path.listar_usuario).then((response) => {
            call(response.data);
        }).catch((error) => {
            call({
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            })
        });
    },
    encontrar_usuario(id_usuario, call) {
        axios.post(path.encontrar_usuario, { id_usuario }).then((response) => {
            call(response.data);
        }).catch((error) => {
            call({
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            })
        });
    },
    eliminar_usuario(id_usuario, call) {
        axios.post(path.eliminar_usuario, { id_usuario }).then((response) => {
            call(response.data);
        }).catch((error) => {
            call({
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            })
        });
    },
    crear_editar_usuario(data, call) {
        axios.post(path.crear_editar_usuario, data).then((response) => {
            call(response.data);
        }).catch((error) => {
            call({
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            })
        });
    },
}