import { generarProceso } from "./procesos";

export const listarItemProceso = async (hash) => {

    var proceso = await generarProceso(hash);
    var items = [];
    var nombre_proceso = "Nuevo proceso";
    var n_proceso = 1;
    var model;
    var informacion;
    //materia_prima
    if (proceso.materia_prima != undefined) {
        nombre_proceso = "Siguiente proceso: Extracción Del Mosto";
        n_proceso = 2;
        model = proceso.materia_prima;
        informacion = `
        Nro cosecha: ${model.nro_cosecha}<br>
        Lugar de procedencia: ${model.lugar_procedencia}<br>
        Nombre del propietario: ${model.nombre_propietario}<br>
        Grados brix: ${model.gadros_brix}<br>
      `;
        items.push({
            color: "#50C87C",
            icon: "mdi-car-estate",
            nombre: "Materia prima",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt),
            model: model,
        });
    }
    //extraccion_mosto
    if (proceso.extraccion_mosto != undefined) {
        nombre_proceso = "Siguiente proceso: Pasteurización";
        n_proceso = 3;
        model = proceso.extraccion_mosto;
        informacion = `Tipo: ${model.tipo}`;
        items.push({
            color: "#500617",
            icon: "mdi-glass-tulip",
            nombre: "Extración del mosto",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt),
            model: model,
        });
    }
    //pasteurizacion
    if (proceso.pasteurizacion != undefined) {
        nombre_proceso = "Siguiente proceso: Fermentación";
        n_proceso = 4;
        model = proceso.pasteurizacion;
        informacion = `
        Temperatura caliente: ${model.temperatura_caliente}<br>
        Temperatura fria: ${model.temperatura_fria}<br>
        Tiempo proceso: ${model.tiempo_proceso}<br>
      `;
        items.push({
            color: "#500617",
            icon: "mdi-book-variant",
            nombre: "Pasteurización del mosto",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt),
            model: model,
        });
    }
    //fermentacion
    if (proceso.fermentacion != undefined) {
        nombre_proceso = "Siguiente proceso: Clarificacion";
        n_proceso = 5;
        model = proceso.fermentacion;
        informacion = `
        Fecha inicio: ${model.fecha_inicio}<br>
        Fecha fin: ${model.fecha_final}<br>
        Grados invertidos: ${model.grados_invertidos}<br>
      `;
        items.push({
            color: "#500617",
            icon: "mdi-cup",
            nombre: "Fermentación",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt),
            model: model,
        });
    }
    //clarificacion
    if (proceso.clarificacion != undefined) {
        nombre_proceso = "Siguiente proceso: Trasiego";
        n_proceso = 6;
        model = proceso.clarificacion;
        informacion = `
        Turbidez: ${model.turbidez}<br>
      `;
        items.push({
            color: "#500617",
            icon: "mdi-cup-water",
            nombre: "Clarificación",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt),
            model: model,
        });
    }
    //trasiego
    if (proceso.trasiego != undefined) {
        nombre_proceso = "Siguiente proceso: Envasado";
        n_proceso = 7;
        model = proceso.trasiego;
        informacion = `
        Liquído claro: ${model.liquido_claro}<br>
        Liquído oscuro: ${model.liquido_oscuro}<br>
      `;
        items.push({
            color: "#500617",
            icon: "mdi-glass-tulip",
            nombre: "Trasiego",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt),
            model: model,
        });
    }
    //envasado
    if (proceso.envasado != undefined) {
        nombre_proceso = "Procesos completados";
        n_proceso = 8;
        model = proceso.envasado;
        informacion = `
        Liquído claro: ${model.liquido_claro}<br>
        Liquído oscuro: ${model.liquido_oscuro}<br>
      `;
        items.push({
            color: "#500617",
            icon: "mdi-barcode-scan",
            nombre: "Envasado",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt),
            model: model,
        });
    }

    //setVariables
    items = items.reverse();
    return { nombre_proceso, n_proceso, items };
};