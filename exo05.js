/*
    exo05 - Réalisez un algorithme convertisseur de secondes. Ce dernier reçoit un nombre de secondes et  détermine le nombre de jours, heures, minutes et secondes auquel il correspond.

    Exemple :
    - 4561 secondes correspondent à 0 jour 1 heure 16 minutes et 1 seconde.
    Réfléchissez à la méthode que nous devons utiliser.
    Une fois l’algorithme réalisé, testez-le en JavaScript.
*/

let seconds = parseInt(prompt("Entrez un nombre de secondes"));

let secondsInDay = 86400; // 60 * 60 * 24
let secondsInHour = 3600; // 60 * 60
let secondsInMinute = 60; // 60

// Récupérer le nombre de jours
let day = parseInt(seconds / secondsInDay);

// Récupérer le nombre d'heures
let hour = parseInt((seconds % secondsInDay) / secondsInHour);

// Récupérer le nombre de minutes
let minute = parseInt(((seconds % secondsInDay) % secondsInHour) / 60);

// Récupérer le nombre de secondes
let second = parseInt(((seconds % secondsInDay) % secondsInHour) % 60);


console.log(`${seconds} secondes correspondent à ${day} jour(s) ${hour} heure(s) ${minute} minute(s) et ${second} seconde(s).`);
