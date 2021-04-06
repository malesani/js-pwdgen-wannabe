var nome = prompt('Come ti chiami?');
var cognome = prompt('Qual è il tuo cognome?');
var colore = prompt('Colore preferito');
var anni =prompt('Quanti anni hai?')
var saluto =" Ciao, ti chiami " + nome + " " + cognome + " " +"il tuo colore preferito è il "+ colore + " e hai "+ anni + " anni" ;


document.getElementById('benvenuto').innerHTML = saluto;
 
console.log(saluto)