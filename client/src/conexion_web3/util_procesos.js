import { generarProceso } from "./procesos";

export const listarItemProceso = async (hash) => {
    hash = hash * 1;
    var proceso = await generarProceso(hash);
    var items = [];
    var nombre_proceso = "Nuevo proceso";
    var n_proceso = 1;
    var model;
    var informacion;
    var hash_info = "";
    var siguiente_proceso = true;
    var esta_completado = false;
    //materia_prima
    if (proceso.materia_prima != undefined) {
        nombre_proceso = "Siguiente proceso: Extracción Del Mosto";
        n_proceso = 2;
        model = proceso.materia_prima;
        siguiente_proceso = model.aprobado;
        informacion = `
        Nro cosecha: ${model.nro_cosecha}<br>
        Lugar de procedencia: ${model.lugar_procedencia}<br>
        Nombre del propietario: ${model.nombre_propietario}<br>
        Grados brix: ${model.gadros_brix}<br>
        `;
        hash_info += model.nro_cosecha + model.lugar_procedencia + model.nombre_propietario + model.gadros_brix;
        items.push({
            color: "#50C87C",
            icon: "mdi-car-estate",
            nombre: "Materia prima",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt * 1000).toLocaleString(),
            model: model,
            index: 1,
        });
    }
    //extraccion_mosto
    if (proceso.extraccion_mosto != undefined) {
        nombre_proceso = "Siguiente proceso: Pasteurización";
        n_proceso = 3;
        model = proceso.extraccion_mosto;
        siguiente_proceso = model.aprobado;
        informacion = `Tipo: ${model.tipo}`;
        hash_info += model.tipo;
        items.push({
            color: "#500617",
            icon: "mdi-glass-tulip",
            nombre: "Extración del mosto",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt * 1000).toLocaleString(),
            model: model,
            index: 2,
        });
    }
    //pasteurizacion
    if (proceso.pasteurizacion != undefined) {
        nombre_proceso = "Siguiente proceso: Fermentación";
        n_proceso = 4;
        model = proceso.pasteurizacion;
        siguiente_proceso = model.aprobado;
        informacion = `
        Temperatura caliente: ${model.temperatura_caliente}<br>
        Temperatura fria: ${model.temperatura_fria}<br>
        Tiempo proceso: ${model.tiempo_proceso}<br>
        `;
        hash_info += model.temperatura_caliente + model.temperatura_fria + model.tiempo_proceso;
        items.push({
            color: "#500617",
            icon: "mdi-book-variant",
            nombre: "Pasteurización del mosto",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt * 1000).toLocaleString(),
            model: model,
            index: 3,
        });
    }
    //fermentacion
    if (proceso.fermentacion != undefined) {
        nombre_proceso = "Siguiente proceso: Clarificacion";
        n_proceso = 5;
        model = proceso.fermentacion;
        siguiente_proceso = model.aprobado;
        informacion = `
        Fecha inicio: ${new Date(model.fecha_inicio * 1000).toLocaleString()}<br>
        Fecha fin: ${new Date(model.fecha_final * 1000).toLocaleString()}<br>
        Grados invertidos: ${model.grados_invertidos}<br>
      `;
        hash_info += model.fecha_inicio + model.fecha_final + model.grados_invertidos;
        items.push({
            color: "#500617",
            icon: "mdi-cup",
            nombre: "Fermentación",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt * 1000).toLocaleString(),
            model: model,
            index: 4,
        });
    }
    //clarificacion
    if (proceso.clarificacion != undefined) {
        nombre_proceso = "Siguiente proceso: Trasiego";
        n_proceso = 6;
        model = proceso.clarificacion;
        siguiente_proceso = model.aprobado;
        informacion = `
        Turbidez: ${model.turbidez}<br>
      `;
        hash_info += model.turbidez;
        items.push({
            color: "#500617",
            icon: "mdi-cup-water",
            nombre: "Clarificación",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt * 1000).toLocaleString(),
            model: model,
            index: 5,
        });
    }
    //trasiego
    if (proceso.trasiego != undefined) {
        nombre_proceso = "Siguiente proceso: Envasado";
        n_proceso = 7;
        model = proceso.trasiego;
        siguiente_proceso = model.aprobado;
        informacion = `
        Liquído claro: ${model.liquido_claro}<br>
        Liquído oscuro: ${model.liquido_oscuro}<br>
      `;
        hash_info += model.liquido_claro + model.liquido_claro;
        items.push({
            color: "#500617",
            icon: "mdi-glass-tulip",
            nombre: "Trasiego",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt * 1000).toLocaleString(),
            model: model,
            index: 6,
        });
    }
    //envasado
    if (proceso.envasado != undefined) {
        nombre_proceso = "Procesos completados";
        n_proceso = 8;
        model = proceso.envasado;
        siguiente_proceso = model.aprobado;
        esta_completado = model.aprobado;
        informacion = `
        Nro. Lote: ${model.nro_lote}<br>
        Total de botellas: ${model.nro_botellas}<br>
      `;
        hash_info += model.nro_lote + model.nro_botellas;
        items.push({
            color: "#500617",
            icon: "mdi-barcode-scan",
            nombre: "Envasado",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt * 1000).toLocaleString(),
            model: model,
            index: 7,
        });
    }

    //setVariables
    items = items.reverse();
    return { nombre_proceso, n_proceso, items, hash_info, siguiente_proceso, proceso, esta_completado };
};