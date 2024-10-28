// Dati

let userDistance = prompt("Inserire il numero di Km da percorrere in formato numerico");
let userAge = prompt("Inserire la propria età");
let state;
let discount;
const ticketPrice = 0.21;



// Esecuzione Logica

if (!isNaN(userDistance) && !isNaN(userAge)) {
    console.log(`km da percorrere: ${userDistance} km `);
    console.log(`Età utente: ${userAge} anni`);
    console.log(`Prezzo del biglietto per km percorso: ${ticketPrice} euro`);

    let userDistanceInt = parseInt(userDistance);
    let userAgeInt = parseInt(userAge);

    console.log(userDistanceInt, userAgeInt);

    // Applichiamo lo stato e lo sconto in base all'età

    if(userAgeInt < 18) {
        state = "underage";
        discount = 20;
    }

    else if (userAgeInt >= 65) {
        state = "over65";
        discount = 40;
    }

    else {
        state = "adult";
        discount = 0;
    }

    // calcoliamo il prezzo del biglietto

    


}

else {
    alert("Inserire i dati correttamente con valore Numerico. Riavvia la pagina e riprova ;)");
}