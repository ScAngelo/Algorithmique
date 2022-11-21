/*
    exo8 - Lanceur de balles de tennis
    Réalisez l’algorithme d’un lanceur de balles de tennis. 

    Ce lanceur possède deux états :
    - pret: permet de savoir si le tennisman est prêt. 
            Il ne   faut pas lancer de balles dans le cas contraire
    - panierVide: permet de savoir s’il y a encore des balles disponibles.

    Le lanceur de balle possède l’opération « lancerBalle » qui, vous l’aurez compris, permet de lancer une balle.
*/

// let pret = confirm("Êtes-vous prêt ?")

let pret = prompt("Êtes-vous prêt ?") == "true" ? true : false;
let panierVide = prompt("Le panier est-il vide?") == "true" ? true : false;

if (pret && !panierVide) {
    console.log("Lancer la balle");
}
else {
    console.log("Ne pas lancer la balle");

    if (!pret) {
        console.log("Car vous n'êtes pas prêt.");
    }

    if (panierVide) {
        console.log("Car votre panier est vide.");
    }
}

