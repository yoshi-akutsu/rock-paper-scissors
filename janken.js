function computerPlay(){
    let hand = Math.random()
    if (hand >= .66){
        hand = "rock"
    }
    else if (hand <= .33){
        hand = "paper"
    }
    else{
        hand = "scissors"
    }
    return hand
}

function playRound(userPlay, computerPlay){
    let result = ""
    if (computerPlay == "rock"){
        switch (userPlay){
            case "rock":
                 result = "It's a tie: rock & rock"
                break;
            case "paper":
                result = "You win: paper beats rock"
                break;
            case "scissors":
                result = "You lose: rock beats scissors"
                break;
            default: 
                result = "It's ROCK PAPER SCISSORS silly. Pick one only."
            }
    }
    else if (computerPlay == "paper"){
        switch (userPlay){
            case "rock":
                 result = "You lose: paper beats rock"
                break;
            case "paper":
                result = "It's a tie: paper & paper"
                break;
            case "scissors":
                result = "You win: scissors beats paper"
                break;
            default: 
                result = "It's ROCK PAPER SCISSORS silly. Pick one only."
            }

    }
    else {
        switch (userPlay){
            case "rock":
                 result = "You win: rock beats scissors"
                break;
            case "paper":
                result = "You lose: scissors beats paper"
                break;
            case "scissors":
                result = "It's a tie: scissors & scissors"
                break;
            default: 
                result = "It's ROCK PAPER SCISSORS silly. Pick one only."
    }
    }
    return result
}

function printResult(winner){
    const p = document.createElement('p');
    p.textContent = winner;
    div.appendChild(p);
}

function killTheKids(){
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    tally = [0, 0, 0];
    score.textContent = tally;
    return
}

function game(userPlay){  
    if (userPlay == "restart" || tally[0] + tally[1] + tally[2] == 6)
    {   
        tally = [0, 0, 0];
        score.textContent = tally;
        killTheKids();
        return
    }
    if (tally[0] + tally[1] + tally[2] == 5){
        if (tally[0] > tally[1]){
            printResult("You won!")
        }
        else if (tally[1] > tally[0]){
            printResult("You lost.")
        }
        else {
            printResult("It was a draw.")
        }
        printResult("Click to play again.")
        tally[0] += 1;
        return
    }

    winner = playRound(userPlay, computerPlay())
    if (winner.substring(0, 5) == "You w"){
        printResult(winner)
        tally[0] += 1;
        score.textContent = tally;
    }
    else if (winner.substring(0, 5) == "You l"){
        printResult(winner)
        tally[1] += 1;
        score.textContent = tally;
    }
    else{
        printResult(winner)
        tally[2] += 1;
        score.textContent = tally;
    }   
}

const btns = document.querySelectorAll('button');
const score = document.querySelector('#score');
const div = document.querySelector('#results');
let plays = 0;
let tally = [0, 0, 0];
score.textContent = tally;


btns.forEach((btn) => {

    btn.addEventListener('click', (e) => {
        game(btn.getAttribute("id"))
    });
});


