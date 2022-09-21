/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

// Call the function and pass it different values
lowerNum = prompt("Enter a lower limit: ");
upperNum = prompt("Enter an upper limit: ");

const randomNum = (lower,upper) => {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

document.querySelector('main').innerHTML =
`<p>The random number <strong>${randomNum(parseInt(lowerNum), parseInt(upperNum))}</strong> is a number generated between ${lowerNum} and ${upperNum}</p>`;
