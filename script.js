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
    Name: 'John Doe',
    Job: 'Software Engineer',
    detail: 'Responsible for developing and maintaining software applications, collaborating with cross-functional teams, and ensuring code quality.'
  },
  {
    Image: './images/speaker2.jpg',
    Name: 'Jane Smith',
    Job: 'Marketing Specialist',
    detail: 'Manages marketing campaigns, conducts market research, and develops strategies to promote the company products and services.'
  },
  {
    Image: './images/speaker3.jpg',
    Name: 'Robert Johnson',
    Job: 'Financial Analyst',
    detail: 'Analyzes financial data, prepares reports, and provides insights to support strategic financial decision-making within the company.'
  },
  {
    Image: './images/speaker4.jpg',
    Name: 'John Doe',
    Job: 'Software Engineer',
    detail: 'Responsible for developing and maintaining software applications, collaborating with cross-functional teams, and ensuring code quality.'
  },
  {
    Image: './images/speaker5.jpg',
    Name: 'Amy Williams',
    Job: 'UX/UI Designer',
    detail: 'Creates user-centric designs for digital products, conducts user research, and collaborates with development teams to implement designs.'
  },
  {
    Image: './images/speaker6.jpg',
    Name: 'Michael Brown',
    Job: 'Human Resources Manager',
    detail: 'Oversees HR functions, including recruitment, employee relations, performance management, and development of HR policies.'
  }
];

function getdynamicHtml(speaker) {
  const html = `<div class="speaker">
  <div>
    <img src="${speaker.Image}" class="speaker-img">
  </div> 
  <div class="speaker-right">
    <p class="name">${speaker.Name}</p>
    <p class="title">${speaker.Job}</p>
    <hr class="underline">
    <p>${speaker.detail}</p>
  </div>
</div>`
  return html
}

function showDynamic() {
  const screenWidth = window.innerWidth;
  const displayedSpeakers = screenWidth < 768 ? [speakers[0], speakers[1]] : speakers;
  const displayedSpeakersHtml = displayedSpeakers.map(getdynamicHtml).join('');
  dynamic.innerHTML = displayedSpeakersHtml;
}

function closeDynamic() {
  showDynamic();
  less.classList.add('hidden');
  more.classList.remove('hidden');
}

showDynamic();

window.addEventListener('resize', showDynamic);

more.addEventListener('click', () => {
  const allSpeakersHtml = speakers.map(getdynamicHtml).join('');
  dynamic.innerHTML = allSpeakersHtml;
  less.classList.remove('hidden');
  more.classList.add('hidden');
});

less.addEventListener('click', closeDynamic);