$(document).ready(function() {
	var $oLi = $("#banner .list li");
	var timer = null;
	var n = 0;
	new WOW().init();
	//导航栏固定
	$(function() {
		$(window).scroll(function() {
			if($(window).scrollTop() > 130) {
				$("#headnav").addClass("headnav");
				$(".headnav").animate({
					"top": "0px"
				}, 500);
			} else {
				$(".headnav").animate("top", "-50px");
				$("#headnav").removeClass("headnav");
			}
		})
	})
	//top出现
	$(function() {
		$(window).scroll(function() {
			if($(window).scrollTop() > 130) {
				$("#to-top").children(".to-top").addClass("top");
			} else {
				$("#to-top").children(".to-top").removeClass("top");
			}
		})
	})
	//对于导航栏的点击操作
	$("#headnav li").click(function() {
		$("#headnav li").removeClass("active_a");
		$("#headnav li").children("a").removeClass("active");
		$(this).addClass("active_a");
		$(this).children("a").addClass("active");
	})
	$("#head li").eq(3).children(".summary").fadeOut();
	$("#head li").eq(3).hover(function() {
		$(this).children(".summary").fadeIn();
	}, function() {
		$(this).children(".summary").fadeOut();
	})
	//集团简介
	$(".summary").hover(function () {
		$(this).css("background-color","#EFEFEF");
	},function () {
		$(this).css("background-color","#FFFFFF")
	})

	//周边、告别冬季、出境旅游
	$(".sec_around a[name=sec]").hover(function() {
		$(this).find(".sec-box").animate({
			"top": "15px",
			"left": "15px",
			"width": "366px",
			"height": "136px"
		}, 200)
		$(this).siblings(".sec-text").css("color", "#0072D4")
	}, function() {
		$(this).find(".sec-box").animate({
			"top": "2px",
			"left": "2px",
			"width": "390px",
			"height": "160px"
		}, 200)
		$(this).siblings(".sec-text").css("color", "#5b5b5b")
	})
	$(".sec-text").hover(function() {
		$(this).css("color", "#0072D4")
	}, function() {
		$(this).css("color", "#5b5b5b")
	})
	//产品部分
	$(".pro-wrapper li").hover(function() {
		//边框出现
		$(this).find(".pro-img-boder").stop().animate({
			"width": "245px",
			"height": "140px",
			"top": "15px",
			"left": "15px"
		}, 300)
		//加号出现
		$(this).find(".pro-img .pro-img-add").stop().animate({
			"bottom": "0px"
		}, 300)
		//底边箭头出现
		$(this).find(".pro-more").stop().animate({
			"bottom": "0px"
		}, 300);
		$(this).find(".pro-txt-a").stop().animate({
			"top": "150px"
		}, 300);
		//标题变色
		$(this).find(".pro-txt-title a").css("color", "#0072D4");
		//文字向上移动
		$(this).find(".pro-txt").stop().animate({"padding-top":"0px"},300);
		//图片变大
		$(this).find(".pro-img img").stop().animate({
			"width": "105%"
		}, 300)
	}, function() {
		$(this).find(".pro-img-boder").stop().animate({
			"width": "275px",
			"height": "170px",
			"top": "0px",
			"left": "0px"
		}, 300)

		$(this).find(".pro-img .pro-img-add").stop().animate({
			"bottom": "-50px"
		}, 300);
		$(this).find(".pro-more").stop().animate({
			"bottom": "-40px"
		}, 300)
		$(this).find(".pro-txt-a").stop().animate({
			"top": "175px"
		}, 300);
		$(this).find(".pro-txt-title a").css("color", "#8D8D8D");
		$(this).find(".pro-txt").stop().animate({"padding-top":"5px"},300);
		$(this).find(".pro-img img").stop().animate({
			"width": "100%"
		}, 300)
	})
	//more
	$(".more").hover(function() {
		$(this).css("box-shadow", "0px 10px 20px 1px #EFEFEF");
		$(this).find("span").animate({
			"background-position-y": "-40px"
		}, 300);
	}, function() {
		$(this).css("box-shadow", "0px 10px 50px 1px #E0E0E0");
		$(this).find("span").animate({
			"background-position-y": "0px"
		}, 300);
	})
	//热销推荐
	$(".infoe .details").hover(function () {
		$(".infoe .deta-bgcolor").stop().animate({"width":"188px"},300)
	},function () {
		$(".infoe .deta-bgcolor").stop().animate({"width":"0px"},300)
	})
	//汤斯维尔磁岛
	$(".tangsi").hover(function() {
		$(this).find(".hot-img-addl").stop().animate({
			"top": "0px"
		}, 300);
	}, function() {
		$(this).find(".hot-img-addl").stop().animate({
			"top": "-40px"
		}, 300);
	})
	//悉尼
	$(".sydney").hover(function() {
		$(this).find(".hot-img-addr").stop().animate({
			"bottom": "0px"
		}, 300);
	}, function() {
		$(this).find(".hot-img-addr").stop().animate({
			"bottom": "-40px"
		}, 300);
	})
	//热销推荐右边，鼠标经过时的变化
	$(".hot-right").children().hover(function() {
		$(this).find(".hot-img-boder").stop().animate({
			"width": "361px",
			"height": "203px",
			"top": "15px",
			"left": "15px"
		}, 300);
		$(this).find(".hot-txt-title a").css("color", "#0072D4")
		$(this).find(".hot-img img").stop().animate({
			"width": "103%",
			"height": "103%"
		}, 300)
	}, function() {
		$(this).find(".hot-img-boder").stop().animate({
			"width": "391px",
			"height": "233px",
			"top": "0px",
			"left": "0px"
		}, 300);
		$(this).find(".hot-txt-title a").css("color", "#8D8D8D")
		$(this).find(".hot-img img").stop().animate({
			"width": "100%",
			"height": "100%"
		}, 300)
	})
	//团队精英
	$(".team-left li").hide();
	$(".team-left li.active").show();
	$(".team-right li").click(function() {
		var t=$(this).index();
		$(".team-left li").fadeOut();
		$(".team-left li").eq(t).fadeIn();
		$(this).siblings("li").removeClass("active");
		$(this).addClass("active");
		$(this).find("p").eq(0).removeClass("txt-blue");
	})
	$(".team-right li").hover(function() {
		if(!$(this).hasClass("active")) {
			$(this).addClass("bg-gray");
			$(this).find("p").eq(0).addClass("txt-blue");
		}
	}, function() {
		$(this).removeClass("bg-gray")
		$(this).find("p").eq(0).removeClass("txt-blue");
	})
	//团队精英，小轮播点击事件
	$(".team-top").on("click",function () {
		$(".posi-abso").stop().animate({"top":"0px"},300);
	})
	$(".team-bottom").on("click",function () {
		$(".posi-abso").stop().animate({"top":"-105px"},300);
	})
	//特色酒店
	var sp = $("<span>MORE</span>");
	sp.addClass("trans3");
	$(".hotel-box").hover(function() {
		more1($(this));
	}, function() {
		more2($(this));
	})
	//新闻部分的鼠标经过
	$(".swiper-slide").hover(function() {
		more1($(this));
		$(this).find(".line").stop().animate({
			"width": "250px"
		}, 300);
		$(this).find(".news-txt-title").css("color","#0072d4");
		$(this).find(".line-two").stop().animate({
			"width": "335px"
		}, 300);
	}, function() {
		more2($(this));
		$(this).find(".line").stop().animate({
			"width": "0px"
		}, 300);
		$(this).find(".news-txt-title").css("color","#262626");
		$(this).find(".line-two").stop().animate({
			"width": "0px"
		}, 300);
	})

	function more1(name) {
		name.find(".hotel-widboder").stop().animate({
			"width": "280px",
			"height": "220px",
			"top": "0px",
			"left": "0px"
		}, 300);
		name.find(".hotel-boder").stop().animate({
			"width": "260px",
			"height": "200px",
			"top": "20px",
			"left": "20px"
		}, 300);
		name.find(".hotel-more").css({
			"background-color": "#0072d4",
		})
		name.find("i").css("background-position", "0px -7px").before(sp);
	}

	function more2(name) {
		name.find(".hotel-widboder").stop().animate({
			"width": "320px",
			"height": "260px",
			"top": "-10px",
			"left": "-10px"
		}, 300)
		name.find(".hotel-boder").stop().animate({
			"width": "300px",
			"height": "240px",
			"top": "0px",
			"left": "0px"
		}, 300);
		name.find(".hotel-more").css({
			"background-color": "#FFFFFF",
		})
		name.find("i").css("background-position", "0px 0px");
		name.find("span").remove();
	}

	//表单
	$("form").children().hover(function() {
		$(this).css("border-color", "#0072D4")
	}, function() {
		$(this).css("border-color", "#e0e0e0")
	})
	//二维码，点击微信符号时
	$(".weixin-a").on("click", function() {
		$("#bg_black").removeClass("nosee");
	})
	$("#bg_black").on("click", function() {
		$(this).addClass("nosee");
	})
	$("#product .pro-menu a").click(function () {
		$(this).parent("li").siblings("li").children("a").removeClass("active");
		$(this).addClass("active");
	})
})