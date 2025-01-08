const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,        // Number of slides visible
    spaceBetween: 20,        // Space between slides
    loop: true,              // Loop the slides
    autoplay: {
        delay: 4000,         // Autoplay delay in ms
        disableOnInteraction: false,
    },
    centeredSlides: true,     // Center the active slide
    breakpoints: {
        768: {
            slidesPerView: 2, // 2 slides for medium screens
        },
        480: {
            slidesPerView: 1, // 1 slide for small screens
        }
    }
});
