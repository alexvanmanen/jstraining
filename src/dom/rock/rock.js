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

class Game {
    constructor(choice) {
        this.computerChoice = new Computer().randomgenerator();
        this.outcome = new Calculator().outcomeAnalyser(choice, this.computerChoice);
    }
}

