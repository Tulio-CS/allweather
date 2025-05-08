<!-- Swiper + Roboto Font -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

<style>

    html, body {
      overflow-x: hidden;
    }
  :root {
    --custom-font: 'Roboto', sans-serif;
  }

  .swiper.nutrition-swiper {
    width: 100%;
    max-width: 1200px;
    padding: 0;
    overflow: visible;
    margin: 0 auto;
    position: relative;
    font-family: var(--custom-font);
  }

  .swiper.nutrition-swiper .swiper-wrapper {
    min-height: 540px;
  }

  .swiper-slide.nutrition-slide {
    background: white;
    border-radius: 16px;
    padding: 20px 20px 8px 20px; /* less bottom padding */
    height: 520px;
    width: 360px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    text-align: left;
    font-family: var(--custom-font);
  }

  .nutrition-slide .img-wrapper {
    width: 100%;
    aspect-ratio: 1 / 1.05;
    background-color: #fff7f7;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nutrition-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .nutrition-title {
    font-weight: 700;
    font-size: 1.1rem;
    margin-top: 16px;
  }

  .nutrition-description {
    font-size: 0.92rem;
    color: #555;
    margin-top: 8px;
    line-height: 1.4;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: calc(20px + (360px * 1.05 / 2));
    transform: translateY(-50%);
    z-index: 10;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: none;
    border: none;
    box-shadow: none;
  }

  .swiper-button-prev svg,
  .swiper-button-next svg {
    width: 20px;
    height: 20px;
    stroke: #000;
    stroke-width: 2;
    fill: none;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none !important;
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-pagination {
    display: flex !important;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 4px; /* very close to slide bottom */
    left: 0;
    width: 100%;
    gap: 6px;
    pointer-events: auto;
    z-index: 5;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: #ccc;
    border-radius: 999px;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: #1e1e1e;
    width: 20px;
    height: 8px;
    border-radius: 999px;
  }

  @media (max-width: 767px) {
    .swiper-slide.nutrition-slide {
      width: 88vw;
      height: 500px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: flex;
    }

    .swiper-pagination {
      bottom: 50px;
    }
  }
</style>

<!-- Swiper HTML -->
<div class="swiper nutrition-swiper">
  <div class="swiper-wrapper" id="nutrition-slides"></div>
  <div class="swiper-pagination"></div>

  <!-- Custom Arrows -->
  <div class="swiper-button-prev">
    <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" /></svg>
  </div>
  <div class="swiper-button-next">
    <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
  </div>
</div>

<!-- Swiper JS + Script -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  const font = "'Roboto', sans-serif";

  const images = [
    "https://shopbeam.com/cdn/shop/files/pexels-oandremoura-10015239_1.jpg?v=1721164624&width=300",
    "https://shopbeam.com/cdn/shop/files/pexels-oandremoura-10015239_1-1.jpg?v=1721164624&width=300",
    "https://shopbeam.com/cdn/shop/files/pexels-oandremoura-10015239_1-2.jpg?v=1721164624&width=300",
    "https://shopbeam.com/cdn/shop/files/pineapp.jpg?v=1721164742&width=300",
    "https://shopbeam.com/cdn/shop/files/pexels-oandremoura-10015239_1-4.jpg?v=1721164624&width=300",
    "https://shopbeam.com/cdn/shop/files/pexels-oandremoura-10015239_1-5.jpg?v=1721164624&width=300"
  ];

  const headings = [
    "Chaste Tree Berry",
    "Selenium",
    "Manganese",
    "Bromelain",
    "Vitamin A",
    "Ashwagandha"
  ];

  const descriptions = [
    "A fruit from the chaste tree shown to help support symptoms associated with PMS*",
    "A natural mineral found in high protein foods like Brazil Nuts that is shown to help maintain healthy hair growth*",
    "An antioxidant-rich essential mineral found in leafy greens like spinach that supports collagen production for healthier hair, skin, and nails*",
    "An enzyme derived from pineapple to support a healthy inflammatory response*",
    "A powerful antioxidant found in fruits and vegetables that is shown to support thyroid function*",
    "Ashwagandha is shown to support energy levels and stress levels.*"
  ];

  const slidesContainer = document.getElementById('nutrition-slides');

  images.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide nutrition-slide';
    slide.innerHTML = `
      <div class="img-wrapper">
        <img src="${img}" alt="${headings[i]}">
      </div>
      <div class="nutrition-title">${headings[i]}</div>
      <div class="nutrition-description">${descriptions[i]}</div>
    `;
    slidesContainer.appendChild(slide);
  });

new Swiper('.nutrition-swiper', {
    loop: false,
    initialSlide: 1,
    slidesPerView: 1.1,
    spaceBetween: 12,
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2.3,
        spaceBetween: 24,
        initialSlide: 1
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 24,
        initialSlide: 1
      }
    }
  });
</script>
