const handleScrollDiv = function () {
    let getItem = $('#destination-nav a');
    if (getItem.length) {
        getItem.each(function () {
            let elm = $(this);
            elm.click(function () {
                let getId = $(this).attr('href');

                setTimeout(function () {
                    $("html, body").animate({
                        scrollTop: parseInt($(getId).offset().top) - parseInt($('header').height()) - 100
                    }, 500);
                });
            })
        })
    }

    if ($('#destination-nav__mobile').length) {
        $('#destination-nav__mobile').on('change', function () {
            let $option = $(this).find('option:selected');
            let getValue = $option.val();
            setTimeout(function () {
                $("html, body").animate({
                    scrollTop: parseInt($('#' + getValue).offset().top) - parseInt($('header').height()) - 100
                }, 500);
            });
        });
    }
}


const handleSliderHolidayIdeas = function () {
    const sliderHolidayOne = $('#swiperHolidayOne');
    const sliderHolidayTwo = $('#swiperHolidayTwo');

    if (sliderHolidayOne.length) {
        const elmSwiperAvatar = '#' + sliderHolidayOne.attr('id')
        const objSwiperAvatar = {
            slidesPerView: 1, spaceBetween: 20, speed: 800, navigation: {
                nextEl: ".holiday-ideas .swiper-button__next", prevEl: ".holiday-ideas .swiper-button__prev",
            },

        }

        handleSwiper(elmSwiperAvatar + ' .swiper', objSwiperAvatar);

        if (sliderHolidayTwo.length > 0) {
            const elmSwiper = '#' + sliderHolidayTwo.attr('id')
            const objSwiper = {
                speed: 800, slidesPerView: 1, spaceBetween: 18, navigation: {
                    nextEl: ".holiday-ideas .swiper-button__next", prevEl: ".holiday-ideas .swiper-button__prev",
                }, breakpoints: {
                    1024: {
                        slidesPerView: 2,
                    },
                },
            }
            handleSwiper(elmSwiper + ' .swiper', objSwiper);
        }
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

const handleSliderOtherPlace = function () {
    const slider = $('#swiperOtherPlace');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            speed: 1000, loop: true, spaceBetween: 20, slidesPerView: 1.2, breakpoints: {
                375: {
                    slidesPerView: 1.3,
                }, 768: {
                    slidesPerView: 2,
                },
            }
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}

const handleSliderExpert = function () {
    const sliderExpertActive = $('#swiperExpertActive');
    const sliderExpertThumb = $('#swiperExpertThumb');

    if (sliderExpertActive.length) {
        const elmSwiperAvatar = '#' + sliderExpertActive.attr('id')
        const objSwiperAvatar = {
            slidesPerView: 1,
            effect: "fade",
            speed: 0,
            loop:true,

        }
        initSliderAvatar = handleSwiper(elmSwiperAvatar + ' .swiper', objSwiperAvatar);
    }
    if (sliderExpertThumb.length > 0) {
        const elmSwiper = '#' + sliderExpertThumb.attr('id')
        const objSwiper = {
            speed: 800,
            spaceBetween: 2,
            slidesPerView: 3,
            loop:true,
            thumbs: {
                swiper: initSliderAvatar,

            }, navigation: {
                nextEl: ".section-experts .swiper-button__next",
            }, breakpoints: {
                375: {
                    slidesPerView: 4,
                },
                425: {
                    slidesPerView: 5,
                },
                768: {
                    slidesPerView: 5,
                }, 1024: {
                    slidesPerView: 6,
                },
            }

        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}


$(function () {

    handleScrollDiv()
    handleSliderHolidayIdeas()
    handleSliderIntroduce()
    handleSliderOtherPlace()
    handleSliderExpert()
});
