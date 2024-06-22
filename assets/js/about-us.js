const handlePlayVideo = function(){
    let btnPlayVideo = $('#btnPlayVideo');
    let btnPauseVideo = $('#btnPauseVideo');
    let videoPlay = $('#videoTravel').get(0);

    btnPauseVideo.addClass('hide');
    if(btnPlayVideo.length){
        btnPlayVideo.click(function (){
            $('.section-breadcrumb__wrap').hide();
            videoPlay.play();
            btnPauseVideo.removeClass('hide');
        })
    }

    if(btnPauseVideo.length){
        btnPauseVideo.click(function (){
            videoPlay.pause();
            $('.section-breadcrumb__wrap').show();
            btnPauseVideo.addClass('hide');

        })
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
    handlePlayVideo()
    handleSliderIntroduce()
    handleSliderHoliday()

});