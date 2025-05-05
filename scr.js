function getComputerChoice() {
    let n = Math.random();
    if (n >= 0 && n < 0.33) {
        return "rock";
    }
    else if (n >= 0.33 && n < 0.66) {
        return "scissors";
    }
    else if (n >= 0.66) {
        return "paper";
    }
}

function getHumanChoice() {
    let hc = prompt("Enter your choice: rock, paper, or scissors");
    hc = hc.toLowerCase();
    
    return hc;
}




function playRound(humanChoice, computerChoice){

if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return "tie";
}


else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock crushes scissors.");
    return "human";
}


else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors cut paper.");
    return "human";
}

else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper covers rock.");
    return "human";
}
else{
    console.log("You lose!");
    return "computer";
}


}


humanScore= 0;
computerScore= 0;

for (let i=0; i <5 ; i++){
    let hc = getHumanChoice();
    let cc = getComputerChoice();
    w=playRound(hc, cc);
    if (w === "human"){
        humanScore++;
    }
    else if (w==="computer"){
        computerScore++;
    }
    else if (w==="tie"){
        humanScore++
        computerScore++;
    }
}

if (humanScore > computerScore){
    console.log("You won the series");
}
else if(humanScore < computerScore){
    console.log("the computer won the series");
}
console.log(w);
console.log(humanScore);
console.log(computerScore);