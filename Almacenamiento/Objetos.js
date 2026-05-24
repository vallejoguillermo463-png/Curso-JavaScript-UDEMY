var user = "Segundo"

var persona = {
    nombre: "Segundo",
    sexo: "Masculino"
}

var miObjeto = {

    nombre: "Guillermo",
    edad: 56,
    importante: true,
    texto: `Usuario ${user}`,

    miFuncion: (a, b) => a + b,

    otroObjeto: persona,

    fecha: new Date()
}

var { nombre } = miObjeto

console.log(miObjeto.fecha.getFullYear())


var otraFuncion = (text, { otroObjeto }) => {

    console.log(otroObjeto.sexo)

    console.log(text)
}

otraFuncion(miObjeto.texto, miObjeto)