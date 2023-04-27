

const toggleBtn = document.querySelector('#mode-selector');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const btnCon = document.querySelector('#mode-selector');


  toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  main.classList.toggle('dark-mode');
  toggleBtn.classList.toggle('dark-mode');
 
});
