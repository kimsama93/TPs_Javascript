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
