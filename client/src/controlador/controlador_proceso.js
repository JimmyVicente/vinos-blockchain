import path from "./api";
import axios from "axios";

export default {
    lista_proceso(call) {
        axios.post(path.listar_proceso).then((response) => {
            call(response.data);
        }).catch((error) => {
            call({
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            })
        });
    },
    encontrar_proceso(id_proceso, call) {
        axios.post(path.encontrar_proceso, { id_proceso }).then((response) => {
            call(response.data);
        }).catch((error) => {
            call({
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            })
        });
    },
    crear_editar_proceso(data, call) {
        axios.post(path.crear_editar_proceso, data).then((response) => {
            call(response.data);
        }).catch((error) => {
            call({
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            })
        });
    },
    aprobar_proceso(data, call) {
        axios.post(path.aprobar_proceso, data).then((response) => {
            call(response.data);
        }).catch((error) => {
            call({
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            })
        });
    },
    firmar_proceso(id_proceso, hash, call) {
        axios.post(path.firmar_proceso, { id_proceso, hash }).then((response) => {
            call(response.data);
        }).catch((error) => {
            call({
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            })
        });
    },
    listar_botella(id_proceso, call) {
        axios.post(path.listar_botella, { id_proceso }).then((response) => {
            call(response.data);
        }).catch((error) => {
            call({
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            })
        });
    },
    cambiar_estado_botella(data, call) {
        axios.post(path.cambiar_estado_botella, data).then((response) => {
            call(response.data);
        }).catch((error) => {
            call({
                tipo: "error",
                mensaje: "Error desconocido",
                mensaje_alterno: error,
            })
        });
    },
    econtrar_proceso_botella(hash_botella, call) {
        axios.post(path.econtrar_proceso_botella, { hash_botella }).then((response) => {
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