/*

exo26 - À l’aide des boucles, réalisez un algorithme permettant de trier un 
        tableau d’entiers dans l’ordre croissant. 
      - Mettez-le ensuite en pratique avec JavaScript.


*/



const array = [52, 27, 14, 92, 4, 5, 110, 102, 22, 18, 30];

console.log("tableau trier par ordre croissant");
for (const value of array) {
    console.log(value);

}
console.log(array.sort((a, b) => a - b));

