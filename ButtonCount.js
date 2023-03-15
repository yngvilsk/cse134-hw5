// Declaration
/** All custom elements must in some way extend an HTMLElement in order to be registered with the browser. */
class ButtonCount extends HTMLElement{
    constructor() {
        // Always call super first in constructor
        super();

        // Attach a shadow root to the custom element.
        const shadowRoot = this.attachShadow({ mode: 'open' });

        let count = 0;

        // Create a button element inside the shadow root.
        const button = document.createElement('button');
        button.textContent = `Times clicked: ${count}`;

        // Add an event listener to the button that updates the counter.
        button.addEventListener('click', () => {
            count++;
            //button.textContent = `Times clicked: ${count}`;
        });

        // Add the button and counter elements to the shadow root.
        shadowRoot.appendChild(button);
    }
}

// Define the new element
customElements.define("button-count", ButtonCount);