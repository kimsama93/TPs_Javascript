let nombreInitial = prompt("Veuillez saisir le premier nombre à multiplier");
let nombreFinal = prompt("Veuillez saisir le dernier nombre à multiplier");
let depart = prompt("Veuillez saisir le nombre de départ");
let final = prompt("Veuillez saisir le nombre final");
let i = 0;
let j = 0;

for (i = nombreInitial; i <= nombreFinal; i++) {
  for (j = depart; j <= final; j++) {
    let produit = i * j;
    console.log(`${i} x ${j} = ${produit}`);
  }
  console.log("  ");
}
