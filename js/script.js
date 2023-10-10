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

