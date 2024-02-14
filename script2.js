// target the checkbox and on click the style s\hould be green and check
const spans = document.querySelectorAll('span');

spans.forEach(span => {
  span.addEventListener('click', function () {
    span.innerHTML = `
  <style>

  label {
    position: relative;
    display: flex;
    gap: 12px;
    cursor: pointer;
    margin-left: -8px;
    margin-bottom: 22px;
  }
  
 
  label span {
    position: relative;
    width: 17px;
    height: 17px;
    border: 1px solid #b8b8b8;
    border-radius: 50%;
  }
  /*ul li */
  label span:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 4px;
    width: 8px;
    height: 3px;
    border-left: 1.5px solid #fff;
    border-bottom: 1.5px solid #fff;
    transform: rotate(-40deg);
  }
  label p {
    color: #c8c8f3;
  }
  .tick-background {
    border: none;
    background-color: #b5ea81;
  }
  .last-child {
    border-bottom: 1px solid #e5e5f5;
    padding-bottom: 20px;
  }
  
    </style>`;
  });
});
// progress bar will
