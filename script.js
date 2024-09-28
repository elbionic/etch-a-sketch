// // Create a reference to the HTML Objects
const buttonContainer = document.querySelector("#button-container");
const sketchContainer = document.querySelector("#sketch-container");
const button = document.createElement("button");
button.textContent = "Press to enter the new grid size!"
buttonContainer.appendChild(button);

button.addEventListener("click", enterGridSize);

let matrix = [];

let row = 16;
let colum = 16;

// FIX ROW IS NOT REALLY ROW JET!

for (let i = 1; i <= row; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    sketchContainer.appendChild(row);
    matrix[i] = [];
    for (let j = 1; j <= colum; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        row.appendChild(squareDiv);
        matrix[i][j] = (i*colum)+j+1;
    }
}

function enterGridSize() {
    let input = prompt("Please enter a gridlength!");
}




