// Questo è il file che contiene tutto il codice JS della pagina web

//Prendiamo i prompt 
let name = prompt("Inserisci il tuo nome:");
let surname = prompt("Inserisci il tuo cognome:");
let numberdivisore = Number(prompt("Inserisci il divisore:"));
let numberdividendo = Number(prompt("Inserisci il dividendo:"));

//Elaborazione
let numberCalcolatedMedium = numberdivisore / numberdividendo
let passwordBassLevel = name + "" + surname +21
let passwordMediumLevel = name + "" + surname + numberCalcolatedMedium

//Visualizzare il risultato del prompt in HTML Bass Level
document.getElementById("nameFirstBlock").innerHTML = name;
document.getElementById("surnameFirstBlock").innerHTML = surname;
document.getElementById("passwordBassLevel").innerHTML = passwordBassLevel

//Visualizzare il risultato del prompt in HTML Medium Level
document.getElementById("nameSecondBlock").innerHTML = name;
document.getElementById("surnameSecondBlock").innerHTML = surname;
document.getElementById("passwordMediumLevel").innerHTML = passwordMediumLevel

//Visualizzare il risultato del prompt in HTML Hard Level
document.getElementById("nameThirdBlock").innerHTML = name;
document.getElementById("surnameThirdBlock").innerHTML = surname;
document.getElementById("passwordHardLevel").innerHTML = passwordMediumLevel
