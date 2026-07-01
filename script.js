const buttons = document.querySelectorAll("button[data-food]");
const suggestion = document.querySelector("#suggestion");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    suggestion.textContent = button.dataset.food;
  });
});
