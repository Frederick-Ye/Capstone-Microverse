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
const dynamicItems = document.querySelectorAll('.dynamic');

more.addEventListener('click', () => {
  dynamicItems.forEach(function(element) {
    element.classList.remove('hidden')
  });
  more.classList.add('hidden');
  less.classList.remove('hidden');
});

less.addEventListener('click', () => {
  dynamicItems.forEach(function(element) {
    element.classList.add('hidden')
  });
  more.classList.remove('hidden');
  less.classList.add('hidden');
});