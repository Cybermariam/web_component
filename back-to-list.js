class BackToList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
   <div class="first-section">
    <i class="fa-solid fa-arrow-left"></i>
    <p class="back-list">Back to lists</p>
 </div>
    `;
  }
}
customElements.define('back-to-list', BackToList);
