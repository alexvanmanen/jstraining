class GameResult {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

}

const options = Object.freeze( { ROCK: "Rock", PAPER: "Paper", SCISSORS: "Scissors"});
const gameResult = Object.freeze( {   WIN: new GameResult("Je hebt gewonnen", "green"),
    LOSES: new GameResult("Je hebt verloren", "red"), DRAW: new GameResult("GELIJKSPEL", "white")});

class Player {
    getChoice(){
        return options.SCISSORS;
    }
}


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
        var outcome = this.outcomeAnalyser(myChoice, computerChoice);
        var element = document
            .getElementById('outcome');
        element.innerHTML = ("Ik heb gekozen: <img src='img/" + myChoice.toLowerCase() + ".jpg'>. De computer:<img src='img/" + computerChoice.toLowerCase() + ".jpg'>. <h2> De uitkomst is: <strong>" + outcome.text
             + "</strong></h2>");
        element.style = "background:"+ outcome.color;
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

function play (keuze) {
    let calculator = new Calculator();
    let laptop = new Computer();
    let player = new Player();

    calculator.outcome(keuze, laptop.randomgenerator())

}
