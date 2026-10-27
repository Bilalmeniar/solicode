let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
for (let i = 0; i < jours.length; i++){
    console.log("jour de la semaine :", jours[i]);
}
let couleurs = ["rouge", "vert", "bleu", "jaune", "orange", "violet"]
for (i = couleurs.length - 1; i >= 0; i -=2){
    console.log(couleurs[i]);
}
let sequence = ["Ignition", 1, 2, 3, 4, 5, "préparation"];
for (i = sequence.length - 1; i >= 0; i--){
    console.log(sequence[i]);
}
console.log("Décolage !")