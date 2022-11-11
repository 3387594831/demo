$(function() {
	setTimeout(function(){
		$('.loading-one').hide()
		$("#video_player")[0].autoplay = true;
		var vids = document.getElementById("video_player")
		vids.controls = false // 加载控制器
		vids.muted = true // 兼容谷歌，静音为true 才能自动播放
		vids.play() // 播放
		
		vids.onloadedmetadata = function() { // 元数据加载后触发
			var dur = vids.duration // 获取到时长并赋予新的变量
		}
		setInterval(function(){
			var time = vids.currentTime
			if(time==vids.duration){
				$('.scroll').css('left','0')
			}
		})
	},1000)	
	$('#fp-nav ul li').eq(3).hide()
	$('#fp-nav ul li').eq(4).hide()
	$('#fp-nav ul li').eq(5).hide()
	setInterval(function(){
		var section1=$('.section1').offset().top
		var section3=$('.section3').offset().top
		if(section1==0||section3<0){
			$('#fp-nav ul').hide()
		}else{
			$('#fp-nav ul').show()
		}
	})
	
	$('.loading div').click(function() {
		$('.loading').css('opacity', '0.1')
		setTimeout(function() {
			$('.loading').css('display', 'none')
			
		}, 700)
		$('.scroll').css('left','0')
	})

	setInterval(function() {
		var video_time = document.getElementById("video_player")
		if (video_time.ended == true) {
			$('.loading').css('display', 'none')
		}
	}, 1000)
	
	
	var vid = document.getElementById("video")
	vid.controls = false // 加载控制器
	vid.muted = true // 兼容谷歌，静音为true 才能自动播放
	vid.loop = -1
	vid.play() // 播放
	vid.onloadedmetadata = function() { // 元数据加载后触发
		var dur = vid.duration // 获取到时长并赋予新的变量
	}
	
	/* menu-box*/
	//$('.menu-box').hide()
	$('.menu').click(function() {
		$('.menu-box').animate({
			'left': 0
		}, 800)

		$('.banner-swiper').addClass('animent').removeClass('animent-none')
		$('.header').hide()
	})
	$('.menu_close').click(function() {
		$('.menu-box').css('left', '-100%')
		$('.header').show()
		$('.banner-swiper').removeClass('animent').addClass('animent-none')
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

	/* 切换导航 */
	setInterval(function() {
		var top = $('.section1').offset().top
		if (top == 0) {
			$('.header-one').css({
				'opacity': 1,
			})
			$('.header-two').css({
				'opacity': 0,
			})
			setTimeout(function() {
				$('.header-one').show()
			}, 500)
			setTimeout(function() {
				$('.header-two').hide()
			}, 800)
		} else if (top > -500) {
			$('.header-one').css({
				'opacity': 0
			})
			$('.header-two').css({
				'opacity': 1
			})
			setTimeout(function() {
				$('.header-one').hide()
			}, 500)
			setTimeout(function() {
				$('.header-two').show()
			}, 800)
		}
	})


	/* 第二屏 container盒子 切换背景图 */

	$('.container-bg').mouseover(function() {
		$('a[id*=container-active]').attr('id', '')
		$(this).attr('id', 'container-active')
		var index = $(this).attr('index')
		$('.section2-bg div').eq((index - 1)).fadeIn().siblings().fadeOut()
		var arr = ['images/section2_icon4_1.png', 'images/section2_icon4_2.png',
			'images/section2_icon2_1.png', 'images/section2_icon2_2.png'
		]
		var img1 = $(this).children('img').attr('src')
		var img2 = $(this).children().children('img').attr('src')
		if (img1 == arr[2]) {
			$(this).children('img').attr('src', arr[3])
		} else if (img2 == arr[0]) {
			$(this).children().children('img').attr('src', arr[1])
		}
		$(this).mouseout(function() {
			if (img1 == arr[3]) {
				$(this).children('img').attr('src', arr[2])
			} else if (img2 == arr[1]) {
				$(this).children().children('img').attr('src', arr[0])
			}
		})
	});


	/* 第二屏动画 */
	function se() {
		setInterval(function() {
			var section2 = $('.section2').offset().top
			if (section2 == 0) {
				$('#txt').addClass('txt-active')
				$('.container-bg').addClass('con-active')
			} else {
				$('#txt').removeClass('txt-active')
				$('.container-bg').removeClass('con-active')
			}
		}, 10)
	}
	if ($(window).width() > 768) {
		se()
	} else {
		$(window).scroll(function() {
			setInterval(function() {
				var section2_top = $('.section2').offset().top
				//console.log(section2_top)
				if ($(this).scrollTop() > (section2_top / 2)) {
					$('.section2 .samll-txt').addClass('samll-txt-active')
					$('.section2 .samll-container').addClass('samll-container-active')
				}
			})
		})
	}

	/* hover 视频播放 */
	$('.content>div').mouseover(function() {
		var vid1 = document.getElementById('video' + ($(this).index() + 1) + '')
		vid1.controls = false
		vid1.muted = true
		vid1.loop = -1
		vid1.play()
	})

	/* 第三屏动画 */
	function se3() {
		setInterval(function() {
			var section3 = $('.section3').offset().top
			if (section3 == 0) {
				$('.global').addClass('global-active')
				$('.content').addClass('content-active')
			} else {
				$('.global').removeClass('global-active')
				$('.content').removeClass('content-active')
			}
		}, 1)
	}
	if ($(window).width() > 768) {
		se3()
	} else {
		$(window).scroll(function() {
			setInterval(function() {
				var section3_top = $('.section3').offset().top
				//console.log(section3)
				if ($(this).scrollTop() > (section3_top / 2)) {
					$('.content').addClass('content-active')
					$('.content').addClass('content-active')
				}
			})
		})
	}

	/*  */
	function se4() {
		setInterval(function() {
			var section4 = $('.section4').offset().top
			var section3 = $('.section3').offset().top
			//console.log(section4)
			if (section3 <0) {
				if (section4 <= 0) {
					$('.header-two').css({
						'opacity': 0
					})
					setTimeout(function() {
						$('.header-two').hide()
					}, 300)
				} else {
					$('.header-two').css({
						'opacity': 1
					})
					setTimeout(function() {
						$('.header-two').show()
					}, 300)
				}
			}
		})
	}
se4()


	/* 友情链接 */
	$('.f-r-bottom').click(function() {
		$(this).children('ul').slideToggle()
	})
	$('.f-r-bottom').trigger('click')

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
})
