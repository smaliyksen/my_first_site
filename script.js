const button = document.querySelector('#showMore');
const moreText = document.querySelector('#moreText');

if (button) {
  button.addEventListener('click', () => {
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      button.textContent = 'Скрыть';
    } else {
      moreText.style.display = 'none';
      button.textContent = 'Подробнее';
    }
  });
}


const themeToggle = document.querySelector('#themeToggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
      themeToggle.textContent = 'Светлая тема';
    } else {
      themeToggle.textContent = 'Тёмная тема';
    }
  });
}
