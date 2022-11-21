/*
    exo09 - Distributeur de boissons
    Réalisez l’algorithme d’un distributeur de boissons. 
    Ce dernier propose plusieurs boissons et l’utilisateur choisit celle qu’il désire en entrant le numéro correspondant.
    N'oubliez pas de vérifier s’il y a encore des boissons en stock.
*/

// Initialisation des stocks
let stockCoca = 5;
let stockFanta = 2;
let stockEau = 0;

let choice = prompt('Menu : 1. Coca, 2. Fanta, 3. Eau : ');

switch (choice) {
    case '1':
        // Coca
        console.log('Coca', stockCoca);
        if (stockCoca > 0) {
            console.log('Merci pour votre achat');
            // stockCoca = stockCoca - 1;
            // stockCoca -= 1;
            stockCoca--;
        } else {
            console.log("Il n'y a plus de stock");
        }

        break;
    case '2':
        // Fanta
        console.log('Fanta', stockFanta);
        if (stockFanta > 0) {
            console.log('Merci pour votre achat');
            stockFanta--;
        } else {
            console.log("Il n'y a plus de stock");
        }

        break;
    case '3':
        // Fanta
        console.log('Eau', stockEau);
        if (stockEau > 0) {
            console.log('Merci pour votre achat');
            stockEau--;
        } else {
            console.log("Il n'y a plus de stock");
        }

        break;
    default:
        // Autre chose que ce qu'il y a dans le menu
        console.log('Choix inconnu.');
}
