/* =====================================
The Classic "Rock, Paper, Scissors"
Game will be played against the computer
======================================*/


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


//Function takes user choice and returns it
function getHumanChoice() {
    let humanChoice;
    let humanChoiceEntry = prompt("Little Human. Make your choice. Rock, paper or scissors?");
    lowerCaseChoice = humanChoiceEntry.toLowerCase();
    if (lowerCaseChoice === "rock" || "paper" || "scissors") {
        humanChoice = lowerCaseChoice;
    }
    return humanChoice;
}

//One big round of nth games... 
function playGame() {
    let winner;
    let roundNum = prompt("How many rounds would you likes to play? Enter a number"); //nth games
    let humanScore = 0;
    let computerScore = 0;  

    // Single-round function
    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "rock" && computerChoice ==="scissors") {
            console.log("\n ============== \n You win! Your rock crushes my scissors any day!");
            humanScore += 1;

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

        return console.log("Human Score is now " + humanScore + " and Computer Score is now " + computerScore);
    }

    
    //if (humanScore > computerScore) {
        //console.log("\n ============== \n You win this game. Congratulations! You may now consider yourself worthy of being my opponent. Hahaha.");
    //} else if (humanScore < computerScore) {
        //console.log("\n ============== \n I win. Boohahaha!");
    //} else {
        //console.log("\n ============== \n\n ===Results==== \n\n ============== \n We both win this epic game! Unbelievable!");
    //}
    


    for (let roundCount = 1; roundCount <= roundNum; roundCount++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Round# :" + (roundCount));
    }

    function declareWinner() {
        if (humanScore < computerScore) {
            winner = "You lose... you puny human! Boohahahahahahahaha!";
        } else if (humanScore > computerScore) {
            winner = "You win this game. Congratulations! You may now consider yourself worthy. Hahaha.";
        } else if (humanScore === computerScore) {
            winner = "We both win this epic game! Unbelievable. How is this possible?";
        } else {
            winner = "We really do not know how to do maths to determine the winner..."
        }
        console.log("\n ============== \n\n ===Results==== \n\n ============== \n " + winner);
        return winner;
    }
 

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


return declareWinner();
    
}

playGame();