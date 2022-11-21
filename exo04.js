/*
    exo04-Bonus : Imaginez une méthode permettant d’inverser le contenu d’une variable
    entière SANS utiliser une variable temporaire.
*/

let nb1 = 5;
let nb2 = 7;

console.log(`nb1 = ${nb1} et nb2 = ${nb2}`);

nb1 = nb1 + nb2; // 5 + 7 = 12
nb2 = nb1 - nb2; // 12 - 7 = 5
nb1 = nb1 - nb2; // 12 - 5 = 7

console.log(`nb1 = ${nb1} et nb2 = ${nb2}`);