let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; // playerx

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
        console.log("box was clicked");
        if (turnO === true) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabled_boxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabled_boxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabled_boxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos1Va2 = boxes[pattern[1]].innerHTML;
        let pos1Va3 = boxes[pattern[2]].innerHTML;

        if (pos1Val !== "" && pos1Va2 !== "" && pos1Va3 !== "") {
            if (pos1Val === pos1Va2 && pos1Va2 === pos1Va3) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () => {
    turnO = true;
    enabled_boxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);

// echo "# tac-tac-toe" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/SuheiHau/tac-tac-toe.git
// git push -u origin main