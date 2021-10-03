//Remplissage des arrays
const tailleTableau = parseInt(prompt("Veuillez entrer la taille du tableau"));

const tab = [];
for (let i = 0; i < tailleTableau; i++) {
  tab.push(prompt("Veuillez saisir un nombre : "));
}

let min = parseInt(tab[0]);
let max = parseInt(tab[1]);

for (let c = 0; c < tailleTableau; c++) {
  if (parseInt(tab[c]) < min) {
    min = parseInt(tab[c]);
  } else {
    min = min;
  }

  if (parseInt(tab[c]) > max) {
    max = parseInt(tab[c]);
  } else {
    max = max;
  }
}
console.log("le min du tableau est " + min);
console.log("le max du tableau est " + max);
