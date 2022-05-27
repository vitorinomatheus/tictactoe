# tictactoe

The project's goal is to create a simple tic-tac-toe game. It's a part of Odin Project's Full Stack JavaScript curriculum.


1 - The 'player' object is a factory function, called afterwards to build both players objects;

2 - The 'gameBoard' module creates and return a array with 9 empty slots, that will be modified by other functions;

3 - The 'gameDisplay' module modifies the UI, putting the players' symbol in the selected board space, as well as keeping track of whose turn is it. It's second function modifies the 'gameBoard' array, following the board. It ends calling the 'pushArray' function, inside 'endGame' module.

4 - 'BtnsWork' simply implements the functionality of 'Change Names' and 'Reset' buttons.

5 - 'endGame' should keep track of both players' choices (pushing them into the respective arrays) and also of the game's round. It declares an array of all winning patterns and compares it with the players' choices array (by means of calling the 'compareResults' function).

6 - The 'compareResults' function simply compare arrays from 'endGame'.


PT-BR


1 - O objeto 'player' é uma função 'factory', chama posteriormente para construir os objetos de ambos jogadores;

2 - O módulo 'gameBoard' cria e retorna uma matriz com 9 espaços vazios, que irá ser modificada por outras funções;

3 - O módulo 'gameDisplay' modifica a UI, colocando os símbolos dos jogadores no espaço escolhido do tabuleiro, bem como acompanhando de quem é a vez de jogar. Sua segunda função é modificar a matriz do 'gameBoard', seguindo o o tabuleiro. Ele termina ao chamar a função 'pushArray', que esá dentro do módulo 'endGame'.

4 - 'BtnsWork' simplesmente implementa a funcionalidade dos botões 'Change Names' e 'Reset'

5 - 'endGame' deve acompanhar as escolhas de ambos os jogadores (alocando-as dentro de suas respectivas matrizes) bem como o turno do jogo. Ele também declara uma matriz com todos os padrões que garantem vitória, comparando-os com as matrizes das escolhas dos jogadores (através de uma chamada à função 'compareResults').

6 - A função 'compareResults' simplesmente compara as matrizes do 'endGame'.