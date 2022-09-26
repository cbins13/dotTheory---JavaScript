// Complete the challenge by writing JavaScript below

const button = document.getElementById("btn-phrase");
const input = document.getElementById("input-phrase");
button.addEventListener("click", () => {
  alert(input.value);
});
