// Chiedi all’utente il suo nome 

let userName = prompt("Inserisci il tuo nome");
document.getElementById("nome").innerHTML= userName;

// chiedi il suo cognome

let userSurname = prompt("Inserisci il tuo cognome");
document.getElementById("cognome").innerHTML= userSurname;

// chiedi il suo colore preferito

let userFavouriteColor = prompt("Inserisci il tuo colore preferito");
document.getElementById("colore").innerHTML= userFavouriteColor;

// crea costante per 23

const numeroFisso = 23;

// aggiungi nome + cognome + colorepreferito + 23

let userPassword = userName + userSurname + userFavouriteColor + numeroFisso;

// scrivi sulla pagina nomecognomecolorepreferito23

document.getElementById("risultato-password").innerHTML = userPassword;