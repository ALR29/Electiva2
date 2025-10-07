// ========================================
// Programa Hola Mundo - DevOps ITLA
// ========================================

// Función para obtener fecha y hora actual
function obtenerFechaHora() {
    const ahora = new Date();
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'America/Santo_Domingo'
    };
    return ahora.toLocaleString('es-DO', opciones);
}

// Información del estudiante
const estudiante = {
    nombre: "Angel Luis Rosario",
    matricula: "2024-0079",
    curso: "DevOps - Integración Continua",
    institucion: "ITLA",
    semestre: "2025-C3"
};

// Función para mostrar información del estudiante
function mostrarInfoEstudiante() {
    console.log("\n╔════════════════════════════════════════════════╗");
    console.log("║     INFORMACIÓN DEL ESTUDIANTE - ITLA          ║");
    console.log("╚════════════════════════════════════════════════╝\n");
    console.log(`  👤 Nombre:      ${estudiante.nombre}`);
    console.log(`  🎓 Matrícula:   ${estudiante.matricula}`);
    console.log(`  📚 Curso:       ${estudiante.curso}`);
    console.log(`  🏫 Institución: ${estudiante.institucion}`);
    console.log(`  📅 Semestre:    ${estudiante.semestre}`);
    console.log(`  ⏰ Fecha/Hora:  ${obtenerFechaHora()}`);
    console.log("\n╔════════════════════════════════════════════════╗");
    console.log("║          ¡HOLA MUNDO DESDE DEVOPS! 🚀          ║");
    console.log("╚════════════════════════════════════════════════╝\n");
}

// Función de saludo personalizado
function saludar(nombre) {
    if (!nombre || nombre.trim() === "") {
        throw new Error("El nombre no puede estar vacío");
    }
    return `¡Hola ${nombre}, bienvenido al curso de DevOps en ITLA! 👋`;
}

// Función para validar información del estudiante
function validarEstudiante(est) {
    return est.nombre && 
           est.matricula && 
           est.curso && 
           est.institucion;
}

// Ejecutar el programa
if (require.main === module) {
    console.log("\n🚀 Iniciando aplicación...\n");
    mostrarInfoEstudiante();
    console.log(saludar(estudiante.nombre));
    console.log("\n✅ Aplicación ejecutada correctamente");
    console.log("📦 Build ID: " + Date.now());
    console.log("");
}

// Exportar funciones para testing
module.exports = {
    obtenerFechaHora,
    saludar,
    validarEstudiante,
    estudiante
};