/*
    exo10 - Calculatrice
    Réaliser l’algorithme d’une calculatrice basique (+, -, *, /, //, %)
    L’utilisateur est invité à saisir un nombre, un opérateur, et un deuxième nombre. 
    La calculatrice affiche ensuite le résultat. 
    (Gérer la division par 0)
*/

let nb1 = parseFloat(prompt('Entrez un premier nombre :'));
let operator = prompt('Entrez un opérateur (+, -, *, /, //, %) :');
let nb2 = parseFloat(prompt('Entrez un deuxième nombre :'));
let result = 0;

if (
    operator == '+' ||
    operator == '-' ||
    operator == '*' ||
    operator == '/' ||
    operator == '//' ||
    operator == '%'
) {
    switch (operator) {
        case '+':
            result = nb1 + nb2;
            break;
        case '-':
            result = nb1 - nb2;
            break;
        case '*':
            result = nb1 * nb2;
            break;
        case '/':
            if (nb2 != 0) result = nb1 / nb2;
            break;
        case '//':
            if (nb2 != 0) result = parseInt(nb1 / nb2);
            break;
        case '%':
            result = nb1 % nb2;
            break;
    }

    if ((operator == "/" || operator == "//" ) && nb2 == 0)
        console.log("Division par 0 impossible");
    else
        console.log(`${nb1} ${operator} ${nb2} = ${result}`);
} else {
    console.log(`L'opérateur entré (${operator}) n'est pas reconnu`);
}
