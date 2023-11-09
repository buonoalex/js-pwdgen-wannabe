// Questo è il file che contiene tutto il codice JS della pagina web

//Dichiarazioni variabili 
const ebottonBassLevel = document.getElementById(bottonBassLevel);
const mbottonMediumLevel = document.getElementById(bottonMediumLevel);
const hbottonHardLevel = document.getElementById(bottonHardLevel);


//Funzione Generazione Pass Hard Level
function GenerateHardLevel(){

    let name = prompt("Inserisci il tuo nome:");
    let surname = prompt("Inserisci il tuo cognome:");
   

    let casualNumber = Math.floor(Math.random() * 10000);


    let passwordHardLevel = name +""+surname + casualNumber;



    document.getElementById("nameThirdBlock").innerHTML = name; 
    document.getElementById("surnameThirdBlock").innerHTML = surname; 
    document.getElementById("passwordHardLevel").innerHTML = passwordHardLevel; 
    console.log("Hard-Level eseguita correttamente");
}



//Funzione Generazione Pass Medium Level
function GenerateMediumLevel(){

    let name = prompt("Inserisci il tuo nome:");
    let surname = prompt("Inserisci il tuo cognome:");
    let numberFirst = Number(prompt("Inserisci il primo numero:"));
    let numberSecond = Number(prompt("Inserisci il secondo numero:"));

    let passwordMediumLevel = CreaPassMedium(name,surname,numberFirst,numberSecond);
    //let passwordMediumLevel = name +""+surname + CalcoloMedio(numberFirst,numberSecond);

    document.getElementById("nameSecondBlock").innerHTML = name; 
    document.getElementById("surnameSecondBlock").innerHTML = surname; 
    document.getElementById("passwordMediumLevel").innerHTML = passwordMediumLevel; 
    console.log("Medium-Level eseguita correttamente");
}


//Funzione Generazione Pass Bass Level
function GenerateBassLevel(){

    let name = prompt("Inserisci il tuo nome:");
    let surname = prompt("Inserisci il tuo cognome:");
  
    let passwordBassLevel = name +""+surname + 21;

    document.getElementById("nameFirstBlock").innerHTML = name; 
    document.getElementById("surnameFirstBlock").innerHTML = surname; 
    document.getElementById("passwordBassLevel").innerHTML = passwordBassLevel; 
    console.log("Bass-Level eseguita correttamente");
}

//Eventi bottoni
bottonBassLevel.addEventListener('click', GenerateBassLevel);
bottonMediumLevel.addEventListener('click', GenerateMediumLevel);
bottonHardLevel.addEventListener('click', GenerateHardLevel);


//Altre Funzioni

//Funzione calcolo medio 
function CalcoloMedio(x , y){

    let scambio = 0;
    let risultato = 0;

    if (y == 0 || x == 0)
    {
        MostraAlert();
        risultato = 0;
        console.log("Errore 0")
    }
    else if (x<y)
    {
        scambio = x;
        x = y;
        y = scambio
        console.log("Abbiamo scambio");
        risultato = x/y;
    }

    return risultato;
}


function MostraAlert(){
    alert("C'e stato un ERRORE non puoi divedere un numero per 0. (Riprova)");
    console.log("alert lanciato");
}

function CreaPassMedium(name ,surname , x ,y ){

    let passwordMediumLevel = "null";

    if ((CalcoloMedio(x/y)) != 0)
    {
        passwordMediumLevel = name + surname + CalcoloMedio(x/y);
    }else
    {
        passwordMediumLevel = "ERRORE riprova";
    }

    console.log("Crea pass medium eseguita");

    return passwordMediumLevel;

}

