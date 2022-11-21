/*
    exo14
    Reprenez l’algorithme du lanceur de balles de tennis et faites en sorte qu’il lance une balle tant que le stock n’est pas vide. 
    Il y a donc 2 variables stockBalles et pret.
*/

let stockBalles = prompt('Combien de balles avez-vous ?');

while (stockBalles > 0) {
    let pret = prompt('Êtes-vous prêt ?') == 'true' ? true : false;
    if (pret) {
        console.log('Lancer la balle');
        stockBalles --;
        console.log("Nombre de balles restantes : ", stockBalles);
    } else {
        console.log('Ne pas lancer la balle');
    }
}
