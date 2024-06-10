const handleSliderHero = function () {
    const slider = $('#section-hero');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            speed: 2000, loop: true, spaceBetween: 20, slidesPerView: 3, autoplay: {
                delay: 4000,
            }, breakpoints: {
                1200: {
                    slidesPerView: 7, spaceBetween: 30,
                }, 1024: {
                    spaceBetween: 30, slidesPerView: 6,
                }, 768: {
                    spaceBetween: 30, slidesPerView: 4,
                }, 425: {
                    spaceBetween: 30, slidesPerView: 3,
                }, 375: {
                    slidesPerView: 3,
                },
            }
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}

const handleSliderIntroduce = function () {
    const slider = $('#section-introduce');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            loop: true,                         // loop
            slidesPerView: 3,                   // how many slides to show
            centeredSlides: true,               // centering the first slide
            effect: "coverflow",                // applying the coverflow effect
            coverflowEffect: {
                rotate: 0,                      // Rotate of the prev and next slides
                depth: 200,                     // Depth of the prev and next slides
                stretch: 30,                    // Space between the slides
                modifier: 1,                    // Multiply the values of rotate, depth, and stretc
                scale: 1,                       // Size ratio of the prev and next slides
                slideShadows: false,            // Presence of shadow on the surfaces of the prev and next slides
            }, navigation: {                       // navigation(arrows)
                nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev",
            },
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}

$(function () {
    handleSliderHero()
    handleSliderIntroduce()
});