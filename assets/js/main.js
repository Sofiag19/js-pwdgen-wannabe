// richiesta nome
var nome = prompt("Inserisci il tuo nome");

// richiesta cognome
var cognome = prompt("Inserisci il tuo cognome");

// nome completo
var nomecompleto = nome + cognome;

// richiesta colore preferito
var colorepref = prompt("Inserisci il tuo colore preferito");

// password completa
var pswcomplete = nomecompleto + colorepref + 19;

// output in pagina
var results = "Ciao " + nomecompleto + ", la tua password è: " + pswcomplete;

document.getElementById('pwdgen').innerHTML = results;
