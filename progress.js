class Progress extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="progress-section">
    <div class="progress-container">
      <div class="progress-bar"></div>
    </div>

    <p class="progress-text">33% complete</p>
  </div>
    `;
  }
}
customElements.define('progress-section', Progress);
