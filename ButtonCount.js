// Declaration
/** All custom elements must in some way extend an HTMLElement in order to be registered with the browser. */
class ButtonCount extends HTMLElement{
    constructor() {
        // Always call super first in constructor
        super();

        // Attach a shadow root to the custom element.
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Create a button element inside the shadow root.
        const button = document.createElement('button');
        button.textContent = 'Click me!';

        // Create a counter element inside the shadow root.
        const counter = document.createElement('p');
        counter.textContent = '0';

        // Add an event listener to the button that updates the counter.
        let count = 0;
        button.addEventListener('click', () => {
        count++;
        counter.textContent = count;
        });

        // Add the button and counter elements to the shadow root.
        shadowRoot.appendChild(button);
        shadowRoot.appendChild(counter);
    }
}

// Define the new element
customElements.define("button-count", ButtonCount);