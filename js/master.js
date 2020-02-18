// definisco la variabile km e chiedo all'utente quanti ne deve percorrere
//definisco la variabile etaPasseggero e chiedo all'utente la sua età
//definisco la variabile costoPerKm (0.21) e la moltiplico per la variabile km
//applico uno sconto del 20% se si verifica la condizione per cui etaPasseggero è minore di 18
//applico uno sconto del 40% se si verifica la condizione per cui etaPasseggero è >= a 65

var km = prompt('quanti km devi percorrere?');
var etaPasseggero = prompt('quanti anni hai?');

var costoPerKm = 0.21;

if (etaPasseggero < 18) {
    var costoTotale = (costoPerKm * km) - (((costoPerKm * km)*20) / 100);
} else if (etaPasseggero >= 65) {
    var costoTotale = (costoPerKm * km) - (((costoPerKm * km)*40) / 100);
} else {
    var costoTotale = (costoPerKm * km);
}

document.getElementById('costo-biglietto').innerHTML = 'il costo del biglietto è: ' + costoTotale;
