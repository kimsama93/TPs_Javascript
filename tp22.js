function InscriptionEtudiant(nom, prenom, age, genre, pays, option, cours) {
  this.nom = nom;

  this.prenom = prenom;

  this.age = age;

  this.genre = genre;

  this.pays = pays;

  this.option = option;

  this.cours = cours;
}

const etudiants = [];
let nbrEtudiants = parseInt(prompt("Nombre d'étudiants à inscrire ? "));

for (let i = 1; i <= nbrEtudiants; i++) {
  const nom = prompt("Nom : ");

  const prenom = prompt("Prénoms : ");

  const age = parseFloat(prompt("age : "));

  const genre = prompt("Genre: ");

  const pays = prompt("Pays : ");

  const option = prompt("Option: ");

  const nbrCours = prompt("Nombre de cours :");

  const listeCours = [];

  for (let j = 0; j < nbrCours; j++) {
    listeCours.push(prompt("Entrez les cours suivis :"));
  }

  const etudiant = new InscriptionEtudiant(
    nom,
    prenom,
    age,
    genre,
    pays,
    option,
    listeCours
  );

  etudiants.push(etudiant);
}

// 3 - Affichage dans le site internet : simple

for (let i = 0; i < etudiants.length; i++) {
  console.log(etudiants[i]);
}

// liste et nombre de chinoises
const chinoises = [];
var nbrChinoises = 0;
for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].pays === "Chine" && etudiants[i].genre === "F") {
    chinoises.push(etudiants[i]);
    nbrChinoises++;
  }
}

console.log("Liste des femmes chinoises");
console.log(+chinoises);
console.log("Le nombre des femmes chinoises est " + nbrChinoises);

//Afficher liste des prénoms finissant par a

const PrenomFinA = [];
for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].prenom[etudiants[i].prenom.length - 1] === "a") {
    PrenomFinA.push(etudiants[i]);
  }
}
console.log("Liste des personnes dont les prénoms se terminent par “a”");
console.log(PrenomFinA);

//Liste de tous les noms

const noms = [];

for (let i = 0; i < etudiants.length; i++) {
  noms.push(etudiants[i].nom);
}

console.log(+noms);

// liste de tous les hommes russes

const russes = [];

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].pays === "Russie" && etudiants[i].genre === "H") {
    russes.push(etudiants[i]);
  }
}

console.log("Liste des hommes Russes");
console.log(+russes);

//liste de toutes les femmes dont le nom commence par K

const debutNomKfemme = [];

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].nom[0] === "K" && etudiants[i].genre === "F") {
    debutNomKfemme.push(etudiants[i]);
  }
}
console.log("Liste des femmes dont le prénom commence par K ");
console.log(+debutNomKfemme);

//liste de tous les hommes dont le nom commence par M

const debutNomMhomme = [];
for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].nom[0] === "M" && etudiants[i].genre === "H") {
    debutNomMhomme.push(etudiants[i]);
  }
}
console.log("La liste des hommes dont le nom commence par M est ");
console.log(+debutNomMhomme);

InscriptionEtudiant.prototype.changerNom = function (nouveauNom) {
  return (this.nom = nouveauNom);
};

InscriptionEtudiant.prototype.changerPrenom = function (nouveauPrenom) {
  return (this.prenom = nouveauPrenom);
};

InscriptionEtudiant.prototype.changerOption = function (nouvelleOption) {
  return (this.option = nouvelleOption);
};

//test fonctionnement après changement

etudiants[1].changerPrenom("salma");
etudiants[1].changerNom("histane");
etudiants[1].changerOption("sciences");
for (let i = 0; i < etudiants.length; i++) {
  console.log(etudiants[i]);
}

/*const etudiants = [
  {
    id: 1,

    nom: "Lisangola",

    prenom: "Christian",

    pays: "Russie",

    genre: "M",
  },

  { id: 2, nom: "Histane", prenom: "Salma", pays: "Russie", genre: "F" },

  { id: 3, nom: "Bossard", prenom: "Benjamin", pays: "France", genre: "M" },
];

const russes = [];

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].pays === "Russie") {
    russes.push(etudiants[i]);
  }
}*/
