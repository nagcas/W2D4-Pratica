// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione 
(anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti 
sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}


const prices = [34, 5, 2];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!


// verificao sel il mio script è collegato alla pagina index.html
console.log("It's working!!!");

// funzione per calcolare il costo totale del carrello
function totalCost(prices) {
  let sommaPrices = 0;
  
  // ciclo l'array prices per eseguire la somma totale e visualizzo in console il costo dei singoli articoli
  for (let i = 0; i < prices.length; i++) {
    console.log("Articolo: " + (i + 1), " costo: € "+ prices[i]);
    sommaPrices += prices[i];
  }
  
  // stampo in console il valore del costo totale
  console.log("Costo totale carello: " +sommaPrices);
  
  // restituisco il valore della somma del carrello
  return sommaPrices;
}

// funzione per verificare se l'utente è un ambassador e se dispone della spesa di spedizione gratuita
function verifyAndTotalCost(user, total, shippingCost) {
  let totalCost;
  // verifico se l'utente è un ambassador
  if(user.isAmbassador) {
    // applico lo sconto del 30%
    totalCost = total * 0.7;
    // stampo su console il totale con lo sconto 
    console.log("Costo totale con sconto del 30% € " + totalCost);
  } else { // altrimenti se l'utente non è un ambassador
    totalCost = total;
    // stampo su console il totale senza sconto
    console.log("Costo totale senza sconto del 30% € " + totalCost);
  }
  // verifico se il costo totale del carrello è inferiore o superiore a e 100
  if (totalCost <= 100) {
    // se inferiore a e 100 aggiungo le spese di spedizione
    totalCost = total + shippingCost;
    console.log("Costo totale con spesa di spedizione di € 50: € " + totalCost);
  } else { // altrimenti se il costo del carrello è superiore la spesa è gratuita 
    console.log("Costo totale senza spesa di spedizione: € " + totalCost);
  }
  // restituisco il valore del costo del carello
  return totalCost;
}

// funzione che riceve una lista di utenti e stampa su console se l'utente è o non è ambassator
function userAmbassador(user) {
  // si utilizza l'operatore ternario
  console.log(user.name, user.lastName, (user.isAmbassador) ? "è un ambassador" : "non è un ambassador");
}


// richiamo la funzione del calcolo costo totale del carrello
total = totalCost(prices);

// richiamo la funzione per verificare che l'utente sia ambassador e il costo del carrello sia inferiore a € 100
totalCost = verifyAndTotalCost(utenteCheEffettuaLAcquisto, total, shippingCost);

// creo un array di utenti
let listaUtenti = [];
listaUtenti.push(marco, paul, amy);
// console.table(listaUtenti);

// richiamo la funzione ciclando l'array listautenti per stampare su console la frase: "NOMEUTENTE COGNOME UTENTE è/non è ambassador"
console.log("Elenco lista utenti")
for (let i = 0; i < listaUtenti.length; i++) {
  // console.table(listaUtenti[i]);
  userAmbassador(listaUtenti[i]);
}

// creo un array di solo utenti ambassador
let utentiAmbassador = []; // inizializzo array
for (let i = 0; i < listaUtenti.length; i++) {
  // per ogni utente che soddisfi la condizione di utente ambassador viene aggiunto all'array utentiAmbassador
  if (listaUtenti[i].isAmbassador) {
    utentiAmbassador.push(listaUtenti[i]) 
  }
}
// stampa su console la lista degli utenti ambassador
console.table(utentiAmbassador);