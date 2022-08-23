// 1. Create a multidimensional array to hold quiz questions and answers

//question, answer
const quiz = [
  [`What color is the sun of the Philippine Flag?`,`Yellow`],
  [`True or false: February is the only month that has 28 days`,`False`],
  [`How many days are there in a week?`,`7`]
];

// 2. Store the number of questions answered correctly
let score = 0;
let correct =[];
let wrong =[];

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for(let i = 0; i < quiz.length; i++){
  let answer = prompt(quiz[i][0]);
  if (answer.toLowerCase() === quiz[i][1].toLowerCase()){
    score++;
    correct.push(`<li>${quiz[i][0]}</li>`);
    console.log(correct);
  } else {
    wrong.push(`<li>${quiz[i][0]}</li>`);
    console.log(wrong);
  }
}


// 4. Display the number of correct answers to the user
document.querySelector('main').innerHTML = `<h1>You have correctly answered <strong>${score}</strong> questions out of ${quiz.length}.</h1>

<h2>You got these questions right:</h2>
<ol>
${correct.join('<br>')}
</ol>
<h2>You got these questions wrong:</h2>
<ol>
${wrong.join('<br>')}
</ol>
`;