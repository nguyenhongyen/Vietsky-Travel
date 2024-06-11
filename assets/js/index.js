const handleSliderHero = function () {
    const slider = $('#section-hero');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            speed: 2000, loop: true, spaceBetween: 20, slidesPerView: 1, effect: "fade", // autoplay: {
            //     delay: 5000,
            // },


        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}

const handleSliderIntroduce = function () {
    const sliderIntro = $('#section-introduce');
     const sliderIntroActive = $('#section-introduce-active');

    if (sliderIntro.length > 0) {
        const elmSwiper = '#' + sliderIntro.attr('id')
        const objSwiper = {
            slidesPerView: 3,
            centeredSlides: true,
            effect: "coverflow",
            coverflowEffect: {
                rotate: 20,
                stretch: 1,
                depth: 500,
                modifier: 1,
                slideShadows: !0
            },
        }
        initSliderThumb = handleSwiper(elmSwiper + ' .swiper', objSwiper);

        if(sliderIntroActive.length){
            const elmSwiperAvatar = '#' + sliderIntroActive.attr('id')
            const objSwiperAvatar = {
                slidesPerView: 1,
                effect: "fade",
                thumbs: {
                    swiper: initSliderThumb,
                },
                navigation: {
                    nextEl: "#section-introduce .swiper-button__next",
                    prevEl: "#section-introduce .swiper-button__prev",
                },
            }

            handleSwiper(elmSwiperAvatar + ' .swiper', objSwiperAvatar);
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

$(function () {
    handleSliderHero()
    handleSliderIntroduce()
    handleSearch()

});