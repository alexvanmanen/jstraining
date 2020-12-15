customElements.define('candidate-caption',
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('candidate-caption');
            let templateContent = template.content;

            const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(templateContent.cloneNode(true));
        }
    }
);