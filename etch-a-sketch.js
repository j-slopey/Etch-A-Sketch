
const boardSize = 16;
const board = document.querySelector("#board");
const row = document.createElement("div");
const square = document.createElement("div");
row.classList.add("row");
square.classList.add("square");
for(let i = 0; i < boardSize; i++){
    row.appendChild(square.cloneNode(true))
}

for(let i = 0; i < boardSize; i++){
    board.appendChild(row.cloneNode(true))
}