

export class SetUtil {
    getPartySet(partyInfoArray) {
        let partySet = new Set();
        partyInfoArray.map(partyInfo => partyInfo.party).forEach(party => partySet.add(party));
        return partySet;
    }
}