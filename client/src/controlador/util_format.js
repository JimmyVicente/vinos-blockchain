
export const formato_proceso = async (proceso) => {
    var items = [];
    var nombre_proceso = "Nuevo proceso";
    var n_proceso = 1;
    var model;
    var informacion;
    var siguiente_proceso = true;
    var esta_completado = false;
    //materia_prima
    if (proceso.materia_prima != undefined) {
        nombre_proceso = "Siguiente proceso: Extracción Del Mosto";
        n_proceso = 2;
        model = proceso.materia_prima;
        model.id_proceso = proceso._id;
        siguiente_proceso = model.aprobado;
        informacion = `
        Nro cosecha: ${model.nro_cosecha}<br>
        Lugar de procedencia: ${model.lugar_procedencia}<br>
        Nombre del propietario: ${model.nombre_propietario}<br>
        Grados brix: ${model.gadros_brix} gramos<br>
        `;
        items.push({
            color: "#50C87C",
            icon: "mdi-car-estate",
            nombre: "Materia prima",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt).toLocaleString(),
            model: model,
            index: 1,
        });
    }
    //extraccion_mosto
    if (proceso.extraccion != undefined) {
        nombre_proceso = "Siguiente proceso: Pasteurización";
        n_proceso = 3;
        model = proceso.extraccion;
        model.id_proceso = proceso._id;
        siguiente_proceso = model.aprobado;
        informacion = `Tipo: ${model.tipo}`;
        items.push({
            color: "#500617",
            icon: "mdi-glass-tulip",
            nombre: "Extración del mosto",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt).toLocaleString(),
            model: model,
            index: 2,
        });
    }
    //pasteurizacion
    if (proceso.pasteurizacion != undefined) {
        nombre_proceso = "Siguiente proceso: Fermentación";
        n_proceso = 4;
        model = proceso.pasteurizacion;
        model.id_proceso = proceso._id;
        siguiente_proceso = model.aprobado;
        informacion = `
        Temperatura caliente: ${model.temperatura_caliente} °C<br>
        Temperatura fria: ${model.temperatura_fria} °C<br>
        Tiempo proceso: ${model.tiempo_proceso} min<br>
        `;
        items.push({
            color: "#500617",
            icon: "mdi-book-variant",
            nombre: "Pasteurización del mosto",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt).toLocaleString(),
            model: model,
            index: 3,
        });
    }
    //fermentacion
    if (proceso.fermentacion != undefined) {
        nombre_proceso = "Siguiente proceso: Clarificación";
        n_proceso = 5;
        model = proceso.fermentacion;
        model.id_proceso = proceso._id;
        siguiente_proceso = model.aprobado;
        informacion = `
        Fecha inicio: ${new Date(model.fecha_inicio).toLocaleString()}<br>
        Fecha fin: ${new Date(model.fecha_final).toLocaleString()}<br>
        Grados invertidos: ${model.grados_invertidos} %<br>
      `;
        items.push({
            color: "#500617",
            icon: "mdi-cup",
            nombre: "Fermentación",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt).toLocaleString(),
            model: model,
            index: 4,
        });
    }
    //clarificacion
    if (proceso.clarificacion != undefined) {
        nombre_proceso = "Siguiente proceso: Trasiego";
        n_proceso = 6;
        model = proceso.clarificacion;
        model.id_proceso = proceso._id;
        siguiente_proceso = model.aprobado;
        informacion = `
        Turbidez: ${model.turbidez} ppm<br>
      `;
        items.push({
            color: "#500617",
            icon: "mdi-cup-water",
            nombre: "Clarificación",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt).toLocaleString(),
            model: model,
            index: 5,
        });
    }
    //trasiego
    if (proceso.trasiego != undefined) {
        nombre_proceso = "Siguiente proceso: Envasado";
        n_proceso = 7;
        model = proceso.trasiego;
        model.id_proceso = proceso._id;
        siguiente_proceso = model.aprobado;
        informacion = `
        Liquído claro: ${model.liquido_claro}%<br>
        Liquído oscuro: ${model.liquido_oscuro}%<br>
      `;
        items.push({
            color: "#500617",
            icon: "mdi-glass-tulip",
            nombre: "Trasiego",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt).toLocaleString(),
            model: model,
            index: 6,
        });
    }
    //envasado
    if (proceso.envasado != undefined) {
        nombre_proceso = "Procesos completados";
        n_proceso = 8;
        model = proceso.envasado;
        model.id_proceso = proceso._id;
        siguiente_proceso = model.aprobado;
        esta_completado = model.aprobado;
        informacion = `
        Nro. Lote: ${model.nro_lote}<br>
        Nro. Botellas producidas: ${model.nro_botellas}<br>
        Nro. Botellas especiales: ${model.nro_botellas_especiales}<br>
      `;
        items.push({
            color: "#500617",
            icon: "mdi-barcode-scan",
            nombre: "Envasado",
            informacion: informacion,
            fecha_creacion: new Date(model.createdAt).toLocaleString(),
            model: model,
            index: 7,
        });
    }

    //setVariables
    items = items.reverse();
    return { nombre_proceso, n_proceso, items, siguiente_proceso, proceso, esta_completado };
};



export const formato_usuario = (usuario) => {

    usuario.createdAt = new Date(usuario.createdAt).toLocaleDateString();
    var permisos_array = [];
    try {
        usuario.permisos = JSON.parse(usuario.permisos);
    } catch (error) {
        console.log("");
    }
    usuario.permisos.forEach(e => {
        if (e == 1) permisos_array.push(" Materia prima");
        if (e == 2) permisos_array.push(" Extracción del mosto");
        if (e == 3) permisos_array.push(" Pasteurización");
        if (e == 4) permisos_array.push(" Fermentación");
        if (e == 5) permisos_array.push(" Clarificación");
        if (e == 6) permisos_array.push(" Trasiego");
        if (e == 7) permisos_array.push(" Envasado");
        if (e == 8) permisos_array.push(" Vendedor");
    });
    usuario.permisos_array = permisos_array;
    var permisos_str = "";
    usuario.permisos_array.forEach((e, i) => {
        permisos_str += e;
        if ((i + 1) != usuario.permisos_array.length) {
            permisos_str += ",";
        }
    });
    usuario.permisos_str = permisos_str;
    if (usuario.rol == 1) usuario.rol_str = "Administración";
    if (usuario.rol == 2) usuario.rol_str = "Empleado";
    if (usuario.rol == 3) usuario.rol_str = "Vendedor";
    return usuario;


};