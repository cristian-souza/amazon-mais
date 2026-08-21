document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.querySelector('.carousel-viewport');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const cards = document.querySelectorAll('.plan-card');

  if (!viewport || !prevBtn || !nextBtn || cards.length === 0) {
    return;
  }

  const CARD_GAP = 24; // deve bater com o "gap" de .plan-cards-container no CSS
  let currentIndex = 0;
  const totalCards = cards.length;
  let cardWidth = cards[0].offsetWidth + CARD_GAP;
  let autoPlayInterval;

  const updateCarousel = () => {
    viewport.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
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
    cardWidth = cards[0].offsetWidth + CARD_GAP;
    updateCarousel();
  };

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
