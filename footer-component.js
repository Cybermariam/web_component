// footer-component.js
class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <div class="footer">
        <p>Pull from recurring lists</p>
        <div class="button-container first-button">
          <button class="buttons yellow">Daily</button>
          <button class="buttons green">Weekly</button>
        </div>
        <div class="button-container second-button">
          <button class="buttons peach">Monthly</button>
          <button class="buttons lilac">Occasional</button>
        </div>
      </div>
    `;
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'todo.css');

    // Append the link element to the shadow root
    this.shadowRoot.appendChild(link);
  }
}

customElements.define('footer-component', FooterComponent);
