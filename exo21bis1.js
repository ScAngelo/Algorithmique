/*

1) Réalisez un système de connexion à l'aide d'un mot de passe. L'algorithme demande à l'utilisateur de saisir son 
mot de passe. Si ce dernier valide de bon mot de passe, on le salue. Par contre, si il fait une erreur trois fois de 
suite, un message lui signalera que son compte est bloqué et il ne pourra pas réessayer une quatrième fois

*/

let motDePasse = prompt('entrez un mot de passe :');

let confirmMotDePasse = prompt('confirmez votre mot de passe :');
let compteur = 0;


while(motDePasse != confirmMotDePasse && compteur < 3){

    confirmMotDePasse = prompt('confirmez votre mot de passe :');
    compteur++;

}

if (motDePasse == confirmMotDePasse){
    console.log("Bienvenue dans votre session ! " + compteur + " essais" )
}else if(motDePasse != confirmMotDePasse){   
    console.log("Compte bloquer ! " + compteur + " essais" )
}




/**---

2) Réalisez un algorithme qui demande un nombre à l'utilisateur et affiche autant de ligne que le nombre spécifié par 
l'utilisateur. Exemple : l'utilisateur a rentré le nombre 5 et l'algorithme affiche :
*
**
***
****

---**/

