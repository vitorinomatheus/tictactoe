const player = (symbol) => {
    return symbol;
};

const playerOne = player('X');
const playerTwo = player('O');

const gameBoard = (() => {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    return gameBoard;
})();

const gameFlow = (() => {
    const grid = document.querySelectorAll('.gameGrid');
    grid.forEach(g => {
        g.addEventListener('click', () => {
            if(gameBoard[g.id] == '')
            {
                gameBoard.splice(g.id, 1, 'O')
                g.textContent = gameBoard[g.id];
            }
        })
    });
})();
