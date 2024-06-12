const handleSliderHero = function () {
    const slider = $('#section-hero');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            speed: 2000, loop: true,
            spaceBetween: 20,
            slidesPerView: 1,
            effect: "fade",
            autoplay: {
                delay: 5000,
            },
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}

const handleSliderIntroduce = function () {
    const sliderIntroActive = $('#section-introduce-active');
    const sliderIntro = $('#section-introduce');


    if(sliderIntroActive.length){
        const elmSwiperAvatar = '#' + sliderIntroActive.attr('id')
        const objSwiperAvatar = {
            slidesPerView: 1,
            effect: "fade",
        }

        initSliderAvatar = handleSwiper(elmSwiperAvatar + ' .swiper', objSwiperAvatar);


        if (sliderIntro.length > 0) {
            const elmSwiper = '#' + sliderIntro.attr('id')
            const objSwiper = {
                slidesPerView: 1.5,
                centeredSlides: true,
                effect: "coverflow",
                freeMode: true,
                coverflowEffect: {
                    rotate: 20,
                    stretch: 1,
                    depth: 500,
                    modifier: 1,
                    slideShadows: !0
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
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                },
            }
            initSliderThumb = handleSwiper(elmSwiper + ' .swiper', objSwiper);

        }
    }


}

const handleSearch = function () {
    let inputSearch = $('#input-search');
    if(inputSearch.length){
        inputSearch.keyup(function (e) {
            if (inputSearch !== '') {
                $('body').addClass('is-result-search');
            } else {
                $('body').removeClass('is-result-search');
            }

        })
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
                },
                slidesPerView: 1.5,
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
                    },
                    768: {
                        slidesPerView: 3.2,
                    },
                    1024: {
                        slidesPerView: 3.5,
                    },
                    1199: {
                        spaceBetween: 28,
                        slidesPerView: 3,
                    }
                }
            });
        });
    }
}

$(function () {
    handleSliderHero()
    handleSliderIntroduce()
    handleSearch()
    handleSliderHoliday()
});