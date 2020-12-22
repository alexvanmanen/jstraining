import {SetUtil} from "./SetUtil.js";
var setutilClass = new SetUtil();

export class Calculator {
    getNumberOfSeats(partyInfoArray, average) {
        let numberSeats = 0;
        setutilClass.getPartySet(partyInfoArray).forEach(party => {
            numberSeats += (average(partyInfoArray.filter(element => element.party === party)));
        });
        return numberSeats;
    }
    averageVoteCount() {
        return (array) => array.map(element => element.seats).reduce((vorigeWaarde, huidigeWaarde) => vorigeWaarde + huidigeWaarde, 0) / array.length;
    }
}