// ===== Elements =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('navbarHamburger');
const menu = document.getElementById('navbarMenu');

// ===== Hamburger toggle =====
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
  navbar.classList.toggle('menu-open', menu.classList.contains('open'));
  if(!menu.classList.contains('open')) checkScroll();
});

// ===== Mobile submenu toggle =====
document.querySelectorAll('.navbar-menu > li > a').forEach(item => {
  item.addEventListener('click', function(e) {
    const parent = this.parentElement;
    const submenu = parent.querySelector('.submenu');

    if (window.innerWidth <= 900 && submenu) {
      e.preventDefault(); // prevent link navigation

      const isOpen = parent.classList.contains('open'); // check if this submenu is already open

      // Close all submenus
      document.querySelectorAll('.navbar-menu > li.open').forEach(li => {
        li.classList.remove('open');
      });

      // Open clicked submenu only if it was not already open
      if (!isOpen) {
        parent.classList.add('open');
      }
    }
  });
});
// ===== Scroll background =====
window.addEventListener('scroll', checkScroll);
function checkScroll() {
  if(menu.classList.contains('open')) return;
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}

// ===== Close menu on outside click =====
document.addEventListener('click', e => {
  if(window.innerWidth <= 900) {
    if(!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      navbar.classList.remove('menu-open');
      document.querySelectorAll('.navbar-menu > li.open').forEach(li => li.classList.remove('open'));
      checkScroll();
    }
  }
});


// Scroll activation for best cards
const bestCards = document.querySelectorAll('.best-card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 1.2;
  bestCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
});

const colors = [
  // dark blue shades
  '#001122', '#002244', '#003366', '#004080',
  // dark gray shades
  '#111111', '#222222', '#333333', '#444444',
  // dark purple shades
  '#2e003e', '#3b0050', '#4a0066', '#5c007a'
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function updateBackgroundSmooth() {
  const color = getRandomColor();
  
  // Smooth transition
  document.body.style.transition = 'background-color 1.5s ease';
  document.body.style.backgroundColor = color;

  // Update browser toolbar color
  let themeMeta = document.querySelector('meta[name="theme-color"]');
  if (!themeMeta) {
    themeMeta = document.createElement('meta');
    themeMeta.name = 'theme-color';
    document.head.appendChild(themeMeta);
  }
  themeMeta.content = color;
}

// Initial setup
updateBackgroundSmooth();
setInterval(updateBackgroundSmooth, 2000);
