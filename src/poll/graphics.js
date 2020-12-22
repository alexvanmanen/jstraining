
import {SetUtil} from "./SetUtil.js";
import {Calculator} from "./calculator.js";

export function renderBarForAllParties(votingData) {
    const calculator = new Calculator();

    const x = Math.round(calculator.getNumberOfSeats(votingData, calculator.averageVoteCount()));
    document.getElementById("total-seats").innerHTML= ""+x;

    return new SetUtil().getPartySet(votingData).forEach(renderBarForOneParty(calculator.averageVoteCount(), votingData));
}

function renderBarForOneParty(average, partyInfoArray) {
    return party => {
        renderBar({ party: party, seats: average(partyInfoArray.filter(element => element.party === party)) })
    };
}

function renderBar(result) {
    let percentage = result.seats / 1.5;
    let pollDivje = document.getElementById("poll");

    let balkje = document.createElement('div')
    balkje.classList.add('w3-grey')
    balkje.setAttribute("style", "height:24px;width:" + percentage + "%; margin:20px;");
    pollDivje.appendChild(balkje);
    balkje.innerHTML += "<strong>" + result.party + "</strong>";
    balkje.innerHTML += Math.round(result.seats) + "<br><br>";
}



