// OBJETO

let estudiante = {
    nombre: "Guillermo",
    edad: 56,
    carrera: "Desarrollo de Software",
    activo: true
};


// ARRAY

let materias = [
    "Programación Web",
    "Base de Datos",
    "JavaScript"
];


// MOSTRAR SOLO DATOS

console.log("Nombre:", estudiante.nombre);

console.log("Edad:", estudiante.edad);

console.log("Carrera:", estudiante.carrera);

console.log("Activo:", estudiante.activo);


// MOSTRAR MATERIAS

console.log("Materia 1:", materias[0]);

console.log("Materia 2:", materias[1]);

console.log("Materia 3:", materias[2]);


// AGREGAR NUEVA MATERIA

materias.push("Diseño Web");

console.log("Nueva materia agregada:",
materias[3]);


// JSON

let estudianteJSON = JSON.stringify(estudiante);

console.log("JSON:");
console.log(estudianteJSON);