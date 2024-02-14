class Day extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="day">
    <h2 class="present-day">TODAY</h2>
    <button class="add-day">+</button>
  </div>
    `;
  }
}
customElements.define('present-day', Day);
