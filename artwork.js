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




const images = [
   {src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967873/1759319282010_edit_1638614612593822_dimavh.jpg", category:"seascape", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967874/1759985244005_edit_1822143639008454_b2krjw.jpg", category:"seascape", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967875/1759317008840_edit_1427494412125469_qu33tv.jpg", category:"seascape", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967876/1759317122506_edit_1427473609336545_cl0h2j.jpg", category:"seascape", title:"", date:"2025-10-20"},


{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760936555/received_27982482641398516_zjuuil.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967873/IMG_20220908_204948_edit_2451905575890990_jegyco.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967873/IMG20220908013302_00_edit_2451953947157762_dmqdrv.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967874/IMG20230101122801_00_edit_2451814475207293_buysbz.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967874/IMG20221026205221_00_edit_2451865218401372_dqpsu1.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967877/backupPreview_r1suej.png", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967907/PicsArt_02-20-08.52.59_l86jlp.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967905/sketch1675932361116_kzy4az.png", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967907/PicsArt_02-20-08.52.04_w10pzx.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760979683/1759688777199_edit_1641862801047554_gtwleo.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760979683/1757009361477_edit_13622820943657_k0tbzt.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760979684/1758907161432_z0gtow.png", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760979684/1757449441118_n0zta7.png", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760979684/1756920978751_edit_245858126939115_okpfqr.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760979743/IMG_20250906_000009_ysl127.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760993181/IMG_20241027_212629_ixdv7r.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760993183/IMG_20240904_224541_wdt4ry.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760993183/IMG_20241028_214527_xqwoep.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760993183/Picsart_24-08-20_23-17-32-286_bjkb9c.jpg", category:"hatching", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760993181/IMG_20241028_201524_pr9uym.jpg", category:"hatching", title:"", date:"2025-10-20"},
    
    
    
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760993181/IMG20250208164912_00_ppoudc.jpg", category:"charcoal", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760993184/IMG20220620185131_00_wnb12s.jpg", category:"charcoal", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760993198/FB_IMG_1655710226994_emvs0z.jpg", category:"charcoal", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760994030/1760967359542_edit_2452187970675546_ft3lkw.jpg", category:"charcoal", title:"", date:"2025-10-20"},
    
    
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967907/Untitled_design_20250519_210135_0000_r4qmex.png", category:"Colorful Portrait", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967874/IMG_20250519_211002_edit_1638746607152291_vyvklk.jpg", category:"Colorful Portrait", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967907/1759317840158_edit_1428105976272659_ovfsty.jpg", category:"Colorful Portrait", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967905/1759314970535_edit_1425756511931596_krx1ib.jpg", category:"Colorful Portrait", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967875/IMG-20250525-WA0013_1__edit_2451759271288520_grj3fs.jpg", category:"Colorful Portrait", title:"", date:"2025-10-20"}, 
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760992395/IMG_20251015_134432_edit_2154493258199263_qpwau4.jpg", category:"Colorful Portrait", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760424966/1759315266738_edit_1425647845688436_fculnh.jpg", category:"Colorful Portrait", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967875/1759317194647_edit_1427453207891390_qpbmax.jpg", category:"Colorful Portrait", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967876/1759316651135_edit_1426934925211590_h0szc8.jpg", category:"Colorful Portrait", title:"", date:"2025-10-20"},
    
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967874/1759316367815_edit_1426673856572882_xra2ju.jpg", category:"cityscape", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967877/received_1037284508017193_cqj6az.jpg", category:"cityscape", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967876/IMG_20251001_165513_nonnfm.jpg", category:"cityscape", title:"", date:"2025-10-20"},
    
    
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760994030/1760967290226_edit_2452199518799623_xs4s3b.jpg", category:"abstract", title:"", date:"2025-10-20"},  
    
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760936348/1759305130261_edit_1416806524984370_pcncqz.jpg", category:"2d", title:"y", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1759686666/20250929_203125_0000_edit_1321657132389468_yxxrwe.png", category:"2d", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1759983009/1759304042603_edit_1820030140134943_ufkouv.jpg", category:"2d", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1759983013/Collage_20251006_000142_edit_1819932890777706_uv7fj6.jpg", category:"2d", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1759686662/Untitled_design_20251001_141129_0000_edit_1416651694194207_tbnwrv.png", category:"2d", title:"h", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760994697/IMG-20241020-WA0006_edit_160804101273507_pijvgz.jpg", category:"2d", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760994699/IMG_20250215_092014_ifnnqy.jpg", category:"2d", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760994702/PXL_20241001_121000527.RAW-01.COVER_iftqyc.jpg", category:"2d", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760994699/1759311483293_ou09ko.jpg", category:"2d", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760994728/IMG_20251001_145253_edit_1419124044897739_goktjw.jpg", category:"2d", title:"", date:"2025-10-20"},
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760994701/PXL_20240929_122715072.PORTRAIT.ORIGINAL_edit_173463537812492_rgbb5g.jpg", category:"2d", title:"", date:"2025-10-20"},
    
    
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1759688158/1759603207363_ke2sky.jpg", category:"puja", title:"", date:"2025-10-20"},  
    
{src:"https://res.cloudinary.com/dxiwnqpja/image/upload/v1760967905/1759304575732_edit_1414943162545490_l0xgrh.jpg", category:"Monochrome", title:"", date:"2025-10-20"} ];

  const gallery = document.getElementById("gallery");
  const statsNumber = document.getElementById("statsNumber");
  const statsMenu = document.getElementById("statsMenu");
  const statsBtn = document.getElementById("statsBtn");

  function loadGallery() {
    gallery.innerHTML = "";
    images.forEach(img => {
      const div = document.createElement("div");
      div.className = "gallery-item";
      div.setAttribute("data-category", img.category);
      div.setAttribute("data-title", img.title.toLowerCase());
      div.setAttribute("data-date", img.date);

      const imageEl = document.createElement("img");
      imageEl.src = img.src;
      imageEl.alt = img.title;
      imageEl.onclick = () => openLightbox(img.src);

      const info = document.createElement("div");
      info.className = "image-info";
      info.innerHTML = `${img.title} <br> ${img.date}`;

      div.appendChild(imageEl);
      div.appendChild(info);
      gallery.appendChild(div);
    });
    updateStats();
  }

  function updateStats() {
    const total = images.length;
    statsNumber.textContent = total;
    const categoryCount = {};
    images.forEach(img => categoryCount[img.category] = (categoryCount[img.category] || 0) + 1);

    statsMenu.innerHTML = "";
    for (const [cat, count] of Object.entries(categoryCount)) {
      const btn = document.createElement("button");
      btn.textContent = `${cat}: ${count}`;
      btn.onclick = () => {
        filterGallery(cat);
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        statsMenu.style.display = "none";
      };
      statsMenu.appendChild(btn);
    }
  }

  statsBtn.addEventListener("click", () => {
    statsMenu.style.display = statsMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", e => {
    if (!statsBtn.contains(e.target)) statsMenu.style.display = "none";
  });

  loadGallery();

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterGallery(btn.dataset.category);
    });
  });

  function filterGallery(category) {
    const items = document.querySelectorAll(".gallery-item");
    items.forEach(item => {
      if(category === "all" || item.dataset.category === category) item.style.display = "";
      else item.style.display = "none";
    });
  }

  document.getElementById("searchInput").addEventListener("input", e => {
    const term = e.target.value.toLowerCase();
    const items = document.querySelectorAll(".gallery-item");
    items.forEach(item => {
      const title = item.dataset.title;
      if(title.includes(term)) item.style.display = "";
      else item.style.display = "none";
    });
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  function openLightbox(src){ lightboxImg.src=src; lightbox.style.display="flex"; }
  function closeLightbox(){ lightbox.style.display="none"; }
