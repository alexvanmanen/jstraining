class PlayImage extends HTMLElement {
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' });

        // Maak een afbeelding
        const image = new Image();
        let gameOption = this.getAttribute('name');
        let choice = getObjectByValue(options, gameOption)
        image.src = './img/' + gameOption + '.jpg';

        image.onclick = () =>   play(choice);
        // Voeg de afbeelding toe aan de shadow DOM
        this.shadow.appendChild(image);
    }
}

customElements.define('rock-paper',
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('rock-paper');
            let templateContent = template.content;

            const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(templateContent.cloneNode(true));
        }
    }   
);

function getObjectByValue(object, value) {
    return object[Object.keys(object).find(key => object[key] === value)];
}

function play(myChoice) {
    let game = new Game(myChoice);
    let element = document
        .getElementById('outcome');
    element.innerHTML =
        "Ik heb gekozen: " +
        "<play-image name=" + myChoice.toLowerCase() + "></play-image>. " +
        "De computer:" +
        "<play-image name=" + game.computerChoice.toLowerCase() + "></play-image>" +
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

