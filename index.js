const container = document.querySelector(".container");
const screen = document.querySelector(".sketch-screen");
const clearButton = document.querySelector("#clearButton");

function makeGrids(size) {
  screen.innerHTML = ""; // Clear the grid
  screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  screen.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("row");
    screen.appendChild(cell);
  }
}

function clearGrid() {
  let number = prompt("How many squares per side for the new grid? (1-100)");

  if (number && number >= 1 && number <= 100) {
    makeGrids(number);
  } else if (number !== null) {
    alert("Please enter a valid number between 1 and 100!");
    clearGrid(); // Retry if input is invalid
  }
}

// Initialize default grid
window.onload = () => makeGrids(16);

// Clear grid on button click
clearButton.addEventListener("click", clearGrid);