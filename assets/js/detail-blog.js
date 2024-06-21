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
$(function () {
    handleSliderArticle()

});