document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
  });



  /*scroll */
  
    const testimonialCarousel = document.querySelector('.testimonial-carousel');

    let scrollAmount = 0;

    function autoScroll() {
        scrollAmount += 1;
        if (scrollAmount >= testimonialCarousel.scrollWidth - testimonialCarousel.clientWidth) {
            scrollAmount = 0;
        }
        testimonialCarousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth',
        });
    }

    setInterval(autoScroll, 5000); // Adjust the interval as needed

