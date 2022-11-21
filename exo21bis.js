/*

V Améliorez encore le justePrix : l'utilisateur a droit à 10 essais après ces 10 essais, il a 
    perdu et l'ordinateur affiche le justePrix 

V Ajouter un niveau :
    facile : entre 1 et 10
    moyen : entre 1 et 100
    difficile : entre 1 et 1000

V Tant que la personne veut rejouer, redemandez le niveau et générez un nombre.

Vérifiez que tout caractère entré est correct, c'est-à-dire pour que le programme ne 
plante jamais.


*/
// -----------------------------------------------------------------------------

        //-- DECLARATION DES VARIABLES --
let min = 1;
let max = 10;

let proposition = 0;
let compteur = 0;

let again = false;


do {
        //-- MENU --
        
    let niveau = prompt('Choisissez une difficulté : 1. facile, 2. moyen, 3. difficile : ');
    // On choisit un niveau de difficulté entre facile moyen difficile
    switch (niveau) {
        case '1':
            max = 10;
            break;
        case '2':
            max = 100;
            break;
        case '3':
            max = 1000;
            break;
        default:
            // Autre chose que ce qu'il y a dans le menu
            console.log('Choix inconnu.');
    }

    //On affiche le choix facile moyen difficile
    let justePrix = Math.floor(Math.random() * max) + min;
    console.log(`debug justeprix = ${justePrix}`);


    while (proposition !== justePrix && compteur < 10) {

        compteur++;
        proposition = parseInt(prompt('Entrez une proposition : '));

        if (proposition < justePrix) {
            console.log("C'est plus.");
        } else if (proposition > justePrix) {
            console.log("C'est moins.");
        } else if (proposition === justePrix) {
            console.log(`C'est gagné en ${compteur} essai${compteur > 1 ? "s" : ""}`);
        }

    }

    if (compteur == 10) {
        console.log(`C'est perdu ! voici le juste prix ${justePrix}`);
    } else
        again = prompt('Voulez vous rejouer ? oui / non').toLowerCase() == "oui";

} while (again);

console.log(`Merci d'avoir jouer`);

//On re demande a jouer tant que la personne accepte 


