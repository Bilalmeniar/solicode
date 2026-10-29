let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
 
let totalventes = 0;
let chiffreAffaire = 0;
let max = ventes[0];
let min = ventes[0];
let nbExceptionnelle = 0;
let caExceptionnel = 0;
 
for (let i = 0; i < ventes.length; i++){
    let vente = ventes[i];
    totalventes++;
    chiffreAffaire += vente;

    if (vente > max) {
        max = vente;
    }
    if (vente < min){
        min = vente;
    }
    if (vente >= 130){
        nbExceptionnelle++;
        caExceptionnel += vente;
    }
}

console.log("nombre totale de vente :", totalventes );
console.log("chiffre d'affaire totale :", chiffreAffaire );
console.log("vente maximale :", max );
console.log("vente minimal :", min);
console.log("nombre de ventes nbExceptionnelles :", nbExceptionnelle); 
console.log("ca des ventes exceptionnel :", caExceptionnel ); 