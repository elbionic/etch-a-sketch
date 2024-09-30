const buttonContainer = document.querySelector("#button-container");
const sketchContainer = document.createElement("div");
sketchContainer.id = "sketch-container";
const button = document.createElement("button");
const column = document.createElement("div");
const squareDiv = document.createElement("div");
const refreshContainer = document.getElementById("refresh-container");

button.textContent = "Press to enter the new grid size!";
button.id = "awesomeButton";
buttonContainer.appendChild(button);

let gridlength = 16;
let columns = rows = gridlength;
let currentSquareDiv = "squareDivId" + 1;
let mouseOverSquareDiv;
let input = 10;

button.addEventListener("click", refreshGrid);

function getRandomRGB() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

function createGrid(gridlength) {
    refreshContainer.appendChild(sketchContainer);
    let value = 1;
    let notANumber = "squareDivId";
    for (let i = 0; i < gridlength; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < gridlength; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareDiv");
            squareDiv.id = currentSquareDiv;
            currentSquareDiv = notANumber + ++value;
            column.appendChild(squareDiv);
        }
        sketchContainer.appendChild(column);
    }
}

createGrid(gridlength);

// Listen for where the mouse pointer is currently and return the ID of the squareDiv
window.addEventListener('mouseover', (e) => {
    const {
        clientX: x,
        clientY: y
    } = e
    const elementMouseIsOver = document.elementFromPoint(x, y);
    let currentElementId = elementMouseIsOver.id;
    currentElementId = currentElementId.toString()
    let myCurrentSquareDiv = document.getElementById(currentElementId);
    console.log(currentElementId);
    if (currentElementId === null || currentElementId === "sketch-container" ||
        currentElementId === "button-container" || currentElementId === "body" ||
        currentElementId === "html" || currentElementId === "awesomeButton") {
        console.log("Don't change a thing");
    } else {
        myCurrentSquareDiv.style.backgroundColor = getRandomRGB();
    }
})

function removeSquareDivs() {
    let squareDivsToRemove = document.getElementsByClassName("squareDiv");
    for (let i = squareDivsToRemove.length - 1; i >= 0; i--) {
        squareDivsToRemove[i].remove();
    }
}

function removeColumns() {
    let columnDivsToRemove = document.getElementsByClassName("column");
    console.log(columnDivsToRemove);
    for (let i = columnDivsToRemove.length - 1; i >= 0; i--) {
        columnDivsToRemove[i].remove();
    }
}

function removeOldGrid() {
    removeSquareDivs();
    removeColumns();
    refreshContainer.removeChild(sketchContainer);
}

function refreshGrid() {
    removeOldGrid();
    input = parseInt(prompt("Only positive numbers < 100, digits after decimalpoint are cut off!: ", "1"), 10);
    createGrid(inputCheck(input));
}

function inputCheck(input) {
    let defaultValue = 16;
    if (typeof (input) != 'number') {
        alert("ERROR_1: please only positive whole numbers as input, anything after a decimalpoint will be cut off! -> defaultGrid");
        input = defaultValue;
        return input;
    } else if (Number.isInteger(input) == false) {
        alert("ERROR_2: please only positive whole numbers as input, anything after a decimalpoint will be cut off! -> defaultGrid");
        input = defaultValue;
        return input;
    } else if (input <= 0) {
        alert("ERROR_3: You have typed in zero or a negative number! -> defaultGrid");
        input = defaultValue;
        return input;
    } else if (input > 100) {
        alert("ERROR_4: You're iput was greater than 100.99...! -> defaultGrid");
        input = defaultValue;
        return input;
    } else {
        return input;
    }
}










