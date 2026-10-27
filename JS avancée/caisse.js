let mots = ["chat", "ordinateur", "table", "programmation", "js"];
let motslongs = 0;
for (let i = 0; i <= mots.length - 1 ; i++){
    if(mots[i].length >= 5){ 
        motslongs++;
    }
}
console.log(motslongs)

let nombres = [4, 7, 2, 9, 5, 9];
let sommepairs = 0;
 for (i = 0; i < nombres.length; i++){
    if (nombres[i] % 2 === 0){
        sommepairs += nombres[i];
    }
 }
 console.log("nombres des pairs :", sommepairs)
  
 let paniers = [15, 42, 5, 89, 12, 50, 8];
 let sommearticles = 0;/**On déclare la variable somme en dehors de la boucle pour qu’elle conserve sa valeur à chaque itération 
 et qu’on puisse accumuler progressivement la somme totale */
 for (let i = 0; i < paniers.length; i++){
    if(paniers[i] >= 20){
        sommearticles += paniers[i];
    }
 }
 console.log("lasomme totale des articles chers :", sommearticles)

