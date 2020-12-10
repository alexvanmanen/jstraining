const options = Object.freeze( { ROCK: "Rock", PAPER: "Paper", SCISSORS: "Scissors"});
const gameResult = Object.freeze( {   WIN: "Je hebt gewonnen", LOSES: "Je hebt verloren", DRAW: "GELIJKSPEL"});
console.log();

class Test {

    t;
    x;
    constructor(t, x) {
        this.t = t;
        this.x = x;
    }
}

class Player {
    constructor() {
        this.myChoice="hoi";
    }
}
let Remy = new Player();
let computer = new Computer();



class Computer {
    randomgenerator() {
        var randomGetal = Math.floor(Math.random() * Object.keys(options).length);
        return options[Object.keys(options)[randomGetal]];
    }
}
class Calculator {
    outcomeAnalyser(myChoice, computerChoice) {
        if (this.winsFrom(myChoice) === computerChoice) {
            return gameResult.WIN;
        } else if (this.winsFrom(computerChoice) === myChoice) {
            return gameResult.LOSES;
        } else {
            return gameResult.DRAW;
        }

    }



    outcome(myChoice, computerChoice) {
        console.log("Ik heb gekozen: " + myChoice + ". De computer: " + computerChoice + ". En de uitkomst is: " +
            this.outcomeAnalyser(myChoice, computerChoice));
    }
    winsFrom(value) {
        switch (value) {
            case options.ROCK:
                return options.SCISSORS;
            case options.PAPER:
                return options.ROCK;
            case options.SCISSORS:
                return options.PAPER;
            default:
                throw new Error('Het ging mis');
        }

    }


}

let calculator = new Calculator();
let laptop = new Computer();
calculator.outcome(options.SCISSORS, laptop.randomgenerator())