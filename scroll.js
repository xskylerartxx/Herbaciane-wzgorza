window.addEventListener('scroll1', function () {
	$(document).ready(function(){
	$(window).scroll1(function(){
		if($(this).scrollTop() > 0){
			$(".headline").css({"opacity" : "0"})
		}
		if($(this).scrollTop() > 0){
			$(".text-wrapper").css({"opacity" : "0"})
		}
		else{
			$(".text-wrapper").css({"opacity" : "1"})
	})
});