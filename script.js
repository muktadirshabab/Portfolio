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


const colors = [
  // dark blue shades
  '#8A8EB6', '#3A3A46', '#8C90B5', '#354990',
  // dark gray shades
  '#0F1038', '#8C90AA', '#9599BC', '#474958',
  // dark purple shades
  '#1A1B51', '#454267', '#0D123A', '#222F97'
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function updateBackgroundSmooth() {
  const color = getRandomColor();
  
  // Smooth transition for body
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

  // Update CSS root variables
  const root = document.documentElement;
  root.style.setProperty('--color-nav-solid', color);
  // For dark variant, make it a bit darker
  const darkColor = shadeColor(color, -30);
  root.style.setProperty('--color-nav-dark', darkColor);
}

// Helper function to darken/lighten color
function shadeColor(color, percent) {
  let f = parseInt(color.slice(1),16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent*-1 : percent;
  let R = f>>16, G = f>>8&0x00FF, B = f&0x0000FF;
  return "#" + (0x1000000 + (Math.round((t-R)*p/100)+R)*0x10000 + (Math.round((t-G)*p/100)+G)*0x100 + (Math.round((t-B)*p/100)+B)).toString(16).slice(1);
}

// Initial setup
updateBackgroundSmooth();
setInterval(updateBackgroundSmooth, 2000);
