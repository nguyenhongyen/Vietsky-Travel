var windowWidth = document.documentElement.clientWidth;
window.addEventListener("resize", () => {
	windowWidth = document.documentElement.clientWidth;
});

let handleApplyCollapse = function ($parent, $firstItem = false, $callFunction = false) {
	let $childUl = $parent.find('> li > ul');
	if ($childUl.length === 0) {
		return;
	}

	if ($callFunction) {
		$parent.find('> li a').each(function () {
			$(this).attr('data-href', $(this).attr('href'))
		});
	}

	if (windowWidth <= 1024) {
		let $objParentAttr = {};
		let $objChildrenAttr = {
			'data-bs-parent': '#' + $parent.attr('id')
		}

		if ($firstItem) {
			let $parentID = 'menu-' + Math.random().toString(36).substring(7);
			$parent.attr('id', $parentID);
			$objParentAttr = {
				'data-bs-parent': '#' + $parentID
			}

			$objChildrenAttr = {};
		}

		$childUl.each(function () {
			let $parentUl = $(this).closest('ul');
			let $parentListItem = $(this).closest('li');
			let $parentListItemAnchor = $parentListItem.children('a');

			let $parentUlID = 'menu-' + Math.random().toString(36).substring(7);

			$parentUl.addClass('collapse').attr({
				'id': 'collapse-' + $parentUlID, ...$objParentAttr, ...$objChildrenAttr
			});

			$parentListItemAnchor.replaceWith(function () {
				return `<button aria-label="${$parentListItemAnchor.attr('aria-label')}" data-href="${$parentListItemAnchor.attr('data-href')}" data-bs-toggle="collapse" data-bs-target="#${$parentUl.attr('id')}">${$parentListItemAnchor.html()}</button>`
			})

			handleApplyCollapse($parentUl, false);

			$parentUl.on('show.bs.collapse', function () {
				$parent.find('.collapse.show').not($parentUl).collapse('hide');
			});
		});
	} else {
		$parent.removeAttr('id');

		$childUl.each(function () {
			let $parentUl = $(this).closest('ul');
			let $parentListItem = $(this).closest('li');

			$parentUl.removeClass('collapse').removeAttr('data-bs-parent id');
			$parentListItem.children('a').attr('href', $parentListItem.children('a').attr('data-href'));

			$parentListItem.children('button').replaceWith(function () {
				return `<a aria-label="${$(this).attr('aria-label')}" href="${$(this).attr('data-href')}" data-href="${$(this).attr('data-href')}">${$(this).html()}</a>`
			})

			handleApplyCollapse($parentUl);
		});
	}
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

	if (windowWidth <= 1024) {
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
	} else {
		handleBody();
	}


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
			daysOfWeek: [
				"CN",
				"T2",
				"T3",
				"T4",
				"T5",
				"T6",
				"T7"
			],
			monthNames: [
				"Tháng 1",
				"Tháng 2",
				"Tháng 3",
				"Tháng 4",
				"Tháng 5",
				"Tháng 6",
				"Tháng 7",
				"Tháng 8",
				"Tháng 9",
				"Tháng 10",
				"Tháng 11",
				"Tháng 12"
			],
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
const handleSwiper = function(elm, obj={}) {
	return new Swiper(elm,{
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		...obj
	});
}

const handleActiveNav = function(){
	let headerNav = $(".header-navigation ul > li");
	let activeNav = $(".header-navigation .header-line");

	if(headerNav){
		headerNav.each(function () {
			let elm = $(this);
			elm.on("mouseenter", function () {
				activeNav.css({
					left: $(this)[0].offsetLeft,
					width: $(this)[0].offsetWidth,
				});
			})
		});
	}


}


$(function () {
	handleApplyCollapse($('#header-navigation > ul'), true, true);
	handleCallMenu();
	$(window).resize(function () {
		handleApplyCollapse($('#header-navigation > ul'));
		handleCallMenu();
	});

	handleStickHeader();
	handleInitFancybox();
	handleContentDetail();
	handleActiveNav();
});