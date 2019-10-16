// name request
var name = prompt("Inserisci il tuo nome");

// surname request
var surname = prompt("Inserisci il tuo cognome");

// complete name
var completeName = name + surname;

// fovorite color request
var favoriteColor = prompt("Inserisci il tuo colore preferito");

// complete password
var completePsw = completeName + favoriteColor + 19;

// message for user
var results = "Ciao " + completeName + ", la tua password è: " + completePsw;

// page output
document.getElementById('pwdgen').innerHTML = results;
