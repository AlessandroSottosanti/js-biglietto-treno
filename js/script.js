// Dati

let userDistance = prompt("Inserire il numero di Km da percorrere in formato numerico");
let userAge = prompt("Inserire la propria età");
let state;
let discountpercent;
let baseTicketPrice;
let discountValue;
let totTicketPrice;
const ticketPrice = 0.21;



// Esecuzione Logica

if (!isNaN(userDistance) && !isNaN(userAge)) {
    console.log(`km da percorrere: ${userDistance} km `);
    console.log(`Età utente: ${userAge} anni`);
    console.log(`Prezzo del biglietto per km percorso: ${ticketPrice} euro`);


    // Convertiamo i valori ottenuti dall'input in Int
    let userDistanceInt = parseInt(userDistance);
    let userAgeInt = parseInt(userAge);

    // Applichiamo lo stato e lo sconto in base all'età

    if(userAgeInt < 18) {
        state = "minorenni";
        discountpercent = 20;
    }

    else if (userAgeInt >= 65) {
        state = "over 65";
        discountpercent = 40;
    }

    else {
        state = "adulti";
        discountpercent = 0;
    }


    // Calcoliamo il prezzo del biglietto

    baseTicketPrice = userDistanceInt * ticketPrice;


    // aggiungiamo lo sconto

    discountValue = (baseTicketPrice / 100) * discountpercent;

    totTicketPrice = baseTicketPrice - discountValue;


// Output

    console.log(`Prezzo biglietto: ${baseTicketPrice} euro`); 

    if(state === "minorenni" || state === "over 65") {
        console.log(`Applicato sconto per ${state} del ${discountpercent}%`);
        console.log(`Prezzo finale del biglietto: ${totTicketPrice} euro`);
    }


    


}

// Messaggio di errore

else {
    alert("Inserire i dati correttamente con valore Numerico. Riavvia la pagina e riprova ;)");
}