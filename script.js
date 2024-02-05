let inputAdults = document.getElementById('adults');
let inputChildren = document.getElementById('children');
let inputDuration = document.getElementById('duration');

let result = document.getElementById('result');

function calculate() {
  console.log('Calculating...');

  let adults = inputAdults.value;
  let children = inputChildren.value;
  let duration = inputDuration.value;

  let totalMeat = meatPerPerson(duration) * adults + (meatPerPerson(duration) / 2) * children;
  let totalBeer = beerPerPerson(duration) * adults;
  let totalDrinks = drinksPerPerson(duration) * adults + (drinksPerPerson(duration) / 2) * children;

  result.innerHTML = `<h2>You will need to:</h2>`;
  result.innerHTML += `<p class="meet"><img src="./meat.png " alt="Meat Image"> ${totalMeat / 1000} Kgs of Meat</p>`;
  result.innerHTML += `<p class="beer"><img src="./beer.png" alt="Beer Image"> ${Math.ceil(
    totalBeer / 355
  )} Beer Cans</p>`;
  result.innerHTML += `<p class="soda"><img src="./soda.png" alt="Soda Image"> ${Math.ceil(
    totalDrinks / 2000
  )} Plastic Bottles (2L) Of Drinks </p>`;
}

function reset() {
  inputAdults.value = '';
  inputChildren.value = '';
  inputDuration.value = '';
  result.innerHTML = '';
}

function meatPerPerson(duration) {
  return duration >= 6 ? 650 : 400;
}

function beerPerPerson(duration) {
  return duration >= 6 ? 2000 : 1200;
}

function drinksPerPerson(duration) {
  return duration >= 6 ? 1500 : 1000;
}
