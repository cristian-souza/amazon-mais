document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.querySelector('.carousel-viewport');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const cards = document.querySelectorAll('.plan-card');

  if (!viewport || !prevBtn || !nextBtn || cards.length === 0) {
    return;
  }

  let currentIndex = 0;
  const totalCards = cards.length;
  let cardWidth = cards[0].offsetWidth + 15; // card width + gap
  let autoPlayInterval;

  const updateCarousel = () => {
    viewport.scrollLeft = currentIndex * cardWidth;
  };

  const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
      currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    }, 5000);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
  };

  const handleResize = () => {
    cardWidth = cards[0].offsetWidth + 15;
    updateCarousel();
  }

  nextBtn.addEventListener('click', () => {
    stopAutoPlay();
    currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
    updateCarousel();
    startAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    stopAutoPlay();
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
    updateCarousel();
    startAutoPlay();
  });

  window.addEventListener('resize', handleResize);

  startAutoPlay();
});