// // Create a reference to the HTML Objects
const container = document.querySelector("#container");
const button = document.createElement("button");






let matrix = [];

let row = 16;
let colum = 16;

for (var i = 1; i <= row; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    matrix[i] = [];
    for (var j = 1; j <= colum; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        row.appendChild(squareDiv);
        matrix[i][j] = (i*colum)+j+1;
    }
}


container.appendChild(button);



