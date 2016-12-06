$(document).ready(function() {

// check if device is touch screen
var TOUCHSCREEN = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);

//	-- 		Object Slider value 	--	//

// if(TOUCHSCREEN || ($(window).width() <= 979)) {
// 	$("#page-body").addClass("mini-display");
// }

$(".navar-mini-display .nav-menu-item-has-child").click(function() {
	if($(this).hasClass("nav-sub-open")) {
		$(this).removeClass("nav-sub-open").animate({
			height : $(this).find("a").outerHeight()
		},300);
	}else {
		$(this).addClass("nav-sub-open").animate({
			height : $(this).find("a").outerHeight() + $(this).find(".nav-sub-menu").outerHeight() + 2
		},300);
	}
});

$(".navar-butt-menu").click(function(e) {
	$("#page-body").addClass("navar-mini-display-open");
	e.stopPropagation();
});

$("#page-wrapper").click(function() {
	$("#page-body").removeClass("navar-mini-display-open");
});


});


