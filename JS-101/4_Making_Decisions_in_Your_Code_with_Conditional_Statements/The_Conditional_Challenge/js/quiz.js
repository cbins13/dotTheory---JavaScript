/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

// 2. Store the rank of a player

// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

// 6. Output results to the <main> element

let score = 0;
const question1 = prompt("What city is the Summer Capital of the Philippines?");
if (question1.toLowerCase() === "baguio") {
  score += 1;
}

const question2 = prompt("What color is the sky?");
if (question2.toLowerCase() === "blue") {
  score += 1;
}

const question3 = prompt("Who is the greatest basketball player ever?");
if (question3.toLowerCase() === "michael jordan") {
  score += 1;
}

const question4 = prompt(
  "What is the name of the programming language named after the British comedy group Monty Python?"
);
if (question4.toLowerCase() === "python") {
  score += 1;
}

const question5 = prompt("During what month is Christmas celebrated?");
if (question5.toLowerCase() === "december") {
  score += 1;
}

let rank = "";
switch (score) {
  case 0:
    rank = "No crown";
    break;
  case 1:
    rank = "Bronze";
    break;
  case 2:
    rank = "Bronze";
    break;
  case 3:
    rank = "Silver";
    break;
  case 4:
    rank = "Silver";
    break;
  case 5:
    rank = "Gold";
    break;
}

const results = `<h1> You got ${score} out of 5 questions correct.</h1> <br>
<p> Crown earned: <strong>${rank}</strong> </p>`;
document.querySelector('main').innerHTML = results;