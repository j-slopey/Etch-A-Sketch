function getBoardSize() {
    let userInput = +window.prompt("What would you like the grid dimensions to be?", "16");
    while( userInput > 100 || userInput < 2 || !Number.isInteger(userInput)){
        userInput = +window.prompt("Grid dimension must be a single integer smaller than 100 and greater than 2", "16");
    }
    return userInput;
}

function drawBoard(size) {
    const board = document.querySelector("#board");
    board.innerHTML = '';
    const rowModel = document.createElement("div");
    const squareModel = document.createElement("div");
    rowModel.classList.add("row");
    squareModel.classList.add("square");

    for(let i = 0; i < size; i++){

        rowModel.appendChild(squareModel.cloneNode(true));
    }

    for(let i = 0; i < size; i++){

        board.appendChild(rowModel.cloneNode(true));
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach( (square) => {
        square.addEventListener("mouseover",(e) => e.target.style.opacity = +e.target.style.opacity + 0.1 );
    })
}

let boardSize = getBoardSize();
drawBoard(boardSize);

const resetButton = document.querySelector("#clear");
resetButton.addEventListener("click", () => {
    boardSize = getBoardSize();
    drawBoard(boardSize);
});


