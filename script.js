// nav bar start
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const submenuToggle = document.querySelector('.submenu-toggle');
const mobileSubmenuItems = document.querySelector('.mobile-submenu-items');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Toggle submenu in mobile
submenuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileSubmenuItems.style.display = mobileSubmenuItems.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile submenu and menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileSubmenuItems.contains(e.target) && !submenuToggle.contains(e.target)) {
    mobileSubmenuItems.style.display = 'none';
  }
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    mobileMenu.style.display = 'none';
    hamburger.classList.remove('active');
  }
});
// nav end
//f&q
  const faqButtons = document.querySelectorAll('.faq-btn');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      answer.classList.toggle('hidden');
    });
  });
//f&q end
// blogger start
function displayBloggerPost(data) {
    const entry = data.feed.entry[0];

    // Post title
    const title = entry.title.$t;

    // Post content
    const content = entry.content.$t;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    // First 3 images
    const imgs = Array.from(tempDiv.querySelectorAll('img')).slice(0, 3);
    const gallery = document.querySelector('#gallery');
    gallery.innerHTML = '';
    imgs.forEach(img => {
        const div = document.createElement('div');
        div.className = 'p-1 sm:p-2 bg-white border-2 border-black shadow-lg w-24 h-32 sm:w-36 sm:h-48 md:w-48 md:h-64 flex items-center justify-center';
        const image = document.createElement('img');
        image.src = img.src;
        image.alt = img.alt || title;
        image.className = 'w-full h-full object-cover';
        div.appendChild(image);
        gallery.appendChild(div);
    });

    // Underlined text
    const underlined = Array.from(tempDiv.querySelectorAll('u')).map(u => u.innerText).join(' ');
    document.querySelector('#edition-details').innerText = underlined;

    // Set edition title
    document.querySelector('#edition-title').innerText = `Upcoming Edition: ${title}`;
}

// Create JSONP script
const script = document.createElement('script');
script.src = 'https://blyere.blogspot.com/feeds/posts/default/-/pictures?alt=json-in-script&max-results=1&callback=displayBloggerPost';
document.body.appendChild(script);
// end
