
var option = {
    ROCK: { name:"Rock", index: 1 },
    PAPER: { name: "Paper", index:2 },
    SCISSORS: { name:"Scissors", index:3 }
}

var GameResult = {
    WIN: "Je hebt gewonnen",
    LOSES: "Je hebt verloren",
    DRAW: "GELIJKSPEL",
};

function winsFrom(value){
    switch(value) {
        case option.ROCK:
            return option.SCISSORS;
        case option.PAPER:
            return option.ROCK;
        case option.SCISSORS:
            return option.PAPER;
      default: throw new Error('Het ging mis');
    }
}

function outcomeAnalyser(myChoise,computerChoise){
    if (winsFrom(myChoise) === computerChoise){
       return GameResult.WIN; 
    }
    else if (winsFrom(computerChoise) === myChoise){
        return GameResult.LOSES;
    }
    else {
        return GameResult.DRAW;
    }
}

var myChoise = option.SCISSORS;

function randomgenerator (){
    var randomGetal = Math.floor(Math.random() * Object.keys(option).length);
    return option[Object.keys(option)[randomGetal]];
}
var computerChoise = randomgenerator();

function outcome (myChoise, computerChoise)
{
        console.log("Ik heb gekozen: "+ myChoise.name + " De computer: "+ computerChoise.name + " En de uitkomst is: " +
    outcomeAnalyser(myChoise,computerChoise));
}

outcome(myChoise, computerChoise);