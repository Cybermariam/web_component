class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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
  </div>`;
  }
}
customElements.define('footer-section', Footer);
