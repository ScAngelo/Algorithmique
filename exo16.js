/*
    exo16 - Un algorithme reçoit deux nombres de l’utilisateur (opération Lire) : justePrix et 
            proposition.
*/

// Boucle while

let justePrix = parseInt(prompt('Entrez votre juste prix :'));
let proposition = parseInt(prompt('Entrez votre proposition :'));

while(proposition != justePrix){

    proposition = parseInt(prompt('Entrez votre proposition :'));
    console.log('ratez ressayer');

    if(proposition == justePrix){
       console.log('c\'est gagner');
    } 
    
}

          
// Condition if , else if
/* 

let justePrix = parseInt(prompt('Entrez votre juste prix :'));
let proposition = parseInt(prompt('Entrez votre juste prix :'));

if( proposition < justePrix){
    console.log("c\'est plus");
} 
    else if(proposition > justePrix){
        console.log("c\'est moin");
    } 
    else{
        console.log("c\'est gagner");
    }
          
*/

