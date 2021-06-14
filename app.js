const choicesArray = ["rock", "paper", "scissors"];
const choicesArrayIcons = ["✊", "✋", "✌"];
const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");
const endGame = document.getElementById("endGame");
const scoreGame = document.getElementById("scoreGame");

let choicePc;
let choiceUser;

let scoreUser = 0;
let scorePc = 0;

document.getElementById("scoreGame").innerHTML = scoreUser + " - " + scorePc;

function userInteraction(){
    console.log("elija su opción");
    
    rockButton.addEventListener("click", getSelectionUser);
    paperButton.addEventListener("click", getSelectionUser);
    scissorsButton.addEventListener("click", getSelectionUser);
    endGame.addEventListener("click", endGameRegards);
}

userInteraction();


function getSelectionUser() {
    document.getElementById("rightHand").innerHTML = this.value;
    choiceUser = this.name;
    getSelectionPC();
}

function getSelectionPC(){
    let random = Math.floor(Math.random() * 3);
    choicePc = choicesArray[random];
    document.getElementById("leftHand").innerHTML = choicesArrayIcons[random];
    game();
}

function game(){

    console.log("Pc choice: " + choicePc);
    console.log("Your choice: " + choiceUser);
    
    
    if (choiceUser == "rock" && choicePc == "rock" || choiceUser == "paper" && choicePc == "paper" || choiceUser == "scissors" && choicePc == "scissors") {

        console.log("Tie");
        
        document.getElementById("game").innerHTML = "Tie" + "<br /> 🤝";
        document.getElementById("scoreGame").innerHTML = scoreUser + " - " + scorePc;
    
    } else if (choiceUser == "rock" && choicePc == "scissors" || choiceUser == "paper" && choicePc == "rock" || choiceUser == "scissors" && choicePc == "paper") {
    
        console.log("You Win!");
        document.getElementById("game").innerHTML = "You Win!" + "<br />🏆";
        scoreUser++;

        document.getElementById("scoreGame").innerHTML = scoreUser + " - " + scorePc;

    } else if (choiceUser == "rock" && choicePc == "paper" || choiceUser == "paper" && choicePc == "scissors" || choiceUser == "scissors" && choicePc == "rock") {
    
        console.log("You Lose!");
        document.getElementById("game").innerHTML = "You Lose!" + "<br /> 😓";
        scorePc++;

        document.getElementById("scoreGame").innerHTML = scoreUser + " - " + scorePc;
    }


    console.log("Pc: " + scorePc);
    console.log("Your: " + scoreUser);
}

function endGameRegards() {
        console.log("Bye");
        console.log(" ");
        document.getElementById("rightHand").innerHTML = choicesArrayIcons[0];
        document.getElementById("leftHand").innerHTML = choicesArrayIcons[0];
        document.getElementById("game").innerHTML = "GoodBye!";
        scoreUser = 0;
        scorePc = 0;
        document.getElementById("scoreGame").innerHTML = scoreUser + " - " + scorePc;
}




