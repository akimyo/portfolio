
$(document).ready(function(){
	onWinHeight()
})

$(window).resize(function(){
	onWinHeight()
})

function onWinHeight(){
	$("#header_wrap").css("height",$(window).innerHeight())
	$("#pagepiling").css("height",$(window).innerHeight())
	
}	


