let identifiant = prompt("Veuillez définir votre identifiant");
let mdp = prompt("Veuillez définir votre mot de passe");
let nbrDecnx = 0;

let identifiantSaisi = "";
let mdpSaisi = "";

while (identifiant != identifiantSaisi || mdp != mdpSaisi) {
  identifiantSaisi = prompt("Veuillez saisir votre email");
  mdpSaisir = prompt("Veuillez saisir votre mot de passe");

  nbrDecnx++;

  if (identifiant != identifiantSaisi || mdp != mdpSaisi) {
    alert("identifiants incorrects, veuillez recommencer");
  } else {
    alert("Bienvenue dans votre espace client ! ");
  }

  if (nbrDecnx == 5) {
    alert("Votre compte est bloqué ! ");
    break;
  }
}
