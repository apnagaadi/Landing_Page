document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
  });



  /*scroll */
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const dotContainer = document.querySelector('.pagination');
    
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const itemWidth = testimonialItems[0].offsetWidth+20;
    
    let currentIndex = 0;
    
    function updatePagination() {
      dotContainer.innerHTML = '';
      testimonialItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === currentIndex) {
          dot.classList.add('active');
        }
        dotContainer.appendChild(dot);
        dot.addEventListener('click', () => {
          goToSlide(index);
        });
      });
    }
    
    function goToSlide(index) {
      currentIndex = index;
      const translateX = -(currentIndex * itemWidth);
      testimonialCarousel.style.transform = `translateX(${translateX}px)`;
      updatePagination();
    }
    
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    });
    
    nextButton.addEventListener('click', () => {
      if (currentIndex < testimonialItems.length - 1) {
        goToSlide(currentIndex + 1);
      }
    });
    
    updatePagination();
    
    // Automatically cycle through slides every 5 seconds
    let intervalId;
    
    function startAutoSlide() {
      intervalId = setInterval(() => {
        if (currentIndex < testimonialItems.length - 1) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(0);
        }
      }, 5000);
    }
    
    function stopAutoSlide() {
      clearInterval(intervalId);
    }
    
    startAutoSlide();
    
    // Pause auto slide on user interaction
    testimonialCarousel.addEventListener('mouseenter', stopAutoSlide);
    testimonialCarousel.addEventListener('mouseleave', startAutoSlide);
