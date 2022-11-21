/*

    exo19 - À l’aide de la boucle TANTQUE … FAIRE, réalisez un algorithme calculant le résultat 
    de N10. N étant un nombre saisi par l’utilisateur

*/


let exposant = 10;
let nombre = parseFloat(prompt('Entrez un nombre :'));
let again = true;

while (again){

    
    console.log(nombre**exposant);
    again = prompt('voulez vous faire un autre calcul ? oui / non').toLowerCase() == "oui";
    nombre = parseFloat(prompt('Entrez un nombre :'));

}