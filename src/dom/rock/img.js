class PlayImage extends HTMLElement {
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' });

        // Maak een afbeelding
        const image = new Image();
        let gameOption = this.getAttribute('gameOption');
        let result = getObjectByValue(options, gameOption)
        image.src = './img/' + gameOption + '.jpg';

        image.onclick = () =>  play(result);
        // Voeg de afbeelding toe aan de shadow DOM
        this.shadow.appendChild(image);
    }
}
function getObjectByValue(object, value) {
    return object[Object.keys(object).find(key => object[key] === value)];
}

/**
 * Register our custom element
 */
window.addEventListener('DOMContentLoaded', () => {
    customElements.define('play-image', PlayImage);
});

