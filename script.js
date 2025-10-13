const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('navbarHamburger');
    const menu = document.getElementById('navbarMenu');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      menu.classList.toggle('open');
      if(menu.classList.contains('open')) {
        navbar.classList.add('menu-open');
      } else {
        navbar.classList.remove('menu-open');
        // Restore scrolled state if needed
        if(window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });

    // Mobile submenu dropdown animation
    document.querySelectorAll('.navbar-menu > li > a').forEach(function(item) {
      item.addEventListener('click', function(e) {
        if(window.innerWidth <= 900) {
          const parent = this.parentElement;
          if(parent.querySelector('.submenu')) {
            e.preventDefault();
            parent.classList.toggle('open');
          }
        }
      });
    });

    // Scroll-based background
    window.addEventListener('scroll', function() {
      if(menu.classList.contains('open')) return; // menu open: always solid
      if(window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(e) {
      if(window.innerWidth <= 900) {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
          menu.classList.remove('open');
          hamburger.classList.remove('open');
          navbar.classList.remove('menu-open');
          document.querySelectorAll('.navbar-menu > li.open').forEach(function(li) {
            li.classList.remove('open');
          });
          if(window.scrollY > 20) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        }
      }
    });

    // Slider content fade on scroll
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  function showNextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }

  // Auto slide every 5 seconds
  setInterval(showNextSlide, 5000);

// News content fade on scroll
// News content fade on scroll
const demoPosts = [
  {
    title: "Wedding Club Interior Design 2025",
    thumbnail: "https://via.placeholder.com/400x200",
    link: "#"
  }
];

function renderNewsCards(posts) {
  const container = document.getElementById('news-container');
  container.innerHTML = "";
  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = "news-card";
    card.innerHTML = `
      ${post.thumbnail ? `<img class="news-thumbnail" src="${post.thumbnail}" alt="Thumbnail">` : ""}
      <h2 class="news-title">${post.title}</h2>
      <a href="${post.link}" class="read-more" target="_blank">Read More</a>
    `;
    container.appendChild(card);
  });
}

// JSONP callback for label-specific feed
function handleBloggerFeed(data) {
  if (data && data.feed && data.feed.entry && data.feed.entry.length > 0) {
    const posts = data.feed.entry.map(entry => {
      let link = "#";
      if (entry.link) {
        const alt = entry.link.find(l => l.rel === 'alternate');
        if (alt && alt.href) link = alt.href;
      }

      // Use first image in content if available
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = entry.content ? entry.content.$t : "";
      const img = tempDiv.querySelector('img');
      const thumbnail = img ? img.src : "https://via.placeholder.com/400x200";

      return {
        title: entry.title.$t,
        thumbnail: thumbnail,
        link: link
      };
    });
    renderNewsCards(posts);
  } else {
    renderNewsCards(demoPosts);
  }
}

// Load label feed dynamically
document.addEventListener('DOMContentLoaded', () => {
  const script = document.createElement('script');
  script.src = 'https://blyere.blogspot.com/feeds/posts/default/-/Projects%20Vlog?alt=json-in-script&callback=handleBloggerFeed&max-results=10';
  document.body.appendChild(script);
});


  // 🔹 Blogger label: "Projects Vlog"
    const blogURL = "https://blyere.blogspot.com";
    const label = "Projects%20Vlog"; // encoded label name
    const feedURL = `${blogURL}/feeds/posts/default/-/${label}?alt=json-in-script&callback=showUpdates`;

    function showUpdates(data) {
      const entries = data.feed.entry || [];
      const track = document.getElementById("newsTrack");

      entries.forEach(post => {
        const title = post.title.$t;
        const link = post.link.find(l => l.rel === "alternate").href;
        const date = new Date(post.published.$t).toDateString();

        // Get HTML content from Blogger API
        const content = post.content ? post.content.$t : "";
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, "text/html");

        // Find first <u> tag or <b>/<strong>
        let tagText = "";
        const uTag = doc.querySelector("u");
        const bTag = doc.querySelector("b, strong");
        if (uTag && uTag.textContent.trim() !== "") {
          tagText = uTag.textContent.trim();
        } else if (bTag && bTag.textContent.trim() !== "") {
          tagText = bTag.textContent.trim();
        }

        const div = document.createElement("div");
        div.className = "news-item";
        div.innerHTML = `
          ${tagText ? `<span class="label">${tagText}</span>` : ""}
          <a href="${link}" target="_blank">${title}</a>
          <span class="date">${date}</span>
        `;
        track.appendChild(div);
      });

      // Duplicate items for continuous scroll
      track.innerHTML += track.innerHTML;
    }

    // Inject Blogger JSONP feed (works on GitHub Pages)
    const script = document.createElement("script");
    script.src = feedURL;
    document.body.appendChild(script);
  
