/*
    exo15 - À l’aide de deux boucles, affichez les tables de multiplication de 1 à 9. 
            Ensuite, codez votre algorithme en JavaScript.
*/


let multiple = 1;


while (multiple <= 9) {

    let count = 1;
    while (count <= 10 ) {
        console.log(`${count} * ${multiple} = ` + `${count * multiple}` );  
        count++;
     
    } 
    multiple ++;
    
}

