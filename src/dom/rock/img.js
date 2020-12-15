class PlayImage extends HTMLElement {
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' });

        // Maak een afbeelding
        const image = new Image();
        let gameOption = this.getAttribute('gameOption');
        let choice = getObjectByValue(options, gameOption)
        image.src = './img/' + gameOption + '.jpg';

        image.onclick = () =>   play(choice);
        // Voeg de afbeelding toe aan de shadow DOM
        this.shadow.appendChild(image);
    }
}
function getObjectByValue(object, value) {
    return object[Object.keys(object).find(key => object[key] === value)];
}

function play(myChoice) {
    let game = new Game(myChoice);
    let element = document
        .getElementById('outcome');
    element.innerHTML =
        "Ik heb gekozen: " +
        "<play-image gameOption=" + myChoice.toLowerCase() + "></play-image>. " +
        "De computer:" +
        "<play-image gameOption=" + game.computerChoice.toLowerCase() + "></play-image>" +
        "<h2> De uitkomst is: <strong>" + game.outcome.text +
        "</strong></h2>";
    element.style = "background:"+ game.outcome.color;
}

/**
 * Register our custom element
 */
window.addEventListener('DOMContentLoaded', () => {
    customElements.define('play-image', PlayImage);
});

