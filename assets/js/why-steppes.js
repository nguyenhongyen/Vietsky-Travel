const handleSliderWhySteppes = function () {
    const slider = $('#swiperWhySteppes');
    if (slider.length > 0) {
        const elmSwiper = '#' + slider.attr('id')
        const objSwiper = {
            speed: 1000,
            loop: true,
            mousewheel: true,
            spaceBetween: 0,
            slidesPerView: 1,
            direction: "vertical",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
        }
        handleSwiper(elmSwiper + ' .swiper', objSwiper);
    }
}
$(function () {
    handleSliderWhySteppes()

});