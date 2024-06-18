var windowWidth = document.documentElement.clientWidth;
window.addEventListener("resize", () => {
    windowWidth = document.documentElement.clientWidth;
});

const handleTouchMoveNavigation = function (ev) {
    if (!$(ev.target).closest('#header-navigation').length) {
        ev.preventDefault();
    }
}
const renderFirstLi = (title) => {
    return `<li class="li-header"><button type="button" class="navigation-sub_back"><i class="far fa-arrow-left"></i></button>${title}</li>`;
}
const handleNavigationMobile = function () {
    const elmBody = $('body'), elmNavigation = $('#header-navigation'), elmOverlay = $('#header-overlay'),
        elmToggleNavigation = $('#js-toggle_navigation'), elmCloseNavigation = $('#js-close_navigation');

    elmNavigation.find('ul li').each(function (index, elm) {
        if ($(elm).children('.navigation-sub').length != 0) {
            $(elm).children('a').attr({'href': 'javascript:void(0)', 'data-event': 'call-sub'});
        }
    });

    $(document).on('click', '#header-navigation a[data-event="call-sub"]', function () {
        $(this).parent().addClass('navigation-sub_show');
        $(this).parent().children('.navigation-sub').children('ul').children('.li-header').remove();
        $(this).parent().children('.navigation-sub').children('ul').prepend(renderFirstLi($(this).attr('data-name')));
    });

    elmNavigation.on('click', '.navigation-sub_back', function () {
        $(this).closest('.navigation-sub_show').removeClass('navigation-sub_show');
    });

    elmToggleNavigation.click(function () {
        if (elmBody.hasClass('navigation-show')) {
            elmBody.attr({
                'class': '', 'style': ''
            });
            document.removeEventListener('touchmove', handleTouchMoveNavigation);
        } else {
            document.addEventListener('touchmove', handleTouchMoveNavigation, {passive: false});
            elmBody.attr({
                'class': 'navigation-show', 'style': 'overflow-y: hidden'
            });
        }
    });

    elmCloseNavigation.click(function () {
        elmToggleNavigation.trigger('click');
        elmNavigation.find('.navigation-sub_show').removeClass('navigation-sub_show');
    });

    elmOverlay.click(function () {
        elmToggleNavigation.trigger('click');
        elmNavigation.find('.navigation-sub_show').removeClass('navigation-sub_show');
    });
}


let handleCallMenu = function () {
    const $body = $('body');
    const handleBody = function ($toggle = false) {
        if ($body.hasClass('is-navigation')) {
            $body.removeClass('is-navigation');
            if ($body.hasClass('is-overflow')) {
                $body.removeClass('is-overflow');
            }

            $('#header-navigation ul').collapse('hide');
        } else {
            if ($toggle) {
                $body.addClass('is-navigation is-overflow')
            }
        }
    }

    if (windowWidth <= 1200) {
        const $hamburger = $('#hamburger-button');
        if ($hamburger.length) {
            $hamburger.click(function () {
                handleBody(true)
            });
        }

        const $overlay = $('#header-overlay');
        if ($overlay.length) {
            $overlay.click(function () {
                handleBody();
            });
        }

        const $closenav = $('#js-close_navigation');
        if ($closenav.length) {
            $closenav.click(function () {
                handleBody();
            });
        }
    } else {
        handleBody();
    }

    const elmToggle = $('#js-toggle_search');
    elmToggle.click(function () {
        $body.removeClass('is-navigation is-overflow')
    });

    $(document).mouseup(function (e) {
        let elm = elmToggle.parent();
        elm.is(e.target) || 0 !== elm.has(e.target).length || (elm.removeClass('is-show'), elm.children('#js-toggle_search').html('<i class="fal fa-search"></i>'))
    });

    const navChild = $('.header-navigation li');
    if (navChild.length) {
        navChild.each(function () {
            let elm = $(this);
            let checkNavChild = $(this).find('.header-navigation__child');
            let navChildItem = $(this).find('a');
            if (checkNavChild.length) {
                navChildItem.click(function () {
                    elm.addClass('show-navChild');
                    $('body').css({
                        overflow: "hidden"
                    })
                    return false;
                })

            }
            $('body').css({
                overflow: "unset"
            })

        })
    }
    const closeNavChild = $('.btn-closeNav');
    closeNavChild.each(function () {
        let elm = $(this);
        elm.click(function () {
            navChild.removeClass('show-navChild');
            $('body').css({
                overflow: "unset"
            })
        })
    })

}

const handleStickHeader = function () {
    $(window).scroll(function (e) {
        if ($(document).scrollTop() > 300) {
            $('body').addClass('is-scroll');
        } else {
            $('body').removeClass('is-scroll');
        }
    });
}

const handleInitFancybox = function () {
    if ($('.initFancybox').length) {
        $('.initFancybox').each(function () {
            let elm = $(this);
            Fancybox.bind(`[data-fancybox=${elm.attr('data-fancybox')}]`, {
                thumbs: {
                    autoStart: true,
                },
            });
        });
    }
}
const handleContentDetail = () => {
    if ($('#detailContent').length > 0) {
        if ($('#detailContent img').length > 0) {
            $('#detailContent img').each((index, elm) => {
                $(elm).wrap(`<a style="cursor: zoom-in" href="${$(elm).attr('src')}" data-caption="${$(elm).attr('alt')}" data-fancybox="images-detail"></a>`);
            });

            Fancybox.bind('[data-fancybox]', {
                thumbs: {
                    autoStart: true,
                },
            });
        }

        if ($('#detailContent table').length > 0) {
            $('#detailContent table').map(function () {
                $(this).addClass('table table-bordered');
                $(this).wrap('<div class="table-responsive"></div>');
            })
        }
    }
}

const handleInitDateRangePicker = function (elmInput) {
    let format = 'DD-MM-YYYY';
    const initDateRangePicker = elmInput.daterangepicker({
        singleDatePicker: true,
        alwaysShowCalendars: true,
        timePicker: false,
        timePicker24Hour: false,
        timePickerSeconds: false,
        parentEl: 'body',
        autoApply: true,
        locale: {
            format: format,
            daysOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            applyLabel: 'Áp dụng',
            cancelLabel: 'Đóng',
        }
    });

    if (typeof type != "undefined" && type === 'time') {
        initDateRangePicker.on('show.daterangepicker', function (ev, picker) {
            picker.container.find(".drp-calendar").addClass('px-3');
            picker.container.find(".calendar-table").hide();
        });
    }
}
const handleSwiper = function (elm, obj = {}) {
    return new Swiper(elm, {
        loop: true, speed: 1000, slidesPerView: 1, ...obj
    });
}

const handleActiveNav = function () {
    let headerNav = $(".header-navigation ul > li");
    let activeNav = $(".header-navigation .header-line");

    if (headerNav) {
        headerNav.each(function () {
            let elm = $(this);
            elm.on("mouseenter", function () {
                activeNav.css({
                    left: $(this)[0].offsetLeft, width: $(this)[0].offsetWidth,
                });
            })
        });
    }

}

const handleSearch = function () {
    let inputSearch = $('.inputSearch');
    if (inputSearch.length) {
        inputSearch.keyup(function (e) {
            if (inputSearch !== '') {
                $('body').addClass('is-result-search');
            } else {
                $('body').removeClass('is-result-search');
            }

        })
    }
}


let selectOptionCustom = function(){
    let selectOption = $(".selectOption");
    if(selectOption.length){
        selectOption.each(function(){
            $(this).select2();
        })
    }

    let formSelect = $('.form-group__select');
    if(formSelect.length){
        formSelect.each(function(){
            let elm = $(this);
            elm.click(function (){
                if($(this).hasClass('show')){
                    elm.removeClass('show');
                }else{
                    elm.addClass('show');
                }
            });

            $(document).on('click', function (e) {
                if(!e.target.closest('.form-group__select')){
                    $('.form-group__select').removeClass('show')
                }
            });
        })

    }

}

let handleLoadMore = function(){
    let handleLoading = function () {
        $('.loading').show();
        setTimeout(function () {
            $('.loading').hide();
        }, 2000);

    }

    let btnLoadMore = $(".btnLoadMore");
    if(btnLoadMore.length){
        btnLoadMore.each(function(){
            let elm = $(this);
            elm.click(function (){
                handleLoading()
            })
        })
    }

}


$(function () {
    handleCallMenu()
    $(window).resize(function () {
        handleCallMenu();
    });
    handleNavigationMobile()

    handleStickHeader();
    handleInitFancybox();
    handleContentDetail();
    handleActiveNav();
    handleSearch()
    selectOptionCustom()
    handleLoadMore()
});