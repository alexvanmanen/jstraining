function doeHet() {
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
        xhttp.open("GET", "results.json", true);
        xhttp.send();
        }
    );
}

let promise1 = new Promise(function (resolve, reject) {
    function laad(bestand) {
        bestand = "results.json";
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            }
        }

        xhttp.open("GET", bestand, true);
        xhttp.send();
    }
});

function resolveNa4Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved 4 seconden');
        }, 2000);
    });
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
    const x = await doeHet();
    console.log(x);
    console.log(await resolveNa4Seconds());
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
