let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#restart-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
turnO = true; //playerO or PlayerX
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const restartGame = () => {
    turnO = true; 
    count = 0;
    enableBtn();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
 box.addEventListener("click", () => {
// console.log("box was clicked");
if(turnO) {
    box.innerText = "O";
    box.style.color = "blue";
    turnO = false;
}
else{
    box.innerText = "X";
    box.style.color = "red";
    turnO = true; 
}
box.disabled = true;
count++;


let isWinner = checkWinner();

if(count === 9 && !isWinner){
    gameDraw();
}
 });
});


const gameDraw = () => {
    message.innerText = "Game was Draw.";
    msgContainer.classList.remove("hide");
    disableBtn();
}
const disableBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBtn = () => {
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
}
const showWinner = (winner) => {
   message.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
   disableBtn();
}

const checkWinner = () => {
 for( let pattern of winPatterns) {
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(
    //      boxes[pattern[0]].innerText
    //     ,boxes[pattern[1]].innerText
    //     ,boxes[pattern[2]].innerText
    // );
   let pos1Val = boxes[pattern[0]].innerText;
   let pos2Val = boxes[pattern[1]].innerText;
   let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != "" )
        {
        if(pos1Val === pos2Val && pos2Val=== pos3Val){
            // console.log("winner",pos1Val);

    showWinner(pos1Val) ;      
   
        }
    }
 }
};
newGameBtn.addEventListener("click",restartGame);
resetBtn.addEventListener("click",restartGame);