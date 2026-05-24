var permitido = "usuario permitido"
var miFuncion = acceso => acceso

var persona = {
    nombre: "Ana",
    miAutomovil: [
        pintura = {
            marca: "Marca",
            precio: 28500,
            color: "Azul"
        },

        vendedor = {
            nombre: "Guillermo",
            edad: 2,

            ayudante: {
                nombre: "Lucia"
            }
        }
    ]
}

var miArray = [
    "Guillermo",
    2022,
    34.9,
    true,
    ["Otro Array", "Array", 7900],
    miFuncion(permitido),
    persona
]

console.log(miArray[6].miAutomovil[1].ayudante.nombre)