// // Create a reference to the HTML Objects
const buttonContainer = document.querySelector("#button-container");
const sketchContainer = document.createElement("div");
sketchContainer.id = "sketch-container";
const button = document.createElement("button");
const column = document.createElement("div");
const squareDiv = document.createElement("div");
const refreshContainer = document.getElementById("refresh-container");


button.textContent = "Press to enter the new grid size!"
buttonContainer.appendChild(button);

let gridlength = 16;
let columns = rows = gridlength;
let currentSquareDiv = "squareDivId" + 1;
let mouseOverSquareDiv;

function createGrid(gridlength) {
    refreshContainer.appendChild(sketchContainer);
    //     let arr = [];
        let value = 1;
        let notANumber = "squareDivId";
    for (let i = 0; i < gridlength; i++) {
        // This for loop creates the amount of rows
        // specified in the function argument rows
        // and assignes an empty array for each row
        const column = document.createElement("div");
        column.classList.add("column");
        // arr[i] = [];
        // The following for loop creates the columns, it does so
        // row by row, so it starts at row index 0 and populates
        // this row until it is at the last specified column
        for (let j = 0; j < gridlength; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareDiv");
            squareDiv.id = currentSquareDiv;
            currentSquareDiv = notANumber + ++value;
            column.appendChild(squareDiv);
            // arr[i][j] = createColumn();
        }
        sketchContainer.appendChild(column);
    }
}

createGrid(columns, rows);

button.addEventListener("click", refreshGrid);

// FIX please
function removeOldGrid () {
    refreshContainer.removeChild(sketchContainer);
}

// FIX please
function refreshGrid() {
    removeOldGrid()
    let refreshedGridlength = prompt("Please enter a gridlength! Maximaler Value: 100");
    refreshedGridlength = +refreshedGridlength;
    console.log(refreshedGridlength);
    createGrid(refreshedGridlength);
    return;
}

// Listen for where the mouse pointer is currently and return the ID if the squareDiv
window.addEventListener('mouseover', (e) => {
    const {
      clientX: x,
      clientY: y
    } = e
    const elementMouseIsOver = document.elementFromPoint(x, y);
    let currentElementId = elementMouseIsOver.id;
    currentElementId = currentElementId.toString()
    console.log(currentElementId);
    let myCurrentSquareDiv = document.getElementById(currentElementId);
    myCurrentSquareDiv.style.backgroundColor = "blue";
    return currentElementId
  })







