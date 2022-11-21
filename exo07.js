/*
    exo07 - Année bissextile
    Réalisez un petit algorithme qui sur base d’une année donnée va déterminer s’il s’agit d’une année bissextile. Une année est bissextile si elle est divisible par 4, mais non divisible par 100. Ou si elle est divisible par 400.
    Bissextile : 2000, 1996 !Bissextile : 1900, 1997
*/

let year = parseInt(prompt("Entrez une année :"));

// console.log("year % 4 == 0", year % 4 == 0);
// console.log("year % 100 != 0", year % 100 != 0);
// console.log("year % 400 == 0", year % 400 == 0);

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log("Année bissextile");
}
else {
    console.log("Année non bissextile");
}

// ----------------------------------------------------

// let nombre = 1900

// let divisiblePar2 = (nombre % 4 == 0)

// console.log(divisiblePar2);