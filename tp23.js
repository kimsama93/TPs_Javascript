/*const mainForm = document.querySelector("#main__form");

const btnCalculer = document.querySelector("#btn-submit");

const diametreOutput = document.querySelector("#diametre");
const circOutput = document.querySelector("#circ");
const aireOutput = document.querySelector("#aire");

let rayon = 0;
let diametre = 0;
let circonference = 0;
let aire = 0;

mainForm.addEventListener("click", calculer);
function calculer(event) {
  event.preventDefault();
  rayon = document.querySelector("#rayon").value;
  diametre = rayon * 2;
  circonference = 2 * Math.PI * rayon;
  aire = Math.PI * rayon * rayon;

  diametreOutput.innerText = diametre;
  circOutput.innerText = circonference;
  aireOutput.innerText = aire;
}*/

const formCercle = document.querySelector("#main__form");

formCercle.addEventListener("click", function (e) {
  e.preventDefault();
  let rayon = document.querySelector("#rayon").value;
  document.querySelector("#diametre").value = rayon * 2;
  document.querySelector("#circ").value = 2 * 3.14 * rayon;
  document.querySelector("#aire").value = 3.14 * (rayon * rayon);
});
