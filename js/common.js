// 메인 :: lnb 메뉴 a focus
function linkFocus() {
	$('.menu_lnb > li').on('mouseenter focusin', function () {
		$(this).addClass('on').siblings().removeClass('on');
		$('.subMenu, .bg_subMenu').addClass('on');
	});
	$('.menu_lnb > li').on('mouseleave', function () {
		$(this).removeClass('on');
		$('.subMenu, .bg_subMenu').removeClass('on');
	});

	var $lastFocus = $('.menu_lnb > li:last .subMenu li:last a');
		
	$($lastFocus).on('focusout', function () {
		$('.list_lnb, .subMenu, .bg_subMenu').removeClass('on');
	});
};
linkFocus();

// 메인 :: list_food 탭 메뉴
$('.tab_menu > li').click(function () {
	var $tabIndex = $(this).index();

	$(this).addClass('on').siblings().removeClass('on');
	$('.swiperFoodMenu').addClass('hide');
	$('.swiperFoodMenu').eq($tabIndex).removeClass('hide');
});

//  메인 :: quickMenu 스크롤 이벤트
$(window).scroll(function () {

	var $scrollPosition = $(document).scrollTop();
	if ($scrollPosition > 200) {
		$('.snb_quickMenu').css({
			'position' : 'fixed',
			'top' : 100
		});
	} else {
		$('.snb_quickMenu').css({
			'position': 'absolute',
			'top' : 5
		});
	}
});