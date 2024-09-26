const cpu_choices = ['Rock', 'Paper', 'Scissors'];
let userchoice = "";
let userscore = 0;
let opponentscore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerscore = document.getElementById("userscore");
const enemyscore = document.getElementById("opponentscore");
const choice = document.getElementById('choice');
const result = document.getElementById('result');

playerscore.innerHTML = userscore;
enemyscore.innerHTML = opponentscore;

function chooseRock(){
    result.innerHTML = ''
    userchoice = "Rock";
    document.getElementById("choice").innerHTML = "You have selected Rock. Continue?";

    rock.className = 'btn btn-dark border-1 border-secondary p-5'
    paper.className = 'btn btn-light border-1 border-dark p-5 mx-5'
    scissors.className = 'btn btn-light border-1 border-dark p-5'
}

function choosePaper(){
    result.innerHTML = ''
    userchoice = "Paper";
    document.getElementById("choice").innerHTML = "You have selected Paper. Continue?";

    paper.className = 'btn btn-dark border-1 border-secondary p-5 mx-5'
    rock.className = 'btn btn-light border-1 border-dark p-5'
    scissors.className = 'btn btn-light border-1 border-dark p-5'
}

function chooseScissors(){
    result.innerHTML = ''
    userchoice = "Scissors";
    document.getElementById("choice").innerHTML = "You have selected Scissors. Continue?";

    rock.className = 'btn btn-light border-1 border-secondary p-5'
    paper.className = 'btn btn-light border-1 border-dark p-5 mx-5'
    scissors.className = 'btn btn-dark border-1 border-dark p-5'
}

function Generate(){
    if (userchoice == "");
    else {
        let cpu_answer = cpu_choices[Math.floor(Math.random() * 3)];
        choice.innerHTML = 'The enemy chose ' + cpu_answer + "!";

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

        rock.className = 'btn btn-light border-1 border-secondary p-5'
        paper.className = 'btn btn-light border-1 border-secondary p-5 mx-5'
        scissors.className = 'btn btn-light border-1 border-secondary p-5'
        userchoice = "";
        playerscore.innerHTML = userscore;
        enemyscore.innerHTML = opponentscore;
    }
}