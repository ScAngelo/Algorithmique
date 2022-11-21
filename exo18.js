/*

    exo18 - À l’aide d’une boucle FAIRE … TANTQUE, améliorez l’algorithme de la calculatrice 
    afin qu’elle demande à l’utilisateur s’il veut faire un autre calcul (tant qu’il le désire).

*/

let again = false;

do {

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

    again = prompt('voulez vous faire un autre calcul ? oui / non').toLowerCase() == "oui";


} while (again);
   
    console.log('merci aurevoir');

