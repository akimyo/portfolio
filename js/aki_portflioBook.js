var $balanceBook

$(document).ready(function(){
	
	$balanceBook=$("#visual_bg")
	
	$("#uiux_box").bind("mouseenter",onUiuxBook)
	$("#print_box").bind("mouseenter",onPrintBook)
	$("#uiux_box, #print_box").bind("mouseleave",onCenterBook)
	
})

function onUiuxBook(){
	
	$balanceBook.addClass("uiux_book")
	TweenLite.to("#uiux_line",0.4,{scaleY:0.9, transformOrigin:"left bottom"})
	TweenLite.to("#print_line",0.4,{scaleY:1.15, transformOrigin:"left bottom"})
	$("#uiux_box").css({"border":"solid 6px #c69c6d","background":"#0d243e"})
	$(this).children().children(".portflio_text").css("color","#c69c6d")
	
	$("#uiux_more").stop()
	$("#uiux_more").animate({"left":40},500,"linear",function(){
		$(this).animate({"left":0},300,"linear")
	})
	
}

function onPrintBook(){
	
	$balanceBook.addClass("print_book")
	TweenLite.to("#uiux_line",0.4,{scaleY:1.15, transformOrigin:"left bottom"})
	TweenLite.to("#print_line",0.4,{scaleY:0.9, transformOrigin:"left bottom"})
	$("#print_box").css({"border":"solid 6px #c69c6d","background":"#0d243e"})
	$(this).children(".portflio_text").css("color","#c69c6d")
	
	$("#print_more").stop()
	$("#print_more").animate({"right":40},500,"linear",function(){
		$(this).animate({"right":0},300,"linear")
	})
	
}

function onCenterBook(){
	
	$balanceBook.removeClass("uiux_book")
	$balanceBook.removeClass("print_book")
	TweenLite.to("#uiux_line",0.4,{scaleY:1, transformOrigin:"left bottom"})
	TweenLite.to("#print_line",0.4,{scaleY:1, transformOrigin:"left bottom"})
	$("#uiux_box, #print_box").css({"border":"solid 6px #cbcbcb","background":"none"})
	$(this).children().children(".portflio_text").css("color","#cbcbcb")
	$(this).children(".portflio_text").css("color","#cbcbcb")
	
}