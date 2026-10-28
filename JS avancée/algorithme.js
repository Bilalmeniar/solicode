

let nombres = [23, 15, 42, 9, 31, 18, 42, 5];
let maximum = nombres[0];
let positionmax = -1;


for (i = 0; i < nombres.length; i++){
    if(nombres[i] > maximum){
        maximum = nombres[i];
      positionmax = i;
    }
}
console.log("maximum :", maximum)
console.log("position du maximum :", positionmax)

let minmum = nombres[0];
let positionmin = -1;

for (let i = 0; i < nombres.length; i++){
    if(nombres[i] < minmum){
        minmum = nombres[i];
        positionmin = i
    }
}

console.log("minimum :", minmum)
console.log("position du minimum :", positionmin)

let recherche = 31;
let positionRecherche = -1;


for (let i = 0; i < nombres.length; i++){
    if (nombres[i] === recherche){
        positionRecherche = i;
    }
}
if (positionRecherche !== -1) {
    console.log(recherche, "est présent à la position", positionRecherche)}
else{console.log(recherche, "n'est pas présent dans le tableau")}





