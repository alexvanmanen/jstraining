
import {SetUtil} from "./SetUtil.js";
import {Calculator} from "./Calculator.js";

export class Graphics {

    renderBarForAllParties(votingData) {
        const calculator = new Calculator();

        const x = Math.round(calculator.getNumberOfSeats(votingData, calculator.averageVoteCount()));
        document.getElementById("total-seats").innerHTML= ""+x;

        return SetUtil.getPartySet(votingData).forEach(this.renderBarForOneParty(calculator.averageVoteCount(), votingData));
    }

     renderBarForOneParty(average, partyInfoArray) {
        return party => {
            this.renderBar({ party: party, seats: average(partyInfoArray.filter(element => element.party === party)) })
        };
    }

    renderBar(result) {
        let percentage = result.seats / 1.5;
        let pollDivje = document.getElementById("poll");

        let balkje = document.createElement('div')
        balkje.classList.add('w3-grey')
        balkje.setAttribute("style", "height:24px;width:" + percentage + "%; margin:20px;");
        pollDivje.appendChild(balkje);
        balkje.innerHTML += "<strong>" + result.party + "</strong>";
        balkje.innerHTML += Math.round(result.seats) + "<br><br>";
    }
}




