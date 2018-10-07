$(document).ready(function() {
	//菜单
	$('.nav>.item').click(function() {
		$('#playlists').removeClass('open').find(".subMenu").stop().slideUp();;
		$(this).addClass("active").siblings().removeClass("active");
	});
	//playlist
	$('#playlists').click(function() {
		$(this).siblings().removeClass("active");
		var $subMenu = $(this).find(".subMenu");
		var flag = $subMenu.is(":visible");
		if(flag) {
			$(this).removeClass('open');
			$subMenu.stop().slideUp();
		} else {
			$(this).addClass('open');
			$subMenu.stop().slideDown();
		}
	});
	//选项卡
	var $content = $(".tab-content li");
	$('.tab-title li').click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$content.removeClass("active").eq(index).addClass("active");
	});
})