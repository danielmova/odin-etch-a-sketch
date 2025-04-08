pixelsContainerJs = document.querySelector(".pixelsConteiner");

let gridPixelSize = 10;

const individualRow = document.createElement("div");
const individualColumn = document.createElement("div");

function generateGrid(gridSize){
    for (i = 0; i < gridPixelSize; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        pixelsContainerJs.appendChild(row);
        for (j = 0; j < gridPixelSize - 1; j++) {
          const column = document.createElement("div");
          row.appendChild(column);
          column.style.width = "10px";
          column.style.height = "10px";
          column.style.marginLeft = "2px";
          column.style.marginTop = "2px";
          column.style.background = "white";
      }
    }
}

generateGrid(gridPixelSize);