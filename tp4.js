let identifiant = prompt("Veuillez définir votre email");
let mdp = prompt("Veuillez définir votre mot de passe");

let identifiantSaisi = "";
let mdpSaisi = "";

while (identifiant != identifiantSaisi || mdp != mdpSaisi) {
  identifiantSaisi = prompt("Veuillez saisir votre email");
  mdpSaisi = prompt("Veuillez saisir votre mot de passe");

  if (identifiant != identifiantSaisi || mdp != mdpSaisi) {
    alert("identifiants incorrects, veuillez recommencer");
  } else {
    alert("Bienvenue dans votre espace client ! ");
  }
}
