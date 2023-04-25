

const toggleBtn = document.querySelector('#mode-selector');
const container = document.querySelector('body');
const main = document.querySelector('.main');
const btnCon = document.querySelector('.btn-con');
const footer = document.querySelector('footer');

  toggleBtn.addEventListener('click', function() {
  container.classList.toggle('dark-mode');
  main.classList.toggle('dark-mode');
  toggleBtn.classList.toggle('dark-mode');
  footer.classList.toogle('dark-mode');
});
