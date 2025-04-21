pixelsContainerJs = document.querySelector(".pixelsConteiner");

const gridContainer = 500;
let gridPixelSize = 10;

const individualRow = document.createElement("div");
const individualColumn = document.createElement("div");

function generateGrid(gridSize){
    for (i = 0; i < gridPixelSize; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        pixelsContainerJs.appendChild(row);
        for (j = 0; j < gridPixelSize; j++) {
          const cell = document.createElement("div");
          row.appendChild(cell);
          cell.style.width = `${(gridContainer/gridPixelSize)}px`;
          cell.style.height = `${(gridContainer/gridPixelSize)}px`;
          cell.style.border = "1px solid white";
          cell.style.display = "flex";
          cell.style.background = "red";
      }
    }
}

generateGrid(gridPixelSize);