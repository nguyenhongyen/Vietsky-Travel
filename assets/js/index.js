const handleSliderHero = function () {
    const slider = $('#section-hero');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            speed: 2000, loop: true, spaceBetween: 20, slidesPerView: 1, effect: "fade", autoplay: {
                delay: 5000,
            },
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}


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
            let initSliderThumb = handleSwiper(elmSwiper + ' .swiper', objSwiper);
        }
    }
}


let handleSliderHoliday = function () {
    if ($('.section-holiday').length) {
        $('.section-holiday').each(function () {
            let elm_id = '#' + $(this).attr('id');

            new Swiper(elm_id + ' .swiper', {
                navigation: {
                    nextEl: elm_id + " .swiper-button__next",
                    prevEl: elm_id + " .swiper-button__prev",
                }, slidesPerView: 1.5,
                loop: true,
                speed: 1000,
                // autoplay: {
                //     delay: 6000,
                //     disableOnInteraction: true,
                // },
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
            });
        });
    }
}

const handleSliderIntroduce2 = function () {
    const slider = $('#swiperIntroduce2');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            speed: 800, loop: true, spaceBetween: 0, slidesPerView: 1, effect: "fade", navigation: {
                nextEl: elmSwiper + " .swiper-button__next", prevEl: elmSwiper + " .swiper-button__prev",
            },
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}

const handleSliderArticle = function () {
    const slider = $('#swiperArticle');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            speed: 800, loop: true, spaceBetween: 0, slidesPerView: 1, centeredSlides: true, navigation: {
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


const handleSliderTrustpilot = function () {
    const slider = $('#swiperTrustpilot');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            speed: 800, loop: true, spaceBetween: 20, slidesPerView: 1, autoplay: {
                delay: 6000, disableOnInteraction: true,
            }, breakpoints: {
                375: {
                    slidesPerView: 1,
                }, 425: {
                    slidesPerView: 1.2,
                }, 1024: {
                    slidesPerView: 2.2,
                }, 1440: {
                    slidesPerView: 3,
                },

            }
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}

$(function () {
    handleSliderHero()
    handleSliderIntroduce()
    handleSliderHoliday()
    handleSliderIntroduce2()
    handleSliderArticle()
    handleSliderTrustpilot()
});