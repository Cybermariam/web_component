class ToDoList extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
     //<link
    //   rel="stylesheet"
    //   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    // />
    // <link rel="stylesheet" href="style.css">
    
    // <main>
    //   <div class="container">
    //     <div class="first-section">
    //       <i class="fa-solid fa-arrow-left"></i>
    //       <p class="back-list">Back to lists</p>
    //     </div>

    //     <div class="day">
    //       <h2 class="present-day">TODAY</h2>
    //       <button class="add-day">+</button>
    //     </div>

    //     <div class="progress-section">
    //       <div class="progress-container">
    //         <div class="progress-bar"></div>
    //       </div>

    //       <p class="progress-text">33% complete</p>
    //     </div>
    //     <form>
    //       <label>
    //         <input type="checkbox" />
    //         <span class="tick-background"></span>
    //         <p>Meditation</p>
    //       </label>

    //       <label>
    //         <input type="checkbox" />
    //         <span></span>
    //         <p>Pick up Arena</p>
    //       </label>

    //       <label>
    //         <input type="checkbox" />
    //         <span></span>
    //         <p>Set up meeting with Jay</p>
    //       </label>

    //       <label>
    //         <input type="checkbox" />
    //         <span></span>
    //         <p>Finish Daily Ui</p>
    //       </label>
    //       <label>
    //         <input type="checkbox" />
    //         <span></span>
    //         <p>Second edits on article</p>
    //       </label>

    //       <label class="last-child">
    //         <input type="checkbox" />
    //         <span class="tick-background"></span>
    //         <p>Email Chris</p>
    //       </label>
    //     </form>
    //     <div class="footer">
    //       <p>Pull from recurring lists</p>

    //       <div class="button-container first-button">
    //         <button class="buttons yellow">Daily</button>
    //         <button class="buttons green">Weekly</button>
    //       </div>

    //       <div class="button-container second-button">
    //         <button class="buttons peach">Monthly</button>
    //         <button class="buttons lilac">Occasional</button>
    //       </div>
    //     </div>

    //     <!---Container end here-->
    //   </div>
    // </main>
    
    // `;
    // this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('todo-list', ToDoList);
