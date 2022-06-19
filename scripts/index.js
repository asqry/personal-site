let isProjectsPage = window.location.href.split('/').includes('projects');
let isOneProjectPage = window.location.href.match(
  /project\/[a-zA-Z0-9]+\.htm[l]?/gim
);

console.log(isOneProjectPage);

let image = document.getElementById('logo');
let navButton = document.querySelector('.top-left-nav-button-container');

let projectCards = document.querySelectorAll('.content-project-card');

let burger = document.getElementById('burger');
let navbar = document.querySelector('.nav-sidebar');

// Navigation Handling :)

function navigateExternal(route) {
  window.open(route);
}
function navigateInternal(route) {
  window.location = route;
}

// Animations

function startAnimateLogo(img, projects) {
  img.classList.add(projects ? 'slideDown' : 'slideUp');
  console.log(img.classList);
}

function endAnimateLogo(img, projects) {
  navigateInternal(projects ? '/' : '/projects');
}

image.addEventListener('animationend', e =>
  endAnimateLogo(image, isProjectsPage)
);

navButton.addEventListener('click', e => {
  e.preventDefault();

  if (isOneProjectPage) {
    navigateInternal('/projects');
  } else {
    startAnimateLogo(image, isProjectsPage);
  }
});
image.addEventListener('click', e => {
  e.preventDefault();

  startAnimateLogo(image, isProjectsPage);
});

// Opening project pages
projectCards.forEach(card => {
  let project = document.getElementById(card.id.toString());
  console.log(project.id);
  project.onclick = () => {
    console.log('hi');
    navigateInternal(`/projects/project/${card.id}.html`);
  };
});

// burger
burger.addEventListener('click', e => {
  console.log(navbar.classList.contains('hidden'));
  if (navbar.classList.contains('hidden')) {
    navbar.classList.remove('hidden');

    navbar.classList.add('slideLeft');
  } else {
    navbar.classList.add('hidden');
  }

  console.log('clicked');
});
