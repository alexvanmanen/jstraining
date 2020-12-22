function doeHet(bestand) {
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

function showPoll(data) {
    data.forEach(parseData);
}

function parseData(result) {
    var percentage = result.seats / 1.5;
    var pollDivje = document.getElementById("poll");

    var balkje = document.createElement('div')
    balkje.classList.add('w3-grey')
    balkje.setAttribute("style", "height:24px;width:" + percentage + "%; margin:20px;");
    pollDivje.appendChild(balkje);
    balkje.innerHTML += "<strong>" + result.party + "</strong>";
    balkje.innerHTML += result.seats + "<br><br>";

}

async function render() {
    const x = await doeHet('results.json');
    console.log(x);
}

render();

const poll = [[{ party: "VVD", seats: 34 }, { party: "CDA", seats: 1 }], { party: "VVD", seats: 12 }, {
    party: "CDA",
    seats: 12
}];
const mergedArray = poll.flat(1);

const average = (array) => array.map(element => element.seats).reduce((vorigeWaarde, huidigeWaarde) => vorigeWaarde + huidigeWaarde, 0) / array.length;
mergedArray.forEach(partyInfo => {
    console.log(average(mergedArray.filter(element => element.party === partyInfo.party)))
});
