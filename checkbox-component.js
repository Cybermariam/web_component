class CheckboxComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create the link element for CSS
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'todo.css');
    this.shadowRoot.appendChild(link);

    // Create container elements
    const container = document.createElement('div');
    container.classList.add('checkbox-container');

    // Create the checkbox input element
    const checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('type', 'checkbox');
    checkboxInput.setAttribute('id', this.getAttribute('id'));
    if (this.hasAttribute('checked')) {
      checkboxInput.setAttribute('checked', '');
    }

    // Create the label element
    const label = document.createElement('label');
    label.setAttribute('for', this.getAttribute('id'));

    // Append the slotted content to the label
    const slotContent = this.innerHTML.trim();
    if (slotContent) {
      label.innerHTML = slotContent;
    }

    // Append the input and label elements to the container
    container.appendChild(checkboxInput);
    container.appendChild(label);

    // Append the container to the shadow root
    this.shadowRoot.appendChild(container);

    // Retrieve the checkbox element and add event listener
    this.checkbox = this.shadowRoot.querySelector('input[type="checkbox"]');
    this.checkbox.addEventListener('change', this.handleChange.bind(this));
  }

  handleChange() {
    // Dispatch a custom 'change' event when checkbox state changes
    this.dispatchEvent(
      new CustomEvent('change', { detail: this.checkbox.checked })
    );
  }
}

customElements.define('checkbox-component', CheckboxComponent);
