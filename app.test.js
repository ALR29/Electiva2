// ========================================
// Tests Básicos - app.test.js
// ========================================

const { 
    obtenerFechaHora, 
    saludar, 
    validarEstudiante,
    estudiante 
} = require('./app.js');

// Variable para contar tests
let testsPasados = 0;
let testsFallados = 0;

// Función helper para tests
function test(descripcion, callback) {
    try {
        callback();
        console.log(`✅ PASS: ${descripcion}`);
        testsPasados++;
    } catch (error) {
        console.error(`❌ FAIL: ${descripcion}`);
        console.error(`   Error: ${error.message}`);
        testsFallados++;
    }
}

// Función para assertions
function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Expected ${expected}, but got ${actual}`);
            }
        },
        toContain(substring) {
            if (!actual.includes(substring)) {
                throw new Error(`Expected "${actual}" to contain "${substring}"`);
            }
        },
        toBeTruthy() {
            if (!actual) {
                throw new Error(`Expected truthy value, but got ${actual}`);
            }
        },
        toThrow() {
            let threw = false;
            try {
                actual();
            } catch (e) {
                threw = true;
            }
            if (!threw) {
                throw new Error('Expected function to throw an error');
            }
        }
    };
}

console.log("\n╔════════════════════════════════════════════════╗");
console.log("║         EJECUTANDO TESTS BÁSICOS               ║");
console.log("╚════════════════════════════════════════════════╝\n");

// Test 1: Función obtenerFechaHora
test("obtenerFechaHora debe retornar una cadena de texto", () => {
    const fecha = obtenerFechaHora();
    expect(typeof fecha).toBe('string');
});

test("obtenerFechaHora debe contener el año actual", () => {
    const fecha = obtenerFechaHora();
    expect(fecha).toContain('2024');
});

// Test 2: Función saludar
test("saludar debe retornar un saludo con el nombre", () => {
    const resultado = saludar("Juan");
    expect(resultado).toContain("Juan");
});

test("saludar debe incluir 'DevOps' en el mensaje", () => {
    const resultado = saludar("María");
    expect(resultado).toContain("DevOps");
});

test("saludar debe lanzar error con nombre vacío", () => {
    expect(() => saludar("")).toThrow();
});

// Test 3: Función validarEstudiante
test("validarEstudiante debe retornar true con datos válidos", () => {
    const estudianteValido = {
        nombre: "Test",
        matricula: "2021-0000",
        curso: "DevOps",
        institucion: "ITLA"
    };
    expect(validarEstudiante(estudianteValido)).toBeTruthy();
});

// Test 4: Objeto estudiante
test("estudiante debe tener propiedad nombre", () => {
    expect(estudiante.nombre).toBeTruthy();
});

test("estudiante debe tener propiedad matricula", () => {
    expect(estudiante.matricula).toBeTruthy();
});

test("estudiante debe tener institución ITLA", () => {
    expect(estudiante.institucion).toContain("ITLA");
});

// Resumen de tests
console.log("\n╔════════════════════════════════════════════════╗");
console.log("║            RESUMEN DE TESTS                    ║");
console.log("╚════════════════════════════════════════════════╝");
console.log(`\n  ✅ Tests Pasados: ${testsPasados}`);
console.log(`  ❌ Tests Fallados: ${testsFallados}`);
console.log(`  📊 Total: ${testsPasados + testsFallados}`);
console.log("");

// Exit code para CI/CD
if (testsFallados > 0) {
    process.exit(1);
} else {
    console.log("🎉 ¡Todos los tests pasaron exitosamente!\n");
    process.exit(0);
}