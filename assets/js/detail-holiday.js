const handleSliderAccommodation = function () {
    const slider = $('#swiperAccommodation');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            speed: 1000, loop: true, spaceBetween: 0, slidesPerView: 1, centeredSlides: true, navigation: {
                nextEl: elmSwiper + " .swiper-button__next", prevEl: elmSwiper + " .swiper-button__prev",
            }, breakpoints: {
                375: {
                    slidesPerView: 1,
                }, 425: {
                    slidesPerView: 1.2,
                }, 1024: {
                    slidesPerView: 1.5,
                }, 1440: {
                    slidesPerView: 1.8,
                }
            }
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}

let handleSliderHoliday = function () {
    if ($('.section-holiday').length) {
        $('.section-holiday').each(function () {
            let elm_id = '#' + $(this).attr('id');

            new Swiper(elm_id + ' .swiper', {
                navigation: {
                    nextEl: elm_id + " .swiper-button__next", prevEl: elm_id + " .swiper-button__prev",
                }, slidesPerView: 1.5, loop: true, speed: 1000, // autoplay: {
                //     delay: 6000,
                //     disableOnInteraction: true,
                // },
                spaceBetween: 20, breakpoints: {
                    320: {
                        slidesPerView: 1.5,
                    }, 768: {
                        slidesPerView: 3.2,
                    }, 1024: {
                        slidesPerView: 3.5,
                    }, 1199: {
                        spaceBetween: 28, slidesPerView: 3,
                    }
                }
            });
        });
    }
}
$(function () {
    handleSliderAccommodation()
    handleSliderHoliday()
});