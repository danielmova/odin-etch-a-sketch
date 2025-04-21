pixelsContainerJs = document.querySelector(".pixelsConteiner");

const gridContainer = 350;
let gridPixelSize = 16;

const individualRow = document.createElement("div");
const individualColumn = document.createElement("div");

function generateGrid(gridSize){
  pixelsContainerJs.innerHTML = "";
    for (i = 0; i < gridPixelSize; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        pixelsContainerJs.appendChild(row);
        for (j = 0; j < gridPixelSize; j++) {
          const cell = document.createElement("div");
          row.appendChild(cell);
          cell.style.width = `${(gridContainer/gridPixelSize-2)}px`;
          cell.style.height = `${(gridContainer/gridPixelSize -2)}px`;
          cell.style.border = "1px solid grey";
          cell.style.background = "white";
          cell.addEventListener("mouseenter", (event) => {cell.style.background ="blue"});
      }
    }
}

generateGrid(gridPixelSize);

function changeGridPixelSize(){
  var answer = prompt("Enter a number between 1 and 100:");
  while (!/^[0-9]+$/.test(answer) || answer < 1 ||answer >100) {
      alert("Invalid answer, try again.");
      answer = prompt("Enter a number between 1 and 100:");
  }
  gridPixelSize = answer;
  generateGrid(gridPixelSize);

}