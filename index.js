let container = document.querySelector(".container"); 
let screen = document.querySelector(".sketch-screen");
const buttons = document.querySelector('#clearButton');

function makeGrids(size) {
    for (let i = 0; i < size; i++) {
      let column = document.createElement("div");
      column.classList.add("column");
      for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "2px solid black";
        row.innerText = (i * size) + j;
        column.appendChild(row);
      }
      screen.appendChild(column);
     }

    } 


    function clearGrid(){
      let number = prompt("How many squares per side for the new grid?")
      if(number >= 1 && number <= 100){
        while (screen.hasChildNodes()) {
          screen.removeChild(screen.lastChild); // removes all grid squares
      }
        makeGrids(number)
  } else {
    alert("choose a number between 1-100");
  }
}
window.onload = makeGrids(16);