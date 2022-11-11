/* 小屏下侧边栏导航 */
$('.samll-menuBox h3').next('ul').slideUp()
$('.samll-menuBox  h3').click(function() {
	$(this).next('ul').slideToggle().parent().siblings().children('ul').slideUp()

	if (!$(this).children().hasClass('span-active')) {
		$(this).children().addClass('span-active').parents('li').siblings().children('h3').children(
			'span').removeClass('span-active')
	} else {
		$(this).children().removeClass('span-active')
	}
	//$(this).children().addClass('span-active')
})
$('.samll-menu').click(function() {
	$('.samll-menuBox').show()
	setTimeout(function() {
		$('.samll-menuBox').css('background-color', 'rgba(0, 0, 0, 0.7)')
	})
	setTimeout(function() {
		$('.samll-menuBox').children('ul').css({
			'left': '0'
		})
	}, 200)
})
$('.samll-menuBox-close').click(function() {
	$('.samll-menuBox').css('background-color', 'rgba(0, 0, 0, 0)')
	setTimeout(function() {
		$('.samll-menuBox').hide()
	}, 600)
	setTimeout(function() {
		$('.samll-menuBox').children('ul').css({
			'left': '-100%'
		})
	}, 200)
})

/* 搜索框 */
$('.search-btn').click(function() {
	$('.search-box').animate({
		'top': 0
	}, 800)
})
$('.searchbox-bottom').click(function() {
	$('.search-box').animate({
		'top': '-200%'
	}, 800)
})

$('.f-r-bottom').click(function() {
	$(this).children('ul').slideToggle()
})
$('.f-r-bottom').trigger('click')
