/*

exo25 - Inverser un tableau : soit un tableau T. Saisir ce tableau. Changer de 
        place les éléments de ce tableau de façon à ce que le nouveau tableau soit 
        une sorte de miroir de l'ancien et afficher le nouveau tableau.

*/


const tableauOrdonner = [1,2,3,4,5,6,7,8,9,10];
let tableauInverser = [];

console.log("tableau ordonner");
for (const value of tableauOrdonner) {
    console.log(value);
}

tableauInverser = tableauOrdonner.slice().reverse();

console.log("tableau inverser");
for (const value of tableauInverser) {
        console.log(value);
}
