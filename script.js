let count = 0;

const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decrementButton.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});
