// ARRAY DE NOTAS

let notas = [7, 8, 9, 10, 6];


// IF ELSE

let promedioInicial = 8;

if (promedioInicial >= 7) {
    console.log("El estudiante APRUEBA");
} else {
    console.log("El estudiante REPRUEBA");
}


// SWITCH

let materia = "Programacion";

switch (materia) {

    case "Programacion":
        console.log("Materia de desarrollo web");
        break;

    case "BaseDatos":
        console.log("Materia de bases de datos");
        break;

    case "Diseño":
        console.log("Materia de diseño");
        break;

    default:
        console.log("Materia no encontrada");
}


// FOR

console.log("Notas usando FOR");

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}


// FOREACH

console.log("Notas usando FOREACH");

notas.forEach(function(nota) {
    console.log(nota);
});


// MAP

let nuevasNotas = notas.map(function(nota) {
    return nota + 1;
});

console.log("Notas aumentadas:");
console.log(nuevasNotas);


// REDUCE

let sumaNotas = notas.reduce(function(acumulador, nota) {
    return acumulador + nota;
}, 0);

let promedio = sumaNotas / notas.length;

console.log("Promedio final:");
console.log(promedio);