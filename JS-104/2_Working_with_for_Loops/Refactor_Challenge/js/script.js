let html= "";

const randomVal = () => {
    return Math.floor(Math.random() * 256);
}

const randomRGB = (val) => {
    return `rgb(${val()},${val()},${val()})`
}

for (let i = 1; i <= 10; i++) {
  html += `<div style="background-color: ${randomRGB(randomVal)}">${i}</div>`;
}

document.querySelector("main").innerHTML = html;
