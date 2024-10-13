/* =====================================
The Classic "Rock, Paper, Scissors"
Game will be played against the computer.
This version includes an UI.
======================================*/

let humanScore = 0;
let computerScore = 0; 
let roundCount = 0;
let currentScore = document.createElement("p");
let scoreDisplay = document.querySelector("#score");
scoreDisplay.appendChild(currentScore);
currentScore.textContent = "Human Score: " + humanScore + "; " + "Computer Score " + computerScore;

const choiceRock = document.querySelector("#rock");
const choicePaper = document.querySelector("#paper");
const choiceScissors = document.querySelector("#scissors");

choiceRock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
    roundCount ++;
});

choicePaper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
    roundCount ++;
});

choiceScissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
    roundCount ++;
});


//Function randomly returns string values: "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    randomNumber = Math.floor((Math.random()) * 100);
    if (randomNumber <= 33) {
        computerChoice = "rock";
    } else if (randomNumber <= 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
} 
 

// Single-round function
function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice ==="scissors") {
        humanScore += 1;
        console.log("\n ============== \n You win! Your rock crushes my scissors any day!");

    } else if (humanChoice === "rock" && computerChoice ==="paper") {
        computerScore += 1;
        console.log("\n ============== \n You lose! My paper beats your puny rock! I, the Computer, win!");
        
    } else if (humanChoice === "paper" && computerChoice ==="scissors") {
        computerScore += 1;
        console.log("\n ============== \n You lose! My big pair of scissors beats paper! Haha, I win!");
        
    } else if (humanChoice === "paper" && computerChoice ==="rock") {
        humanScore += 1;
        console.log("\n ============== \n You win! Your paper wrapped up my rock big time!");
        
    } else if (humanChoice === "scissors" && computerChoice ==="paper") {
        humanScore += 1;
        console.log("\n ============== \n You win! Scissors beats paper!");
        
    } else if (humanChoice === "scissors" && computerChoice ==="rock") {
        computerScore += 1;
        console.log("\n ============== \n You lose! I win! My rock crushes your scissors any day!");
        
    } else if (humanChoice === "rock" && computerChoice ==="rock") {
        humanScore += 1;
        computerScore += 1;
        console.log("\n ============== \n Oh my, it is a tie! Rock vs. rock. One point each.");
        
    } else if (humanChoice === "paper" && computerChoice ==="paper") {
        humanScore += 1;
        computerScore += 1;
        console.log("\n ============== \n Darn, it is a tie! Paper vs. paper. One point each.");
        
    } else if (humanChoice === "scissors" && computerChoice ==="scissors") {
        humanScore += 1;
        computerScore += 1;
        console.log("\n ============== \n Not bad... it is tie. Scissors on scissors. We both get a point.");
        
    } else {
        console.log("\n ============== \n We messed up somehow... One of us made the wrong gesture...");
    }

    return currentScore.textContent = "Human Score: " + humanScore + "; " + "Computer Score " + computerScore;
}

    




    


    //for (let roundCount = 1; roundCount <= roundNum; roundCount++) {
    //    playRound(getHumanChoice(), getComputerChoice());
    //    console.log("Round# :" + (roundCount));
    //}


    // Round one
    //let round = playRound(getHumanChoice(), getComputerChoice());
    //roundCount = roundCount++;
    //console.log("Round One");
    //console.log("Human Score: " + humanScore);
    //console.log("Computer Score: " + computerScore);


    
    // Round two
    //round = playRound(getHumanChoice(), getComputerChoice());
    //roundCount = roundCount++;
    //console.log("Round Two");
    //console.log("Human Score: " + humanScore);
    //console.log("Computer Score: " + computerScore);



    // Round three
    //round = playRound(getHumanChoice(), getComputerChoice());
    //roundCount = roundCount++;
    //console.log("Round Three");
    //console.log("Human Score: " + humanScore);
    //console.log("Computer Score: " + computerScore);



    // Round four
    //round = playRound(getHumanChoice(), getComputerChoice());
    //roundCount = roundCount++;
    //console.log("Round Four");
    //console.log("Human Score: " + humanScore);
    //console.log("Computer Score: " + computerScore);



    // Round five
    //round = playRound(getHumanChoice(), getComputerChoice());
    //roundCount = roundCount++;
    //console.log("Round Five");
    //console.log("Human Score: " + humanScore);
    //console.log("Computer Score: " + computerScore);



    





//playGame();