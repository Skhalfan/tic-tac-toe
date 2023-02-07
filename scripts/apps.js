window.addEventListener('DOMContentLoaded', () => {
    let player1 = "X"
    let player2 = "O"
    let winner = document.querySelector('.winmsg')
    let Turn = player1
    let p1p = document.getElementById('p1p')
    p1p.value
    p1 = 0
    p2 = 0
    let showTurn = document.querySelector('.playerTurn')
    var player1List = []
    var player2List = []
    let p1score = document.querySelector("#scr1") 
    let p2score = document.querySelector("#scr2")
    const available = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const cells = document.querySelectorAll('.cell')
    const resetBtn = document.querySelector ("#reset")
    // const winningMsg = document.querySelector ("#win")
    const winningCond = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ]
    function playTurn(event) {
        console.log(Turn);
        if (Turn == player1) {
            event.target.style.pointerEvents = "none"
            player1List.push(parseInt(event.target.dataset.id))
            event.target.textContent = Turn
            Turn = player2
            showTurn.innerHTML = "Player O's turn"
            scr1.textContent
            
        }
        else if (Turn == player2) {
            event.target.style.pointerEvents = "none"
            player2List.push(parseInt(event.target.dataset.id))
            event.target.textContent = Turn
            Turn = player1
            showTurn.innerHTML = "Player X's turn"
        }

        let isWinningConditionMet = false
        winningCond.forEach(condition => {
            let count = 0
            condition.forEach(cell => {
                if (player1List.includes(cell)) count++
            })
            if (count === 3) {
                console.log('Player X wins!')
                winner.textContent = 'Player X won!'
                isWinningConditionMet = true
                p1++
                p1score.textContent = ' '+p1
            }
            count = 0
            condition.forEach(cell => {
                if (player2List.includes(cell)) count++;
            })
            if (count === 3) {
                console.log('Player O wins!')
                console.log(p1p)
                winner.textContent = p1p + ' won!'
                winner.textContent = 'Player O won!'
                isWinningConditionMet = true
                p2++
                p2score.textContent = ' '+p2
            }
            if (player1List.length + player2List.length === 9) {
                winner.textContent = 'Draw'
            }
        })
        if (isWinningConditionMet) cells.forEach(cell => {
            cell.removeEventListener('click', playTurn) 
        })
            
        //     let winnerText = ''
        //     if (Turn = player2) {
        //         winnerText = player1
        //     }
        //     else if (Turn = player1) {
        //         winnerText = player2
        //     }
        //     console.log('The game has ended, there is a winner!')
        //     winner.textContent = `Player ${winnerText} has won!`
            // cells.forEach(cell => {
            //     cell.removeEventListener('click', playTurn)
        //     })
        // }



        // console.log(player1List)
        // console.log(player2List)

        // console.log(player1List.includes(2));
    }
    cells.forEach(cell => {
        cell.addEventListener('click', playTurn)
    })

    resetBtn.addEventListener('click', reset)

function reset() {
    player1List = []
    player2List = []
    Turn = player1
    Count = 0
    cells.forEach(cell => {
        cell.textContent = ''
        cell.style.pointerEvents = "auto"
        cell.addEventListener('click', playTurn)
        winner.textContent = ''
        showTurn.textContent = ''
    })

// function (event){
//         if 

}
        

    // function resetButton () {
    // resetBtn.addEventListener("click", function () {
    //     let boxes = document.getElementsByClassName('cell');
    //     for(let i = 0; i < boxes.length; i++) {
    //         boxes[i].innerHTML = ''
    //     }
    // })
    // }
})
