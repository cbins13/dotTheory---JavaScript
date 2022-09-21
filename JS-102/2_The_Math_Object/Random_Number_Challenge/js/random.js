// Collect input from a user
// Convert the input to a number
const lowNum = parseInt(prompt("Enter a lower limit number: "));
const highNum = parseInt(prompt("Enter higher limit number: "));


// Use Math.random() and the user's number to generate a random number
const randomNum = Math.floor(Math.random() * (highNum - lowNum + 1)) + lowNum;

// Create a message displaying the random number
if(lowNum && highNum){
document.querySelector('main').innerHTML = `
<p>The number <strong>${randomNum}</strong> is a random number generated from ${lowNum} to ${highNum}</p>`;}
else{
document.querySelector('main').innerHTML = `Please enter a valid number!`;
}
