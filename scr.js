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


function playRound(humanChoice){
    let cc=getComputerChoice();

if (humanChoice === cc) {
    console.log("It's a tie!");
    return "tie";
}


else if (humanChoice === "rock" && cc === "scissors") {
    console.log("You win! Rock crushes scissors.");
    return "human";
}


else if (humanChoice === "scissors" && cc === "paper") {
    console.log("You win! Scissors cut paper.");
    return "human";
}

else if (humanChoice === "paper" && cc === "rock") {
    console.log("You win! Paper covers rock.");
    return "human";
}
else{
    console.log("You lose!");
    return "computer";
}


}


let humanScore= 0;
let computerScore= 0;
round=0;
let h="";
let c="";




buttonRock= document.querySelector("#rock");
buttonScissors= document.querySelector("#scissors");
buttonPaper= document.querySelector("#paper");
hscore= document.querySelector("#hScore");
cscore= document.querySelector("#cScore");
//buttonReset= document.querySelector("#reset");


buttonRock.addEventListener("click",()=>{ 
    
    let w=playRound("rock");
    if (w === "tie"){
        console.log("It's a tie");
        humanScore++;
        computerScore++;
    }
    else if (w === "human"){
       console.log("You won the round")
        humanScore++;
    }
    else{
        console.log("You lost the round")
        computerScore++;
    }
    h= humanScore.toString();
    c= computerScore.toString();
    hscore.textContent=h;   
    cscore.textContent=c;
    round++;
    if (round === 5){
        if (humanScore > computerScore){
            alert("You won the game!");
        }
        else if (humanScore < computerScore){
            alert("You lost the game!");
        }
        else{
            alert("It's a tie!");
        }
        hscore.textContent="0";
        cscore.textContent="0";

    }
}
);
        

buttonPaper.addEventListener("click", () => {
    let w=playRound("paper");
    if(w=== "tie"){
        console.log("It's a tie");
        humanScore++;
        computerScore++;
    }
    else if (w === "human"){
        console.log("You won the round");
        humanScore++;
     }
    else{
         console.log("You lost the round");
            computerScore++;
     }   
     h= humanScore.toString();
     c= computerScore.toString();
     hscore.textContent=h;
     cscore.textContent=c;
    round++;
    if (round === 5){
        if (humanScore > computerScore){
            alert("You won the game!");
        }
        else if (humanScore < computerScore){
            alert("You lost the game!");
        }
        else{
            alert("It's a tie!");
        }
        hscore.textContent="0";
        cscore.textContent="0";

    } ;   
}

);

buttonScissors.addEventListener("click", () =>{
    let w=playRound("scissors");
    if(w=== "tie"){
        console.log("It's a tie");
        humanScore++;
        computerScore++;
    }
    else if (w === "human"){
        console.log("You won the round");
        humanScore++;
     }
     else{
         console.log("You lost the round");
            computerScore++;
     }
     h= humanScore.toString();
     c= computerScore.toString();
     hscore.textContent=h;
     cscore.textContent=c;
     round++;
    if (round === 5){
        if (humanScore > computerScore){
            alert("You won the game!");
        }
        else if (humanScore < computerScore){
            alert("You lost the game!");
        }
        else{
            alert("It's a tie!");
        }
        hscore.textContent="0";
        cscore.textContent="0";

    }
}
);

/* /buttonReset.addEventListener("click", () => {
    humanScore=0;
    computerScore=0;
    h= humanScore.toString();
    c= computerScore.toString();
    hscore.textContent=h;   
    cscore.textContent=c;
}
);*/
