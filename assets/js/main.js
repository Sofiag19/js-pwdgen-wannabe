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

// password completa
var results = "Ciao " + nomecompleto + ", la tua password è: " + pswcomplete;

// output in pagina 
document.getElementById('pwdgen').innerHTML = results;
