<!-- SWIPER HTML + CSS + JS (Mobile Dots Left, Rounded Rectangle Active) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>

<style>
  .swiper {
    width: 100%;
    max-width: 450px;
    height: 440px;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    margin: auto;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .thumbs-overlay {
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    z-index: 10;
  }

  .thumb {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    opacity: 0.4;
    border: 2px solid transparent;
    transition: opacity 0.3s, border-color 0.3s;
    cursor: pointer;
  }

  .thumb.active {
    opacity: 1;
    border-color: #000;
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  /* Hide thumbs on mobile */
  @media (max-width: 768px) {
    .thumbs-overlay {
      display: none;
    }

    .swiper .swiper-pagination {
      bottom: 12px !important;
      left: 12px !important;
      width: auto !important;
      display: flex !important;
      justify-content: flex-start !important;
      gap: 6px;
    }

    .swiper .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: rgba(255, 255, 255, 0.6);
      opacity: 1;
      border-radius: 50%;
      transition: all 0.3s;
    }

    .swiper .swiper-pagination-bullet-active {
      width: 20px;
      height: 8px;
      border-radius: 8px;
      background: white;
    }
  }
  
  @media (min-width: 769px) {
  .swiper .swiper-pagination {
    display: none !important;
  }
}
</style>

<div class="swiper main-swiper">
  <div class="swiper-wrapper" id="swiper-slides"></div>
  <div class="swiper-pagination"></div>
  <div class="thumbs-overlay" id="swiper-thumbs"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  const imageLinks = [
    "https://cdn.shopify.com/s/files/1/0720/1443/0436/files/ALLWEATHER_ESTUDIO3499.jpg?v=1741723563",
    "https://cdn.shopify.com/s/files/1/0720/1443/0436/files/ALLWEATHER_ESTUDIO3488_59a82cf0-4c20-4dff-8fc2-9d02ab68ae67.jpg?v=1741722310",
    "https://cdn.shopify.com/s/files/1/0720/1443/0436/files/ALLWEATHER_ESTUDIO3483.jpg?v=1741721307",
    "https://cdn.shopify.com/s/files/1/0720/1443/0436/files/Copia_de_ALLWEATHER_ESTUDIO3463.jpg?v=1744392931",
    "https://cdn.shopify.com/s/files/1/0720/1443/0436/files/Copia_de_ALLWEATHER_ESTUDIO3375.jpg?v=1744392931"
  ];

  const slidesContainer = document.getElementById('swiper-slides');
  const thumbsContainer = document.getElementById('swiper-thumbs');

  imageLinks.forEach(link => {
    slidesContainer.innerHTML += `<div class="swiper-slide"><img src="${link}" /></div>`;
    thumbsContainer.innerHTML += `<div class="thumb"><img src="${link}" /></div>`;
  });

  const swiper = new Swiper('.main-swiper', {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      swiper.slideTo(index);
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  thumbs[0]?.classList.add('active');

  swiper.on('slideChange', () => {
    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[swiper.realIndex]?.classList.add('active');
  });
</script>
