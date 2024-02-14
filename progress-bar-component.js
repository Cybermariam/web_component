class ProgressBarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Link the CSS file
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'todo.css');
    this.shadowRoot.appendChild(link);

    // Define the HTML content for the progress bar
    this.shadowRoot.innerHTML = `
      <div class="progress-container">
        <div class="progress-bar"></div>
      </div>
      <p id="progressPercentage">0% complete</p>
    `;

    // Retrieve the progress bar element and progress text element
    this.progressBar = this.shadowRoot.querySelector('.progress-bar');
    this.progressText = this.shadowRoot.getElementById('progressPercentage');

    // Add event listener to checkboxes for updating progress bar
    const checkboxes = this.shadowRoot.querySelectorAll(
      'input[type="checkbox"]'
    );
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', this.updateProgressBar.bind(this));
    });

    // Initial update of the progress bar
    this.updateProgressBar();
  }

  // Update progress bar based on checked checkboxes
  updateProgressBar() {
    const checkboxes = this.shadowRoot.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    const progressValue = checkboxes.length * (100 / checkboxes.length);

    this.progressBar.style.width = `${progressValue}%`;
    this.progressText.textContent = `${progressValue.toFixed(2)}%`;

    // Set progress bar color based on progress value
    if (progressValue < 33.33) {
      this.progressBar.style.backgroundColor = '#ff6666';
    } else if (progressValue < 66.66) {
      this.progressBar.style.backgroundColor = '#8686c1';
    } else {
      this.progressBar.style.backgroundColor = '#66ff66';
    }
  }
}

customElements.define('progress-bar-component', ProgressBarComponent);
