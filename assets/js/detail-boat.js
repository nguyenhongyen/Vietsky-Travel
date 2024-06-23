const handleScrollDiv = function () {
    let getItem = $('#boat-nav a');
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

    if ($('#boat-nav__mobile').length) {
        $('#boat-nav__mobile').on('change', function () {
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

const handleSliderGallery = function () {
    const slider = $('#swiperGallery');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            speed: 800, loop: true, spaceBetween: 0, slidesPerView: 1.5, navigation: {
                nextEl: elmSwiper + " .swiper-button__next", prevEl: elmSwiper + " .swiper-button__prev",
            }, pagination: {
                el: elmSwiper + " .swiper-pagination", clickable: true
            }, breakpoints: {
                768: {
                    slidesPerView: 2.5,
                }, 1024: {
                    slidesPerView: 3,
                }, 1440: {
                    slidesPerView: 3,
                },

            }
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}
const handleSliderHolidayIdeas = function () {
    const sliderHolidayOne = $('#swiperHolidayOne');
    const sliderHolidayTwo = $('#swiperHolidayTwo');

    if (sliderHolidayOne.length) {
        const elmSwiperAvatar = '#' + sliderHolidayOne.attr('id')
        const objSwiperAvatar = {
            slidesPerView: 1, spaceBetween: 20, speed: 800, navigation: {
                nextEl: ".holiday-ideas .swiper-button__next",
                prevEl: ".holiday-ideas .swiper-button__prev",
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



$(function () {

    handleScrollDiv()
    handleSliderGallery()
    handleSliderHolidayIdeas()

});
