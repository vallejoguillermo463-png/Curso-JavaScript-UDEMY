// FUNCIÓN NORMAL

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

let resultadoSuma = sumar(10, 5);

console.log("La suma es:", resultadoSuma);


// ARROW FUNCTION

const multiplicar = (a, b) => {
    return a * b;
};

let resultadoMultiplicacion = multiplicar(4, 6);

console.log("La multiplicación es:", resultadoMultiplicacion);


// FUNCIONES NUMÉRICAS

let numeroDecimal = 8.75;

console.log("Número original:", numeroDecimal);

console.log("Redondeado:", Math.round(numeroDecimal));

console.log("Raíz cuadrada:", Math.sqrt(81));

console.log("Número máximo:", Math.max(10, 50, 20));

console.log("Número mínimo:", Math.min(10, 50, 20));


// OTRA FUNCIÓN

function calcularPromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let promedio = calcularPromedio(8, 9, 10);

console.log("El promedio es:", promedio);