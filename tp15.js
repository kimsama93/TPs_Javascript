//Remplissage des arrays
const tailleListe = parseInt(
  prompt("Veuillez entrer la taille de la première et deuxième liste ")
);

const liste1 = [];
const liste2 = [];
const listeResultat = [];

for (let i = 0; i < tailleListe; i++) {
  liste1.push(parseInt(prompt("Veuillez saisir un nombre de la liste 1: ")));
  liste2.push(parseInt(prompt("Veuillez saisir un nombre de la liste 2: ")));
  listeResultat.push(liste1[i] + liste2[i]);
}

console.log("La première liste est Liste1 = [" + liste1 + "]");

console.log("La première liste est Liste2 = [" + liste2 + "]");

console.log("La liste résultante est Result = [" + listeResultat + "]");
