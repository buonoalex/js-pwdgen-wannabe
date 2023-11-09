// Questo è il file che contiene tutto il codice JS della pagina web

//Prendiamo i prompt 
let name = prompt("Inserisci il tuo nome:");
let surname = prompt("Inserisci il tuo cognome:");
let numberFirst = Number(prompt("Inserisci il primo numero:"));
let numberSecond = Number(prompt("Inserisci il secondo numero:"));

//Elaborazione
let numberCalcolatedMedium = Math.trunc(CalcoloMedio(numberFirst,numberSecond))
let numberCalcolatedHard = Math.floor(Math.random() * 10000);
let passwordBassLevel = name + "" + surname + 21
let passwordMediumLevel = name + "" + surname + numberCalcolatedMedium
let passwordHardLevel = name + "" + surname + numberCalcolatedHard

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
document.getElementById("passwordHardLevel").innerHTML = passwordHardLevel

//Funzione calcolo medio 
function CalcoloMedio(x , y){

    let scambio = 0;
    let risultato = 0;

    //ControlloZero(y);

    if (x<y){
        scambio = x;
        x = y;
        y = scambio;
    }

    risultato = x/y;
    return risultato;
}


//Funzione controllo errore divisione 0
/*function ControlloZero(z){
    let avviso = "null";
    if(z = 0){
        avviso = "C'e stato un ERRORE non puoi divedere un numero per 0. (Riprova)"
    }
}*/
