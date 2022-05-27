const playerOneName = document.querySelector('#playerOne');
const playerTwoName = document.querySelector('#playerTwo');

const player = (domNode, symbol) => {
    return { domNode, symbol };
};

const playerOne = player(playerOneName, 'X');
const playerTwo = player(playerTwoName, 'O');

const gameBoard = (() => {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    return gameBoard;
})();

const gameDisplay = (() => {
    const grid = document.querySelectorAll('.gameGrid');
    let player = playerOne;
    let secPlayer = playerTwo;
    player.domNode.classList.toggle('selected');

    grid.forEach(g => {
        g.addEventListener('click', () => {
            if(gameBoard[g.id] == '')
            {
                gameBoard.splice(g.id, 1, player.symbol)
                g.textContent = gameBoard[g.id];
                player.domNode.classList.toggle('selected');
                secPlayer.domNode.classList.toggle('selected');
                endGame.pushArray(g.id);

                if(player == playerOne)
                {
                    player = playerTwo;
                    secPlayer = playerOne;
                }
                else if(player == playerTwo)
                {
                    player = playerOne;
                    secPlayer = playerTwo;
                }
            }
        })
    });
})();

const btnsWork = (() => {
    const changeName = document.querySelector('#changeName');
    const resetBtn = document.querySelector('#reset');
    const player1 = document.querySelector('#playerOne');
    const player2 = document.querySelector('#playerTwo');
    const grid = document.querySelectorAll('.gameGrid');

    changeName.onclick = function(){ 
        let p1 = prompt('Player 1');
        let p2 = prompt('Player 2');

        if(p1 == '' || p2 == '')
        {
            alert("Input can't be empty");
        }
        else
        {
            player1.textContent = p1;
            player2.textContent = p2;
        }
    };

    resetBtn.onclick = () =>{
       resetGame();
    }

    return {player1, player2}
})();

const endGame = (() => {
    gameCheckOne = [];
    gameCheckTwo = [];
    const resultCheck = [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '4', '8'],
        ['2', '4', '6'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
    ];
    let counter = 0;

    const pushArray = (num) => {
        if(gameBoard[num] == 'X')
        {
            gameCheckOne.push(num);
            endGame.counter++;
            for(r in resultCheck)
            {
                if(compareResults(resultCheck[r], gameCheckOne))
                {
                    alert(`${btnsWork.player1.textContent} Wins!`);
                    resetGame();
                    return
                }
            }
        }
        
        else if(gameBoard[num] == 'O')
        {
            gameCheckTwo.push(num);
            endGame.counter++;
            for(r in resultCheck)
            {
                if(compareResults(resultCheck[r], gameCheckTwo))
                {
                    alert(`${btnsWork.player2.textContent} Wins!`);
                    resetGame();
                    return
                }
            }
        }

        if(endGame.counter == 9)
        {
            alert("It's a tie!");
            resetGame();
        }

    }

return { pushArray, gameCheckOne, gameCheckTwo, counter };
})();

const compareResults = (a, b) => {
    const found = a.every(r => b.includes(r));
    return found;
}

const resetGame = () => {
    const grid = document.querySelectorAll('.gameGrid');

    for(space in gameBoard)
    {
        gameBoard[space] = '';
    }

    grid.forEach(g => {
         g.textContent = '';
     });

     endGame.counter = 0;
     gameCheckOne.length = 0;
     gameCheckTwo.length = 0;
 };
