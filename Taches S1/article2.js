const prompt = require("prompt-sync")();
let nom = prompt("l'article: ");
let prix = Number(prompt("prix: "));
let quantite = Number(prompt("quantite: "));

let total = prix*quantite;

console.log("l'article: ",nom);
console.log("prix: ",prix);
console.log("quantite: ",quantite);
console.log("totale: ",prix*quantite);


