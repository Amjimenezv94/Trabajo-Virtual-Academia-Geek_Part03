'use strict'

let num = 0;
num = prompt('¿De qué altura quieres el arbolito?');
acum = '';

for (let i = 0; i < num; i++) {
    acum = acum + '▲';
    console.log('' + acum);
}