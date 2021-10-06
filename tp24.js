function InscriptionEtudiant(nom, prenom, age, genre, pays, option, cours) {
  this.nom = nom;

  this.prenom = prenom;

  this.age = age;

  this.genre = genre;

  this.pays = pays;

  this.option = option;

  this.cours = cours;
}

/*const etudiants = [];
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
  }*/
//recuperation des informations du formulaire
const nomInput = document.querySelector("#nom");
const prenomInput = document.querySelector("#prenom");
const ageInput = document.querySelector("#age");
const genreInput = document.querySelector("#genre");
const paysInput = document.querySelector("#pays");
const optionInput = document.querySelector("#option");
const listeCoursInput = document.querySelector("#listeCours");

const codeErrChampsVide = document.querySelector("#err-champsV");

const form = document.querySelector("#form");

const tabEtudiant = document.querySelector("#tabEtudiant");

const titreFormulaire = document.createElement("h1");

titreFormulaire.innerText = "Formulaire d'inscription";

//inserer titre avant le formulaire
form.before(titreFormulaire);
//Creation du tableau
let tableauxDesInscriptions = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    nomInput.value == " " ||
    prenomInput.value == " " ||
    ageInput.value == " " ||
    genreInput.value == " " ||
    paysInput.value == " " ||
    optionInput.value == " " ||
    listeCoursInput.value == " "
  ) {
    codeErrChampsVide.innerText = "Veuillez remplir tous les champs";
    codeErrChampsVide.classList.add("text-red");
  } else {
    const tr = document.createElement("tr");

    const nom = document.createElement("td");
    nom.innerText = nomInput.value;

    const prenom = document.createElement("td");
    prenom.innerText = prenomInput.value;

    const age = document.createElement("td");
    age.innerText = ageInput.value;

    const genre = document.createElement("td");
    genre.innerText = genreInput.value;

    const pays = document.createElement("td");
    pays.innerText = paysInput.value;

    const option = document.createElement("td");
    option.innerText = optionInput.value;

    const listeCours = document.createElement("td");
    listeCours.innerText = listeCoursInput.value;
    tabEtudiant.append(tr);
    tr.append(nom, prenom, age, pays, genre, option, listeCours);

    //Ajout dans le tableau les inscriptions
    tableauxDesInscriptions.push(
      new InscriptionEtudiant(
        nomInput.value,
        prenomInput.value,
        ageInput.value,
        genreInput.value,
        paysInput.value,
        optionInput.value,
        listeCoursInput.value
      )
    );

    nomInput.value = " ";
    prenomInput.value = " ";
    ageInput.value = " ";
    genreInput.value = " ";
    paysInput.value = " ";
    optionInput.value = " ";
    listeCoursInput.value = " ";

    console.log(tableauxDesInscriptions);
  }
});
