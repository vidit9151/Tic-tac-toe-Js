let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let winning = new Audio(
    "/Javascript games/tic tac toe sounds/winner-trumpet-fanfare-soundroll-1-00-03.mp3"
  ),
  clickO = new Audio("/Javascript games/tic tac toe sounds/click.mp3"),
  clickX = new Audio(
    "/Javascript games/tic tac toe sounds/mixkit-click-melodic-tone-1129.wav"
  );
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      clickO.play();
      console.log(box);
      box.innerHTML = "O";
      turnO = false;
    } else {
      clickX.play();
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true; //So that if whenever the value is changed from of ny button from the top👆🏻 thne it will be disabled and cant be changed again
    checkWinner(); //on every click it will check all the winning patterns
  });
});
// ------------checking if the boxex ont he index on pattern is same X or O---------------
const checkWinner = () => {
  for (let pattern of winPatterns) {
    //posvalue will be X or O⭐⭐⭐ and pattern will give box postiions like 2,5,8 and it will check if on 2 5 and 8 there is x or there is o ther wil be a winner
    let pos1value = boxes[pattern[0]].innerHTML,
      pos2value = boxes[pattern[1]].innerHTML,
      pos3value = boxes[pattern[2]].innerHTML;
    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        message(pos1value);
      }
    }
  }
};
// ------todo when we have to close modal
let close = () => {
  document.querySelector(".overlay").classList.add("hidden");
  msgContainer.classList.add("hidden");
  boxes.forEach((el) => {
    el.disabled = true;
  });
  resetBtn.classList.add("endAni");
};
// ------------------message if a player won--------------
function message(pos1value) {
  winning.play();
  msgContainer.classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
  msg.innerHTML = `Congradulations the winner is Mr.${pos1value}`;
  document.querySelector(".close-modal").addEventListener("click", close);
  document.querySelector(".overlay").addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      close();
    }
  });
}
// -----------reset button
resetBtn.addEventListener("click", () => {
  clickO.play();
  turnO = true;
  boxes.forEach((el) => {
    el.innerHTML = "";
    el.disabled = false;
  });
  resetBtn.classList.remove("endAni");
});
