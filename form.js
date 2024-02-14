class FormInput {
  connectedCallback() {
    this.innerHTML = `
  
          <label>
            <input type="checkbox" />
            <span class="tick-background"></span>
            <p>Meditation</p>
          </label>

          <label>
            <input type="checkbox" />
            <span></span>
            <p>Pick up Arena</p>
          </label>

          <label>
            <input type="checkbox" />
            <span></span>
            <p>Set up meeting with Jay</p>
          </label>

          <label>
            <input type="checkbox" />
            <span></span>
            <p>Finish Daily Ui</p>
          </label>
          <label>
            <input type="checkbox" />
            <span></span>
            <p>Second edits on article</p>
          </label>

          <label class="last-child">
            <input type="checkbox" />
            <span class="tick-background"></span>
            <p>Email Chris</p>
          </label>
        
    `;
  }
}
customElements.define('form-input', FormInput);
