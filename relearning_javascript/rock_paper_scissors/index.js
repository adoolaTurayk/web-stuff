let computerChoice;
let playerScore = 0;
let computerScore = 0;

function play(){
    document.getElementById("play").disabled = true;
    let c = document.getElementsByClassName("gameButtons");
    for (let i = 0; i < c.length; i++) {
        c.item(i).disabled = false;
    }
    computerChoice = Math.floor((Math.random() * 3) + 1)
    console.log(computerChoice)
}
function choose(choice){
    if (choice == 1) {
        computerChoice == 1 ? stop(1) : (computerChoice == 2 ? stop(3) : stop(2))
    }
    else if (choice == 2) {
        computerChoice == 2 ? stop(1) : (computerChoice == 3 ? stop(3) : stop(2))
    }
    else if (choice == 3) {
        computerChoice == 3 ? stop(1) : (computerChoice == 1 ? stop(3) : stop(2))
    }
    else {
        console.log("An error occurred.");
    }
}

function stop(result){
    if (result == 1) {
        document.getElementById("result").textContent = "It's a tie!"
        updateScore(0);
    }
    else if (result == 2) {
        document.getElementById("result").textContent = "You win!"
        playerScore++;
        updateScore(1);
    }
    else if (result == 3) {
        document.getElementById("result").textContent = "You lose!"
        computerScore++;
        updateScore(-1);
    }
    document.getElementById("play").disabled = false;
    let c = document.getElementsByClassName("gameButtons");
    for (let i = 0; i < c.length; i++) {
        c.item(i).disabled = true;
    }
}

function updateScore(wl){
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;

    if (wl == -1) {
        document.getElementById("result").style.color = "red";
    }
    else if (wl == 0){
        document.getElementById("result").style.color = "black";
    }
    else if (wl == 1){
        document.getElementById("result").style.color = "rgb(0, 255, 0)";
    }
}