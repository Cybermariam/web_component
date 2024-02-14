const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const progressBar = document.querySelector('.progress-bar');

const progressText = document.getElementById('progressPercentage');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateProgressBar);
});

function updateProgressBar() {
  const checkedCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const progressValue = checkedCheckboxes.length * (100 / checkboxes.length);
  progressBar.style.width = `${progressValue}%`;
  progressText.textContent = `${progressValue.toFixed(2)}%`;

  if (progressValue < 33.33) {
    progressBar.style.backgroundColor = '#ff6666';
  } else if (progressValue < 66.66) {
    progressBar.style.backgroundColor = ' #8686c1';
  } else {
    progressBar.style.backgroundColor = '#66ff66';
  }
}

updateProgressBar();
