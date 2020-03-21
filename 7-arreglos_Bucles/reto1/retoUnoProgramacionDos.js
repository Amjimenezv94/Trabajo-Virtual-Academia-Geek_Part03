'use strict';
//Arreglos
// crear un array movies con un listado de 3 películas

const movies = [
    'Inception',
    'The butterfly effect',
    'Eternal sunshine of the spotless mind',
];
movies[3] = ('Blue velvet');
movies[0] = ('Blue velvet');


const nuevaLongitud = movies.push('Blue velvet');
const elementosEliminados = movies.splice(0, 1);

console.log(movies);
console.log(movies.length);
console.log(nuevaLongitud);
console.log(elementosEliminados);
console.log(movies.length);
console.log(movies);
//añade al array anterior otra película más que le guste.
//añadiremos la nueva película en la posición 3 del array




/* document.getElementById('#peliculas').innerHTML = movies;
function agregar() {
  
  document.getElementById('#peliculas').innerHTML = movies;
};
console.log("{0}", (movies));*/

//console.log agregar(movies);

//'Blue velvet';
// 'Split';