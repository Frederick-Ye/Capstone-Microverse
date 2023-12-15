document.querySelector('.navbar-toggler').addEventListener('click', () => {
  document.querySelector('.navbar-toggler').classList.add('d-none');
  document.getElementById('closeBtn').classList.remove('d-none');
});

document.getElementById('closeBtn').addEventListener('click', () => {
  document.querySelector('.navbar-toggler').classList.remove('d-none');
  document.getElementById('closeBtn').classList.add('d-none');
});

const more = document.getElementById('moreBtn');
const less = document.getElementById('lessBtn');

more.addEventListener('click', () => {
  document.querySelector('div.dynamic').classList.remove('d-none');
  more.classList.add('d-none');
  less.classList.remove('d-none');
});

less.addEventListener('click', () => {
  document.querySelector('div.dynamic').classList.add('d-none');
  more.classList.remove('d-none');
  less.classList.add('d-none');
});