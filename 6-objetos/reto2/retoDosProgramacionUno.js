'use strict';
const geekGirl1 = {}
geekGirl1.name = 'Susana';
geekGirl1.age = 34;
geekGirl1.profession = 'Periodista';
geekGirl1.distance = 50;
geekGirl1.run = (phrase) => `Estoy  ${phrase}`;
//Los métodos son funciones asociadas a la propiedad de un objeto


console.log(geekGirl1.run('corriendo'));

geekGirl1.runAMarathon = (distance) => `Estoy corriendo ${distance}`;
//Los métodos son funciones asociadas a la propiedad de un objeto
console.log(geekGirl1.runAMarathon(geekGirl1.distance) + 'Kilometros');