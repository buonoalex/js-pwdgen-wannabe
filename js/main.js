// Questo è il file che contiene tutto il codice JS della pagina web

//Dichiarazioni variabili 
const ebottonBaseLevel = document.getElementById(bottonBaseLevel);
const mbottonMediumLevel = document.getElementById(bottonMediumLevel);
const hbottonHardLevel = document.getElementById(bottonHardLevel);


//Funzione Generazione Pass Hard Level
function GenerateHardLevel(){

    let name = prompt("Inserisci il tuo nome:");
    let surname = prompt("Inserisci il tuo cognome:");
   

    let casualNumber = Math.floor(Math.random() * 10001);


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

    let passwordMediumLevel = PassMedioLevel(name,surname,numberFirst,numberSecond);
    //let passwordMediumLevel = name +""+surname + CalcoloMedio(numberFirst,numberSecond);

    document.getElementById("nameSecondBlock").innerHTML = name; 
    document.getElementById("surnameSecondBlock").innerHTML = surname; 
    document.getElementById("passwordMediumLevel").innerHTML = passwordMediumLevel; 
    console.log("Medium-Level eseguita correttamente");
}


//Funzione Generazione Pass Base Level
function GenerateBaseLevel(){

    let name = prompt("Inserisci il tuo nome:");
    let surname = prompt("Inserisci il tuo cognome:");
  
    let passwordBaseLevel = name +""+surname + 21;

    document.getElementById("nameFirstBlock").innerHTML = name; 
    document.getElementById("surnameFirstBlock").innerHTML = surname; 
    document.getElementById("passwordBaseLevel").innerHTML = passwordBaseLevel; 
    console.log("Base-Level eseguita correttamente");
}

//Eventi bottoni
bottonBaseLevel.addEventListener('click', GenerateBaseLevel);
bottonMediumLevel.addEventListener('click', GenerateMediumLevel);
bottonHardLevel.addEventListener('click', GenerateHardLevel);


//Altre Funzioni

//Funzione Pass Generated Medio
function PassMedioLevel(name,surname,x , y){

    let scambio = 0;
    let risultato = "null";

    if(x<y){
        scambio = x;
        x = y;
        y = scambio
        console.log("Abbiamo scambio");
    }

    if (y == 0 || x == 0)
    {
        MostraAlert();
        risultato = "Errore RIPROVA";
        console.log("Errore 0");
    }
    else
    {
        risultato = name +""+surname+ Math.round(x/y);
        console.log("Stampa numero divisione medium");
    }

    return risultato;
}


function MostraAlert(){
    alert("C'e stato un ERRORE non puoi divedere un numero per 0. (Riprova)");
    console.log("alert lanciato");
}



