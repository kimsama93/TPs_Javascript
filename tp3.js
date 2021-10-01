const ageSaisi = prompt("Veuillez saisir votre age");

if (ageSaisi >= 7 && ageSaisi <= 9) {
  alert("Vous êtes un Poussin ! ");
} else if (ageSaisi >= 10 && ageSaisi <= 11) {
  alert("Vous êtes un Pupille ! ");
} else if (ageSaisi >= 12 && ageSaisi <= 13) {
  alert("Vous êtes un Benjamin ! ");
} else if (ageSaisi >= 14 && ageSaisi <= 15) {
  alert("Vous êtes un Minime ! ");
} else if (ageSaisi >= 14 && ageSaisi <= 15) {
  alert("Vous êtes un Cadet ! ");
} else {
  alert("Vous n'appartenez à aucune des ces catégories ");
}
