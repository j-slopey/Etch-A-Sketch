
const boardSize = 16;
const board = document.querySelector("#board");
const rowModel = document.createElement("div");
const squareModel = document.createElement("div");
rowModel.classList.add("row");
squareModel.classList.add("square");

for(let i = 0; i < boardSize; i++){

    rowModel.appendChild(squareModel.cloneNode(true));
}

for(let i = 0; i < boardSize; i++){

    board.appendChild(rowModel.cloneNode(true));
}

const squares = document.querySelectorAll(".square");
squares.forEach( (square) => {
    square.addEventListener("mouseover",(e) => e.target.style.background = "black" );
})

const resetButton = document.querySelector("#clear");
resetButton.addEventListener("click", () => squares.forEach((square) => square.style.background = "transparent"));

