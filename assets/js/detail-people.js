const handleSliderIntroduce = function () {
    const sliderIntroActive = $('#section-introduce-active');
    const sliderIntro = $('#section-introduce');

    if (sliderIntroActive.length) {
        const elmSwiperAvatar = '#' + sliderIntroActive.attr('id')
        const objSwiperAvatar = {
            slidesPerView: 1, effect: "fade", allowTouchMove: false, speed: 0,
        }

        let initSliderAvatar = handleSwiper(elmSwiperAvatar + ' .swiper', objSwiperAvatar);

        if (sliderIntro.length > 0) {
            const elmSwiper = '#' + sliderIntro.attr('id')
            const objSwiper = {
                effect: "coverflow",
                loop: 1,
                grabCursor: !0,
                direction: "horizontal",
                centeredSlides: 1,
                speed: 800,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 20, stretch: 1, depth: 500, modifier: 1, slideShadows: !0
                },
                thumbs: {
                    swiper: initSliderAvatar,
                },
                navigation: {
                    nextEl: "#section-introduce .swiper-button__next",
                    prevEl: "#section-introduce .swiper-button__prev",
                },
                breakpoints: {
                    1440: {
                        slidesPerView: 'auto',
                    },
                },
            }
            handleSwiper(elmSwiper + ' .swiper', objSwiper);
        }
    }
}


const handleSliderHoliday = function () {
    const slider = $('#swiperHoliday');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            navigation: {
                nextEl: elmSwiper + " .swiper-button__next",
                prevEl: elmSwiper + " .swiper-button__prev",
            },
            slidesPerView: 1.5,
            loop: true,
            speed: 1000,
            spaceBetween: 20,
            breakpoints: {
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
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}

const handleSliderPeople = function () {
    const slider = $('#swiperPeople');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            navigation: {
                nextEl: elmSwiper + " .swiper-button__next",
                prevEl: elmSwiper + " .swiper-button__prev",
            },
            slidesPerView: 1.5,
            loop: true,
            speed: 1000,
            spaceBetween: 20,
            breakpoints: {
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
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}
$(function () {

    handleSliderIntroduce()
    handleSliderHoliday()
    handleSliderPeople()
});