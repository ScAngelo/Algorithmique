/*
    exo01
    Trouvez une méthode permettant d’inverser le contenu de deux variables (du même type évidemment).
    Si nb1 = 5 et nb2 = 7, après ce traitement, 
    nb1 = 7 et nb2 = 5.
*/

let nb1 = 5;
let nb2 = 7;

console.log(`nb1 = ${nb1} et nb2 = ${nb2}`);

let temp = nb1;
nb1 = nb2;
nb2 = temp;

console.log(`nb1 = ${nb1} et nb2 = ${nb2}`);
