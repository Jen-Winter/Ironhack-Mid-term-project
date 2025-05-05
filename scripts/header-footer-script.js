// Load and insert html elements to each page //
function showHTML(id, file, callback) {
  fetch(file)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    });
}

// insert regular header and header with hamburger menu functionality and footer elements to each page //
document.addEventListener('DOMContentLoaded', () => {
  showHTML('header', '/html-components/header.html', setupHamburgerMenu);
  showHTML('footer', '/html-components/footer.html');
});

// Hamburger menu functionality //

function setupHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay-menu');
  const closeButton = document.getElementById('close-button');
  const homeLink = document.getElementById('home-overlay-menu');
  const projectsLink = document.getElementById('projects-overlay-menu');
  const servicesLink = document.getElementById('services-overlay-menu');
  const contactButton = document.getElementById('contact-overlay-menu');

  if (hamburger && overlay && closeButton) {
    hamburger.addEventListener('click', () => {
      overlay.classList.add('show');
    });

    closeButton.addEventListener('click', () => {
      overlay.classList.remove('show');
    });

    homeLink.addEventListener('click', () => {
      overlay.classList.remove('show');
    });

    projectsLink.addEventListener('click', () => {
      overlay.classList.remove('show');
    });

    servicesLink.addEventListener('click', () => {
      overlay.classList.remove('show');
    });

    contactButton.addEventListener('click', () => {
      overlay.classList.remove('show');
    });
  }
}

