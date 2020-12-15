class CandidateImage extends HTMLElement {
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' });

        // Maak een afbeelding
        const image = new Image(200);
        let firstName = this.getAttribute('firstname');
        let lastName = this.getAttribute('lastname');
        image.src = './img/'+firstName+lastName+'.jpg';
        // Voeg de afbeelding toe aan de shadow DOM
        this.shadow.appendChild(image);
        //this.addName(firstName + " " + lastName);
        this.createStyles();
    }

    // addName(name) {
    //     const nameSpan = document.createElement('span');
    //     nameSpan.classList.add('winner');
    //     nameSpan.innerText = name;
    //     this.shadow.appendChild(nameSpan);
    // }

    createStyles() {

        const styleTemplate = `
            <style>
            .winner {
              position: absolute;
              color: blue;
              font-size: 10px;
              top: 10px;
              left: 10px;
              height: 30px;
              font-weight: 800;
              text-transform: uppercase;
            }
            </style>`;
        this.shadow.innerHTML += styleTemplate;
    }
}

/**
 * Register our custom element
 */
window.addEventListener('DOMContentLoaded', () => {
    customElements.define('candidate-image', CandidateImage);
});



