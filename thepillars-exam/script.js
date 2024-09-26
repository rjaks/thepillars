const cpu_choices = ['Rock', 'Paper', 'Scissors'];
let userchoice = "";
let userscore = 0;
let opponentscore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerscore = document.getElementById("userscore");
const playerchoice = document.getElementById("playerchoice");
const enemychoice = document.getElementById("enemychoice");
const enemyscore = document.getElementById("opponentscore");
const choice = document.getElementById('choice');
const result = document.getElementById('result');

playerscore.innerHTML = userscore;
enemyscore.innerHTML = opponentscore;

playerchoice.innerHTML = '?'
enemychoice.innerHTML = '?'


function chooseRock(){
    result.innerHTML = ''
    userchoice = "Rock";
    playerchoice.innerHTML = '🤜'
    enemychoice.innerHTML = '?'
    document.getElementById("choice").innerHTML = "You have selected <b>Rock</b>.<br>Continue?";
    

    rock.className = 'btn btn-secondary border-1 border-secondary px-5 py-3'
    paper.className = 'btn btn-light border-1 border-dark px-5 py-3 mx-5'
    scissors.className = 'btn btn-light border-1 border-dark px-5 py-3'
}

function choosePaper(){
    result.innerHTML = ''
    userchoice = "Paper";
    playerchoice.innerHTML = '✋'
    enemychoice.innerHTML = '?'
    document.getElementById("choice").innerHTML = "You have selected <b>Paper</b>.<br>Continue?";

    paper.className = 'btn btn-secondary border-1 border-secondary px-5 py-3 mx-5'
    rock.className = 'btn btn-light border-1 border-dark px-5 py-3'
    scissors.className = 'btn btn-light border-1 border-dark px-5 py-3'
}

function chooseScissors(){
    result.innerHTML = ''
    userchoice = "Scissors";
    playerchoice.innerHTML = '✌️'
    enemychoice.innerHTML = '?'
    document.getElementById("choice").innerHTML = "You have selected <b>Scissors</b>.<br>Continue?";

    rock.className = 'btn btn-light border-1 border-secondary px-5 py-3'
    paper.className = 'btn btn-light border-1 border-dark px-5 py-3 mx-5'
    scissors.className = 'btn btn-secondary border-1 border-dark px-5 py-3'
}

function Generate(){
    if (userchoice == "");
    else {
        let cpu_answer = cpu_choices[Math.floor(Math.random() * 3)];

        if (cpu_answer == 'Rock') enemychoice.innerHTML = '🤜'
        else if (cpu_answer == 'Paper') enemychoice.innerHTML = '✋'
        else enemychoice.innerHTML = '✌️'
        choice.innerHTML = 'The enemy chose <b>' + cpu_answer + "</b>!";

        if (cpu_answer == userchoice){
            result.innerHTML = '<br>It\'s a tie!'
        }
        else if (cpu_answer == 'Rock' && userchoice == 'Paper'){
            result.innerHTML = '<br>You win!'
            userscore++
        }
        else if (cpu_answer == 'Rock' && userchoice == 'Scissors'){
            result.innerHTML = '<br>Enemy wins!'
            opponentscore++
        }
        else if (cpu_answer == 'Paper' && userchoice == 'Rock'){
            result.innerHTML = '<br>Enemy wins!'
            opponentscore++
        }
        else if (cpu_answer == 'Paper' && userchoice == 'Scissors'){
            result.innerHTML = '<br>You win!'
            userscore++
        }
        else if (cpu_answer == 'Scissors' && userchoice == 'Rock'){
            result.innerHTML = '<br>You win!'
            userscore++
        }
        else if (cpu_answer == 'Scissors' && userchoice == 'Paper'){
            result.innerHTML = '<br>Enemy wins!'
            opponentscore++
        }

        rock.className = 'btn btn-light border-1 border-secondary px-5 py-3'
        paper.className = 'btn btn-light border-1 border-secondary px-5 py-3 mx-5'
        scissors.className = 'btn btn-light border-1 border-secondary px-5 py-3'
        userchoice = "";
        playerscore.innerHTML = userscore;
        enemyscore.innerHTML = opponentscore;
    }
}