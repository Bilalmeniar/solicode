let score = 14;
let seuil = 10;

console.log(score > seuil);
console.log(score === seuil);
console.log(score !== seuil);

let estValide = score >= seuil;
console.log(estValide);

let inscrit = false;
let paiment = true;

 let acces = score>= seuil && inscrit === true;
 console.log(acces);

 let entree = inscrit === true || paiment === true;
 console.log(entree);
 
 let age = 22;
 let inscrit2 = true;
 let paiment2 = false;

 console.log(age >= 18);
 console.log(inscrit2 === true);
 console.log(paiment2 === true);

 let acces2 = age>=18 && inscrit2 === true;
 console.log(acces2);

 let entree2 = inscrit2 === true || paiment2 === true;
 console.log(entree2);

 console.log(!paiment2);













