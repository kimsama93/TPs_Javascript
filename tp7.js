let nombre = "";

while (nombre < 10 || nombre > 20) {
  let nombre = prompt("Veuillez saisir un nombre entre 10 et 20");
  if (nombre > 20) {
    alert("plus petit ! ");
  } else if (nombre < 10) {
    alert("plus grand ! ");
  } else alert("Vous avez réussi !  ");
}
