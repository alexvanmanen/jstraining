function goldenRetriever(bestand) {
    return new Promise((resolve, reject) => {
            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === XMLHttpRequest.DONE) {
                    if (this.status === 200) {
                        resolve(JSON.parse(this.responseText));
                    } else {
                        reject('Oeps, er ging iets fout.');
                    }

                }
            }
            xhttp.open("GET", bestand, true);
            xhttp.send();
        }
    );
}

function parseData(result) {
    var percentage = result.seats / 1.5;
    var pollDivje = document.getElementById("poll");

    var balkje = document.createElement('div')
    balkje.classList.add('w3-grey')
    balkje.setAttribute("style", "height:24px;width:" + percentage + "%; margin:20px;");
    pollDivje.appendChild(balkje);
    balkje.innerHTML += "<strong>" + result.party + "</strong>";
    balkje.innerHTML += Math.round(result.seats) + "<br><br>";

}

function getPartySet(partyInfoArray) {
    let partySet = new Set();
    partyInfoArray.map(partyInfo => partyInfo.party).forEach(party => partySet.add(party));
    return partySet;
}

function averageVoteCount() {
    return (array) => array.map(element => element.seats).reduce((vorigeWaarde, huidigeWaarde) => vorigeWaarde + huidigeWaarde, 0) / array.length;
}

function getNumberOfSeats(partyInfoArray, average) {
    let numberSeats = 0;
    getPartySet(partyInfoArray).forEach(party => {
        numberSeats += (average(partyInfoArray.filter(element => element.party === party)));
    });
    return numberSeats;
}

function showGraphicsForOneParty(average, partyInfoArray) {
    return party => {
        parseData({ party: party, seats: average(partyInfoArray.filter(element => element.party === party)) })
    };
}

async function retrieveVotingData() {
    let votingData = await goldenRetriever('results.json');
    votingData = votingData.concat(await goldenRetriever('resultsAlphen.json'))
    votingData = votingData.concat(await goldenRetriever('resultsUtrecht.json'));
    return votingData.flat(1);
}

function showGraphicsForAllParties(votingData) {
    return getPartySet(votingData).forEach(showGraphicsForOneParty(averageVoteCount(), votingData));
}

async function render() {

    try {
        let votingData = await retrieveVotingData();

        console.log(Math.round(getNumberOfSeats(votingData, averageVoteCount())));

        showGraphicsForAllParties(votingData);

    } catch (e) {
        console.log("het ging mis: " + e);
    }
}

render();




