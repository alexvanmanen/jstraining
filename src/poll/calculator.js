import {getPartySet} from "./SetUtil.js";

export function getNumberOfSeats(partyInfoArray, average) {
    let numberSeats = 0;
    getPartySet(partyInfoArray).forEach(party => {
        numberSeats += (average(partyInfoArray.filter(element => element.party === party)));
    });
    return numberSeats;
}

export function averageVoteCount() {
    return (array) => array.map(element => element.seats).reduce((vorigeWaarde, huidigeWaarde) => vorigeWaarde + huidigeWaarde, 0) / array.length;
}
