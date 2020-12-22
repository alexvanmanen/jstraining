import {Graphics} from "./Graphics.js";

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


async function retrieveVotingData() {
    let votingData = await goldenRetriever('results.json');
    votingData = votingData.concat(await goldenRetriever('resultsAlphen.json'))
    votingData = votingData.concat(await goldenRetriever('resultsUtrecht.json'));
    return votingData.flat(1);
}

async function render() {

    try {
        let votingData = await retrieveVotingData();
        new Graphics().renderBarForAllParties(votingData);
    } catch (e) {
        console.log("het ging mis: " + e);
    }
}

render();




