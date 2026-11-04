const button = document.querySelector('#showMore');
const moreText = document.querySelector('#moreText');

button.addEventListener('click', () => {
  if (moreText.style.display === 'none') {
    moreText.style.display = 'block';
    button.textContent = 'Скрыть';
  } else {
    moreText.style.display = 'none';
    button.textContent = 'Подробнее';
  }
});
