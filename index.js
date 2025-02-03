
//

const choice =["rock","paper","scissors"];

const player=document.getElementById("display");
const comp =document.getElementById("comp");
const result =document.getElementById("result");

const playerscore =document.getElementById("playerspan");
const computerscore =document.getElementById("compspan");

let pscore =0;
let cscore=0;

function play(playerchoice){

    const computerchoice=choice[Math.floor(Math.random()*3)];

    let results="";

    if(playerchoice ===computerchoice){

        results="IT'S A TIE";
    }
    else{

        switch(playerchoice){
            case "rock":
            results =(computerchoice==="scissors")? "YOU WIN!":"YOU LOSE!";
            break;
            case "paper":
            results =(computerchoice==="rock")? "YOU WIN!":"YOU LOSE!";
            break;
            case "scissors":
            results =(computerchoice==="paper")? "YOU WIN!":"YOU LOSE!";
            break;

        }
    }

    player.textContent =`PLAYER: ${playerchoice}`;
    comp.textContent =`COMPUTER: ${computerchoice}`;
    result.textContent=results;

    result.classList.remove("green","red");

    switch(results){
        case "YOU WIN!":
            result.classList.add("green");
            pscore++;
            playerscore.textContent=pscore;
            break;
        case "YOU LOSE!":
            result.classList.add("red");
            cscore++;
            computerscore.textContent=cscore;
            break;
    }
}
