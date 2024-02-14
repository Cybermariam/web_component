class ProgressBar extends HTMLElement {
  static css = `
        :host {
            display: block;
            width: 250px;
            height: 40px;
            background: #eeeeee;
            border-radius: 4px;
            overflow: hidden;
        }

        .progress-bar {
            width: 0%;
            height: 100%;
            background-color: #222222;
            transition: width 0.25s;
        }
    `;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.innerHTML = ProgressBar.css;

    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-bar');

    this.shadowRoot.append(style, progressContainer);
  }

  connectedCallback() {
    this.updateProgressBar();

    const checkboxes = this.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', this.updateProgressBar.bind(this));
    });
  }

  updateProgressBar() {
    const checkboxes = this.querySelectorAll('input[type="checkbox"]');
    const checkedCheckboxes = this.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const progressContainer = this.shadowRoot.querySelector('.progress-bar');

    const progressValue = (checkedCheckboxes.length / checkboxes.length) * 100;
    progressContainer.style.width = `${progressValue}%`;

    if (progressValue < 33.33) {
      progressContainer.style.backgroundColor = '#ff6666';
    } else if (progressValue < 66.66) {
      progressContainer.style.backgroundColor = '#8686c1';
    } else {
      progressContainer.style.backgroundColor = '#66ff66';
    }
  }
}

customElements.define('progress-bar', ProgressBar);
