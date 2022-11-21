/*
    exo17 - Distributeur de boissons
    À l’aide d’une boucle FAIRE … TANTQUE (while) , améliorez l’algorithme du distributeur de 
    boissons pour qu’il demande au client s’il désire une autre boisson (Tant qu’il en a envie)

*/

// Initialisation des stocks
let stockCoca = 5;
let stockFanta = 2;
let stockEau = 0;

let envie = false;

do {
    console.log('Coca', stockCoca);
    console.log('Fanta', stockFanta);
    console.log('Eau', stockEau);

    let choice = prompt('Menu : 1. Coca, 2. Fanta, 3. Eau : ');
    switch (choice) {
        case '1':
            // Coca

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

            if (stockFanta > 0) {
                console.log('Merci pour votre achat');
                stockFanta--;
            } else {
                console.log("Il n'y a plus de stock");
            }
    
            break;
        case '3':
            // Fanta

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

    envie = prompt('voulez vous une autre boissons ? oui / non').toLowerCase() == "oui";


} while (envie && (stockCoca+stockEau+stockFanta)>0);
   
console.log('merci aurevoir');

