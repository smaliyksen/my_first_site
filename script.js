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

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
  if (themeToggle) themeToggle.textContent = 'Светлая тема';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = 'Светлая тема';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = 'Тёмная тема';
    }
  });
}