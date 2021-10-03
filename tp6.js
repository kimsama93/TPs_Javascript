let nbr = "";
while (nbr < 1 || nbr > 3) {
  alert("veuillez saisir un nombre compris entre 1 et 3");
  nbr = prompt("Veuillez saisir un nombre");
  if (nbr < 1 || nbr > 3) {
    alert("nombre entré est incorrect, réessayez");
  } else alert("Nombre correct ! ");
}
