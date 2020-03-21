'use strict';
//Vamos a preparar un input de tipo texto, a recogerlo desde JavaScript y a imprimirlo en la consola 
//con console.dir para investigarlo y comentar con la compañera estas propiedades: value  nodeName  required'use strict';
/*
The console.log() method prints out a toString representation of the object in the console to the user.
The console.dir() method output the list of object properties of a specified object in the console to the user.

The nodeName property returns the name of the specified node.
Ex: the name of the node <div> is DIV or <p> i P


The required property sets or returns whether a text field must be filled out before submitting a form.
This property reflects the HTML required attribute.
*/

const button = document.querySelector('.clicked');
button.addEventListener('click', () => {
    const input = document.querySelector('#input');
    console.dir(input);
});