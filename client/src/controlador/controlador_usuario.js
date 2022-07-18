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
    async encontrar_usuario(id_usuario, call) {
        try {
            var response = await axios.post(path.encontrar_usuario, { id_usuario });
            if (call != undefined) call(response.data);
            return response.data.data;
        } catch (error) {
            var data = {
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            };
            if (call != undefined) call(data);
            return data;
        }
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