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
    makeGrids(16);