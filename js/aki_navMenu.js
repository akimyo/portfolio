var $mainMenu
var $mainBtn
var $menuBg
var onSlide=false

$(document).ready(function(){
	
	$mainMenu=$("#menu_list")
	$mainBtn=$("#menu_box")
	$menuBg=$("#menu_bg")
	
	$("#header_wrap").css("height",$(window).innerHeight())
	
	mainMenuHide()
	menuBgHide()
	TweenLite.to($menuBg, 1, {scaleX:0, transformOrigin:"right top"})
	
	
	$mainBtn.bind("click", onMenuSlide)
	
})

$(window).resize(function(){
	$("#header_wrap").css("height",$(window).innerHeight())
})


function onMenuSlide(){
	
	if(onSlide==false){
		menuBarX()
		
		TweenLite.to($menuBg, 0.4, {scaleX:1, transformOrigin:"right top", onStart:menuBgShow, onComplete:mainMenuShow})
		
		onSlide=true
		
	}else{
		menuBarOn()
		
		TweenLite.to($menuBg, 0.4, {scaleX:0, transformOrigin:"right top", onStart:mainMenuHide, onComplete:menuBgHide})
		
		onSlide=false
	}
	
}

function mainMenuShow(){
	$mainMenu.show()
}

function mainMenuHide(){
	$mainMenu.hide()
}

function menuBgShow(){
	$menuBg.show()
}

function menuBgHide(){
	$menuBg.hide()
}

function menuBarX(){
	$("#menu_bar01, #menu_bar03").animate({"top":24},300,"linear",function(){
		$("#menu_bar02").hide()
		TweenLite.to("#menu_bar01", 0.3, {rotation:-45, scaleX:1.35})
		TweenLite.to("#menu_bar03", 0.3, {rotation:45, scaleX:1.35})
	})
}

function menuBarOn(){
	$("#menu_bar02").show()
	TweenLite.to("#menu_bar01", 0.3, {rotation:0, scaleX:1, onComplete:menuBarStart})
	TweenLite.to("#menu_bar03", 0.3, {rotation:0, scaleX:1, onComplete:menuBarStart})
}

function menuBarStart(){
	$("#menu_bar01").animate({"top":9},300,"linear")
	$("#menu_bar03").animate({"top":39},300,"linear")
}
