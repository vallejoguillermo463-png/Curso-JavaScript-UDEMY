let pelicula1 = { titulo: "Titanic", anio: 1997, valoracion: 5 }
let pelicula2 = { titulo: "Frozen", anio: 2013, valoracion: 4 }
let pelicula3 = { titulo: "Avatar", anio: 2009, valoracion: 5 }
let pelicula4 = { titulo: "The Lion King", anio: 1994, valoracion: 5 }
let pelicula5 = { titulo: "Spider-Man: No Way Home", anio: 2021, valoracion: 4 }

let peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5]

let nuevoObjeto = ({valoracion}) => {

    valoracion >= 5 ? valoracion += 1 : valoracion += 0

    let objeto = {}
    objeto["valoracion"] = valoracion

    return objeto
}

let miNuevaValoracion = peliculas.map(nuevoObjeto)

console.log(peliculas)
console.log(miNuevaValoracion)

let reducirValoracion = (acum, {valoracion}) => acum + valoracion

let miTotalValoracion = peliculas.reduce(reducirValoracion,0)

console.log(miTotalValoracion)

let sumarValoracion = ({ valoracion }) => valoracion >= 5 ? valoracion += 1 : valoracion += 0

let valorado = peliculas.map(sumarValoracion)

console.log(valorado)

