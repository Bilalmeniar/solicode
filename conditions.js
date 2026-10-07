for (let nombre = 1; nombre <= 20; nombre++){
  if (nombre % 2 === 0) {console.log(nombre)}
}

let somme = 0;
for (let i = 1; i <= 10; i++) {
  somme += i;
}console.log(somme)

let compteur = 0;
let somme2 = 0;
for (let nombre = 1; nombre <= 20; nombre++) {
  if (nombre % 2 === 0) {
    compteur++;
    somme2 += nombre;}
  }
  
  console.log("nombre de paires: " +compteur);
  console.log("somme de paires; " +somme2);

