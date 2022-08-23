/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

pets = [
  {
    name: "Queenie",
    type: "Dog",
    breed: "Australian Shepherd",
    age: 2,
    photo: "aussie",
  },
  {
    name: "Rembrandt",
    type: "Dog",
    breed: "Dachshund",
    age: 4,
    photo: "dachshund",
  },
  {
    name: "Max",
    type: "Dog",
    breed: "Golden Retriever",
    age: 2,
    photo: "golden",
  },
  {
    name: "Joey",
    type: "Cat",
    breed: "Persian",
    age: "5",
    photo: "persian",
  },
  {
    name: "PogChamp",
    type: "Dog",
    breed: "Pug",
    age: 12,
    photo: "pug",
  },
  {
    name: "Shie",
    type: "Cat",
    breed: "Tabby",
    age: 4,
    photo: "tabby",
  },
];

/* <h2>Joey</h2>
      <h3>Dog | Australian Shepherd</h3>
      <p>Age: 8</p>
      <img src="img/aussie.jpg" alt="Australian Shepherd"></img> */
let html = '';
for(let i in pets){
  const petObj = pets[i];
  const petVals = Object.values(petObj);
  html += `
  <h2>${petVals[0]}</h2>
    <h3>${petVals[1]} | ${petVals[2]}</h3>
    <p>Age: ${petVals[3]}</p>
    <img src="img/${petVals[4]}.jpg"
    alt="${2}"</img>
  `;
}

document.querySelector('main').innerHTML = html;
