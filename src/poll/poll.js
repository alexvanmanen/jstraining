function laad(bestanden) {


    bestanden.forEach((bestand) => {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                showPoll(JSON.parse(this.responseText));
            }
        }
        xhttp.open("GET", bestand, true);
        xhttp.send();
    });

}

function showPoll(data) {
    data.forEach(parseData);
}

function calculateAverage(data){
    console.log(data);

    // data.map(element => element.seats).reduce( ( p, c ) => p + c, 0 );
}

function parseData(result){
    var percentage = result.seats / 1.5;
    var pollDivje = document.getElementById("poll");

    var balkje = document.createElement('div')
    balkje.classList.add('w3-grey')
    balkje.setAttribute("style", "height:24px;width:" + percentage + "%; margin:20px;");
    pollDivje.appendChild(balkje);
    balkje.innerHTML += "<strong>" + result.party + "</strong>";
    balkje.innerHTML +=  result.seats + "<br><br>";

}

laad(['results.json', 'resultsAlphenadRijn.json', 'resultsUtrecht.json']);