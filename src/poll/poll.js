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

async function render() {
    let x = await doeHet('results.json');
    x = x.concat(await doeHet('resultsAlphen.json'))
    x = x.concat(await doeHet('resultsUtrecht.json'));

    const partyInfoArray = x.flat(1);
    let partySet = new Set();
    partyInfoArray.map(partyInfo => partyInfo.party).forEach( party => partySet.add(party));
    console.log(partySet);
    const average = (array) => array.map(element => element.seats).reduce((vorigeWaarde, huidigeWaarde) => vorigeWaarde + huidigeWaarde, 0) / array.length;
    let numberSeats = 0;
    partySet.forEach(party => {
        numberSeats += (average(partyInfoArray.filter(element => element.party === party)));
    });

    console.log(Math.round(numberSeats));

    partySet.forEach(party => {
        parseData({party: party, seats: average(partyInfoArray.filter(element => element.party === party))})
    });
}


render();




