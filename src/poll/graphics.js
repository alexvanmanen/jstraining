import {averageVoteCount, getNumberOfSeats} from "./calculator.js";
import {getPartySet} from "./SetUtil.js";

export function renderBarForAllParties(votingData) {
    const x = Math.round(getNumberOfSeats(votingData, averageVoteCount()));
    document.getElementById("total-seats").innerHTML= ""+x;

    return getPartySet(votingData).forEach(renderBarForOneParty(averageVoteCount(), votingData));
}

function renderBarForOneParty(average, partyInfoArray) {
    return party => {
        renderBar({ party: party, seats: average(partyInfoArray.filter(element => element.party === party)) })
    };
}


function renderBar(result) {
    var percentage = result.seats / 1.5;
    var pollDivje = document.getElementById("poll");

    var balkje = document.createElement('div')
    balkje.classList.add('w3-grey')
    balkje.setAttribute("style", "height:24px;width:" + percentage + "%; margin:20px;");
    pollDivje.appendChild(balkje);
    balkje.innerHTML += "<strong>" + result.party + "</strong>";
    balkje.innerHTML += Math.round(result.seats) + "<br><br>";

}



