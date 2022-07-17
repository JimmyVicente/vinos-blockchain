import path from "./api";
import axios from "axios";

export default {

    iniciar_sesion(correo, password, call) {
        const usuario = {
            correo: correo,
            password: password
        };
        axios.post(path.inicio_sesion, usuario)

            .then((response) => {
                call({
                    next: true,
                    mensaje: '',
                    data: response.data,
                })
            })
            .catch((error) => {
                var mensaje = error?.response?.data?.mensaje ?? "Error de conexión";
                call({
                    next: false,
                    mensaje: mensaje,
                })
            });
    },

    buscar_usuario(id, call) {
        var url = path.usuario_id + `/${id}`;
        axios.get(url)
            .then((response) => {
                call({
                    next: true,
                    mensaje: '',
                    data: response.data,
                })
            })
            .catch((error) => {
                var mensaje = error?.response?.data?.mensaje ?? "Error de conexión";
                call({
                    next: false,
                    mensaje: mensaje,
                })
            });
    },

    editar_usuario(data, call) {
        var url = path.editar_usuario + `/${data.id}`;
        axios.put(url, data)
            .then((response) => {
                call({
                    next: true,
                    mensaje: '',
                    data: response.data,
                })
            })
            .catch((error) => {
                var mensaje = error?.response?.data?.mensaje ?? "Error de conexión";
                call({
                    next: false,
                    mensaje: mensaje,
                })
            });
    }
}