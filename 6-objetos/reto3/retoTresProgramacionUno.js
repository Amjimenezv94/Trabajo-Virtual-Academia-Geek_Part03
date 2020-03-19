'use strict';

const geekGirl1 = {}
geekGirl1.name = 'Susana';
geekGirl1.age = 34;
geekGirl1.profession = 'Periodista';
geekGirl1.run = (phrase) => `Estoy  ${phrase}`;
//Los métodos son funciones asociadas a la propiedad de un objeto
geekGirl1.showBio = function(name, age, profession) {
    return alert('Mi nombre es' + geekGirl1.name + ', tengo' + geekGirl1.age + ' años ' + 'y soy ' + geekGirl1.profession);
}

console.log(geekGirl1.showBio());