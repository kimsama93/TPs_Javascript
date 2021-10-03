let identifiant = prompt("Veuillez définir votre identifiant");
let mdp = prompt("Veuillez définir votre mot de passe");

let identifiantSaisi = "";
let mdpSaisi = "";

while (identifiant != identifiantSaisi || mdp != mdpSaisi) {
  identifiantSaisi = prompt("Veuillez saisir votre email");
  mdpSaisir = prompt("Veuillez saisir votre mot de passe");

  if (identifiant != identifiantSaisi && mdp != mdpSaisi) {
    alert("Bienvenue dans votre espace client");
  } else {
    alert("identifiants incorrects, veuillez recommencer");
  }
}
