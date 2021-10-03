let n = parseInt(prompt("Veuillez entrer un nombre"));

for (let i = 1; i <= n; i++) {
  let mod1 = i % 5;
  let mod2 = i % 3;
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else if (`${mod1}` == 0) {
    console.log("buzz");
  } else if (`${mod2}` == 0) {
    console.log("fizz");
  } else {
    console.log(`${i}`);
  }
}
