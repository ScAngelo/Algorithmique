/*

exo24 - Écrire un algorithme demandant à l’utilisateur le nombre de joueurs (max 10 joueurs). 

        Ensuite, l’algorithme doit demander à l’utilisateur le score de chaque joueur. 

        Une fois ceci fini, il faut afficher la moyenne des scores. 
        Faites de même en JavaScript


*/

const nombreJoueur = [2,5,4,6,4,8,9,7,9,5];
const MAX_PLAYERS = 10;
let scoreMoyenne = 0;

console.log("il y a " + nombreJoueur.length + " joueurs");

for (const value of nombreJoueur) {
    console.log(value);
    scoreMoyenne += value;

}

console.log("La moyenne des scores des 10 joueurs est de " + scoreMoyenne/MAX_PLAYERS);

