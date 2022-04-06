// chiedere all'utente il proprio nome

const userName = prompt("qual'è il tuo nome?")
console.log(userName);

// chiedere all'utente il proprio cognome

const userSurname = prompt("qual'è il tuo cognome?")
console.log(userSurname);

// chiedere all'utente il suo colore preferito

const favcolor = prompt("qual'è il tuo colore preferito?")
console.log(favcolor)

// Creazione messaggio per la password utente

const message = `la tua password è ${userName}${userSurname}${favcolor}`;
console.log(message);

document.getElementById('my-password').innerHTML = message