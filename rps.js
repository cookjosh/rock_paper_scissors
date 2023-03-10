
const threeChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(threeChoices) {
    return threeChoices[Math.floor(Math.random() * threeChoices.length)];
}


function playOneRound(userChoice) {
    let computerChoice = getComputerChoice(threeChoices);
    console.log(computerChoice);
    console.log(userChoice);
    let computerWinsRound = `${computerChoice} beats ${userChoice}`
    let userWinsRound = `${userChoice} beats ${computerChoice}`
    if (userChoice === computerChoice.toLowerCase()) {
        console.log("Tie!")
        return 3;
    } else if (userChoice === "rock" && computerChoice === "Paper") {
        console.log(computerWinsRound);
        return 2;
    } else if (userChoice === "rock" && computerChoice === "Scissors") {
        console.log(userWinsRound);
        return 1;
    } else if (userChoice === "paper" && computerChoice === "Scissors") {
        console.log(computerWinsRound);
        return 2;
    } else if (userChoice === "paper" && computerChoice === "Rock") {
        console.log(userWinsRound);
        return 1;
    } else if (userChoice === "scissors" && computerChoice === "Rock") {
        console.log(computerWinsRound);
        return 2;
    } else if (userChoice === "scissors" && computerChoice === "Paper") {
        console.log(userWinsRound);
        return 1;
    }
};

let tieCount = 0;
let userCount = 0;
let computerCount = 0;
let score_count = [];
const buttons = document.querySelector(".buttons");
const body = document.querySelector("body");

buttons.addEventListener('click', function(e) {
    const choice = e.target.className;
    const score = document.querySelector(".score");
    if (userCount === 5 || computerCount === 5) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("winner-message");
        if (userCount === 5) {
            newDiv.textContent = "You win!";
        } else {
            newDiv.textContent = "Computer wins!";
        }
        body.appendChild(newDiv);
        document.querySelectorAll('.buttons button').forEach(elem => {
            elem.disabled = true;
        });
    } else {
        if (choice === "button-rock") {
            userChoice = "rock";
        } else if (choice === "button-paper") {
            userChoice = "paper";
        } else {
            userChoice = "scissors";
        }
    
        let roundResult = playOneRound(userChoice);
        if (roundResult === 3) {
            tieCount++;
            score.textContent = `${userCount} - ${computerCount}`;
        } else if (roundResult === 1) {
            userCount++;
            score.textContent = `${userCount} - ${computerCount}`;
        } else {
            computerCount++;
            score.textContent = `${userCount} - ${computerCount}`;
        }
    }

})
