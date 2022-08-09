// 1. Declare variables and capture input.
const adj = prompt("Enter an adjective: ");
const noun = prompt("Enter a noun: ");
const verb = prompt("Enter a verb: ");

// 2. Combine the input with other words to create a story.
const story = `I had to say to the ${noun} that it needed to ${verb} to become ${adj}`;

// 3. Display the story as a <p> inside the <main> element.
const htmlSnippet = `<p>${story}</p>`
document.querySelector('main').innerHTML = htmlSnippet;