console.log("welcome to tic tac toe");

let box = document.getElementsByClassName('box');
let info = document.querySelector('.info');
let gifWin= document.querySelector('#gifWin');
let turn = 'X';
const changeTurn = () => {
    if (turn == 'X') {
        return turn = '0';
    }
    else {
        return turn = 'X';
    }
}
let lock=0;
Array.from(box).forEach((element) => {

    let boxContent = element.querySelector('.boxContent');
    element.addEventListener('click', () => {
        if (boxContent.innerText === '' && lock==0) {
            boxContent.innerText = turn;
            turn = changeTurn();
            info.innerText = `turn for ${turn}`;
            checkForWin();
        }
    })
})


let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    Array.from(box).forEach((element) => {
        let boxContent = element.querySelector('.boxContent');
        boxContent.innerText = "";
        turn = "X";
        info.innerText=`Turn for ${turn}`;
        document.getElementById('line').style.width="0vw";
        gifWin.style.width='0vw';
        lock=0;
    })
})

const checkForWin = () => {
    let wins;
    let boxContent= document.querySelectorAll('.boxContent');
    wins = [
        [0, 1, 2, 22, 4, 4.8, 0],
        [3, 4, 5, 22, 4, 14.8, 0],
        [6, 7, 8, 22, 4, 25, 0],
        [0, 3, 6, 22, -6, 14.8, 90],
        [1, 4, 7, 22, 4, 14.8, 90],
        [2, 5, 8, 22, 14, 14.5, 90],
        [0, 4, 8, 28, 0, 14, 45],
        [2, 4, 6, 28, 2, 14, -45],
    ]

    wins.forEach(e=>{
        if(boxContent[e[0]].innerText===boxContent[e[1]].innerText &&boxContent[e[2]].innerText===boxContent[e[1]].innerText  && boxContent[e[0]].innerText!== '' )
        {
            info.innerText=`Winner is ${boxContent[e[0]].innerText}`;
            gifWin.style.width='22vw';
            document.getElementById('line').style.width=`${e[3]}vw`;
            document.getElementById('line').style.transform=`translate(${e[4]}vw,${e[5]}vw) rotate(${e[6]}deg)`;
            lock=1;
        }
    })
}