
const threeChoices = ["Rock", "Paper", "Scissors"];



function getComputerChoice(threeChoices) {
    return threeChoices[Math.floor(Math.random() * threeChoices.length)];
}




function playOneRound() {
    let userChoice = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase();
    let computerChoice = getComputerChoice(threeChoices);
    let computerWinsRound = `${computerChoice} beats ${userChoice}`
    let userWinsRound = `${userChoice} beats ${computerChoice}`
    if (userChoice === computerChoice) {
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

function playGame(func) {
    let tieCount = 0;
    let userCount = 0;
    let computerCount = 0;
    for (i=0; i < 5; i++) {
        let roundResult = playOneRound();
        if (roundResult === 3) {
            tieCount++;
        } else if (roundResult === 1) {
            userCount++;
        } else {
            computerCount++;
        }
    }
    if (userCount > computerCount) {
        console.log(`User is the winner! Score: user ${userCount} vs computer ${computerCount}`);
    } else if (computerCount > userCount) {
        console.log(`Computer is the winner! Score: computer ${computerCount} vs user ${userCount}`);
    } else if (userCount === computerCount) {
        console.log(`It's a tie! Score: user ${userCount} and computer ${computerCount}`);
    }
}

playGame(playOneRound);


