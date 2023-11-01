// main new 종합 / 국내 / 해외
$(function () {
	$("#button1").click(function () {

		$(".new1").fadeIn().siblings().fadeOut();
	});
	$("#button2").click(function () {

		$(".new2").fadeIn().siblings().fadeOut();
	});
	$("#button3").click(function () {

		$(".new3").fadeIn().siblings().fadeOut();
	});
});

$(".new_link li a").click(function () {
	$(this).parent().addClass("on").siblings().removeClass("on")
});



// festival faq 토글 - 슬라이드, 배경 변경
$(function(){
	$(".faqs li .q").click(function(){
		$(this).next().slideToggle();
		$(this).parent().toggleClass("minus");
	});
});

