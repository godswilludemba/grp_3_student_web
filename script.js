
let menuOpen = false;

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('.menu-icon');

  if (menuOpen) {
    navLinks.style.display = 'none';
    menuIcon.textContent = '☰';
  } else {
    navLinks.style.display = 'block';
    menuIcon.textContent = '✕';
  }

  menuOpen = !menuOpen;
}


