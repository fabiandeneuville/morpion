let currentPlayer = "X";

const currentGame = ['','','','','','','','',''];

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let lock = false;

const info = document.querySelector('.info');

info.textContent = `Au tour du joueur ${currentPlayer}`;

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', handleClick)
});    


function handleClick(e){
    const clickedBox = e.target
    const boxIndex = clickedBox.getAttribute('data-index');
    if(currentGame[boxIndex] !== "" || lock === true){
        return
    } else {
        currentGame[boxIndex] = currentPlayer;
        clickedBox.textContent = currentPlayer;
        verification();
    }
}   

function verification(){
    for (let i = 0 ; i < winningCombinations.length ; i++){
        const combinationToCheck = winningCombinations[i];

        let a = currentGame[combinationToCheck[0]]
        let b = currentGame[combinationToCheck[1]]
        let c = currentGame[combinationToCheck[2]]

        if(a === "" || b === "" || c === ""){
            continue;
        } else if (a === b && b === c){
            info.textContent = `Le joueur ${currentPlayer} a gagné. Appuyez sur F5 pour recommencer.`;
            lock = true;
            return;
        }
    }

    if(!currentGame.includes('')){
        info.textContent = "March nul ! Appuyez sur F5 pour recommencer.";
        lock = true;
        return;
    }

    switchPlayer()
}

function switchPlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    info.textContent = `Au tour du joueur ${currentPlayer}`;
}



