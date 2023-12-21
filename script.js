document.querySelector('.navbar-toggler').addEventListener('click', () => {
  document.querySelector('.navbar-toggler').classList.add('d-none');
  document.getElementById('closeBtn').classList.remove('d-none');
});

document.getElementById('closeBtn').addEventListener('click', () => {
  document.querySelector('.navbar-toggler').classList.remove('d-none');
  document.getElementById('closeBtn').classList.add('d-none');
});

// const more = document.getElementById('moreBtn');
// const less = document.getElementById('lessBtn');
// const dynamicItems = document.querySelectorAll('.dynamic');

// more.addEventListener('click', () => {
//   dynamicItems.forEach(function(element) {
//     element.classList.remove('hidden')
//   });
//   more.classList.add('hidden');
//   less.classList.remove('hidden');
// });

// less.addEventListener('click', () => {
//   dynamicItems.forEach(function(element) {
//     element.classList.add('hidden')
//   });
//   more.classList.remove('hidden');
//   less.classList.add('hidden');
// });
const dynamic = document.querySelector('.speaker-container');
const more = document.getElementById('moreBtn');
const less = document.getElementById('lessBtn');
const speakers = [
  {
    Image: './images/speaker1.jpg',
    Name: 'Alice Johnson',
    Job: 'Senior Software Engineer',
    detail: 'Alice is responsible for designing and implementing complex software solutions. She collaborates with cross-functional teams.',
  },
  {
    Image: './images/speaker2.jpg',
    Name: 'David Rodriguez',
    Job: 'Marketing Manager',
    detail: 'David oversees the company marketing strategies, including digital campaigns, events, and brand promotion.',
  },
  {
    Image: './images/speaker3.jpg',
    Name: 'Emily Chen',
    Job: 'Financial Analyst',
    detail: 'Emily is responsible for analyzing financial data, preparing reports, and providing insights to support strategic decision-making.',
  },
  {
    Image: './images/speaker5.jpg',
    Name: 'Michael Turner',
    Job: 'Human Resources Specialist',
    detail: 'Michael manages HR processes, including recruitment, onboarding, and employee relations.',
  },
  {
    Image: './images/speaker4.jpg',
    Name: 'Sophia Patel',
    Job: 'UX/UI Designer',
    detail: 'Sophia specializes in creating intuitive and visually appealing user interfaces. She collaborates with product teams.',
  },
  {
    Image: './images/speaker6.jpg',
    Name: 'Michael Brown',
    Job: 'Human Resources Manager',
    detail: 'Oversees HR functions, including recruitment, employee relations, performance management, and development of HR policies.',
  },
];

function getdynamicHtml(speaker) {
  const html = `<div class="speaker">
  <div class="image-container">
    <img src="./images/background icon.png" class="speaker-bg">
    <img src="${speaker.Image}" class="speaker-img">
  </div> 
  <div class="speaker-right">
    <p class="name">${speaker.Name}</p>
    <p class="title">${speaker.Job}</p>
    <hr class="underline">
    <p>${speaker.detail}</p>
  </div>
</div>`;
  return html;
}

function showDynamic() {
  const screenWidth = window.innerWidth;
  const displayedSpeakers = screenWidth < 768 ? [speakers[0], speakers[1]] : speakers;
  const displayedSpeakersHtml = displayedSpeakers.map(getdynamicHtml).join('');
  dynamic.innerHTML = displayedSpeakersHtml;
}

function closeDynamic() {
  showDynamic();
  more.classList.remove('hidden');
  less.classList.add('hidden');
}

showDynamic();

function openDynamic() {
  const allSpeakersHtml = speakers.map(getdynamicHtml).join('');
  dynamic.innerHTML = allSpeakersHtml;
  less.classList.remove('hidden');
  more.classList.add('hidden');
}

more.addEventListener('click', openDynamic);
less.addEventListener('click', closeDynamic);

function openDynamicIfNeeded() {
  if (window.innerWidth >= 768) {
    openDynamic();
  } else if (window.innerWidth <= 375) {
    closeDynamic();
  }
}

window.addEventListener('resize', openDynamicIfNeeded);
openDynamicIfNeeded();