document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
  });



  /*scroll 
  
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

    setInterval(autoScroll, 5000); */

    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    let currentTestimonial = 1;
    let autoScrollInterval;
    function changeTestimonial(testimonialNumber) {
        if (testimonialNumber === currentTestimonial) {
            return;
        }
    
        // Remove the active class from the current dot
        dots[currentTestimonial - 1].classList.remove('active-dot');
    
        // Scroll to the selected testimonial
        testimonialCarousel.scrollTo({
            left: (testimonialNumber - 1) * testimonialCarousel.clientWidth,
            behavior: 'smooth',
        });
    
        // Set the new current testimonial and add active class to the corresponding dot
        currentTestimonial = testimonialNumber;
        dots[currentTestimonial - 1].classList.add('active-dot');
    }
    
    function prevTestimonial() {
        newTestimonial = (currentTestimonial + 1 > 4) ? 1 : currentTestimonial + 1;
        changeTestimonial(newTestimonial);
    }
    
    function nextTestimonial() {
        newTestimonial = (currentTestimonial - 1 < 1) ? 4 : currentTestimonial - 1;
        changeTestimonial(newTestimonial);
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(nextTestimonial, 5000);
    }
    
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }
    
    // Initialize by setting the first dot as active
    dots[currentTestimonial - 1].classList.add('active-dot');
    startAutoScroll();
    // Add event listeners to the previous and next arrows
prevArrow.addEventListener('click', prevTestimonial);
nextArrow.addEventListener('click', nextTestimonial);
    // Change testimonial every 5 seconds
    prevArrow.addEventListener('click', () => {
        prevTestimonial();
        stopAutoScroll();
    });
    nextArrow.addEventListener('click', () => {
        nextTestimonial();
        stopAutoScroll();
    });
    
    // Add event listeners to the dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            changeTestimonial(index + 1);
            stopAutoScroll();
        });
    }); 
    