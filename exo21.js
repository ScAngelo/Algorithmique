/*
    exo21
 v   Améliorez le "C'est plus, c'est moins, c'est gagné" pour qu'il
     tourne en boucle tant que le justePrix n'a pas été trouvé.
    
 V  L'ordinateur choisit un nombre aléatoirement entre 1 et 100.
 v  L'utilisateur est invité à entrer un nombre et l'algorithme nous    
    répond "C'est plus" ou "C'est moins". 
    
 v  Lorsqu'on a trouvé le bon nombre, l'algorithme affiche le nombre de tentatives 
    effectuées pour trouver le résultat.
*/

// let compteur = 0;
// let justePrix = Math.floor(Math.random() * 100) + 1;

// console.log(justePrix);

// let proposition = parseInt(prompt('Entrez une proposition : '));
// compteur ++;

// while (proposition != justePrix) {

//     if (proposition < justePrix) {
//         console.log("C'est plus.");
//     } else if (proposition > justePrix) {
//         console.log("C'est moins.");
//     } else {
        
//     }
//     proposition = parseInt(prompt('Entrez une proposition : '));
//     compteur ++;
// } 

// console.log(`C'est gagné en ${compteur} essai${compteur > 1 ? "s" : ""}`);

// -----------------------------------------------------------------------------

let min = 0, max = 100;

let proposition = 0, 
    compteur = 0, 
    justePrix = Math.floor(Math.random() * max) + min;

while (proposition !== justePrix) {
    proposition = parseInt(prompt('Entrez une proposition : '));
    compteur ++;

    if (proposition < justePrix) {
        console.log("C'est plus.");
    } else if (proposition > justePrix) {
        console.log("C'est moins.");
    }
} 

console.log(`C'est gagné en ${compteur} essai${compteur > 1 ? "s" : ""}`);