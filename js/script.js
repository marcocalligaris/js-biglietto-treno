// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in pagina forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// 1 - Chiedo all'utente i km
// 2 - Chiedo all'utente la sua età
// 3 - Calcolo il prezzo standard del viaggio
// 4 - Calcolo eventuali sconti
// 5 - Calcolo il prezzo finale
// 6 - Stampo/comunico il prezzo finale all'utente



// * Chiedo all'utente i km e la sua età

const tripChoice = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(tripChoice);

const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);


// * Validazione

if (isNaN(tripChoice) || isNaN(userAge) || tripChoice === 0 || userAge === 0) {
    alert('Uno o più dati inseriti non sono validi.');
}

// * Calcolo il prezzo standard del viaggio

const ticketPrice = parseInt(tripChoice * 0.21);
console.log(ticketPrice);

// * Calcolo le variabili di prezzo per gli sconti

if (userAge <= 17) {
    console.log((ticketPrice * 0.8));
}

else if (userAge >= 66) {
    console.log((ticketPrice * 0.6));
}
    
    
// * Collego il paragrafo 
    
document.getElementById('final-price').innerText = 'Il prezzo della tua soluzione di viaggio è di € ' +  ticketPrice;