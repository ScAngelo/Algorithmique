/*

exo22 - Écrire un algorithme qui saisit 6 entiers et les stocke dans un tableau, 
puis affiche le contenu de ce tableau une fois qu’il est rempli.

*/

const afficheNombre = [];
let count = 0;

while (count < 6) {

    afficheNombre.push(parseInt(prompt("Rentrez vos nombres ! ")));
    count++;

}

console.log(afficheNombre);

