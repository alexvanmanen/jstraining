const options = Object.freeze( { ROCK: "Rock", PAPER: "Paper", SCISSORS: "Scissors"});
const gameResult = Object.freeze( {   WIN: "Je hebt gewonnen", LOSES: "Je hebt verloren", DRAW: "GELIJKSPEL"});

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

        var element = document
            .getElementById('outcome');
        element.innerText = ("Ik heb gekozen: <strong>" + myChoice + "</strong>. De computer: <strong>" + computerChoice + "</strong>. En de uitkomst is: <strong>" +
            this.outcomeAnalyser(myChoice, computerChoice) + "</strong>");
        element.style = "background: red";
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

function x (keuze) {
    let calculator = new Calculator();
    let laptop = new Computer();
    let player = new Player();

    calculator.outcome(keuze, laptop.randomgenerator())

}
