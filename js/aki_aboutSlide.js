
var $slideList
var $slidePrev
var $slideNext
var $linkList
var slideNum=1


$(document).ready(function(){
	
	$slideList=$("#slide_list")
	$slidePrev=$("#slide_prev")
	$slideNext=$("#slide_next")
	$linkList=$("#link_list").children()
	
	$slidePrev.bind("click",onPrevSlide)
	$slideNext.bind("click",onNextSlide)
	
	$linkList.bind("mouseenter",onLinkOver)
	$linkList.bind("mouseleave",onLinkOut)
})


function onPrevSlide(){
		
	currentPosition=$slideList.position().left
	
	if(currentPosition>=0){
		$slideList.css("left",0)
	}else{
		$("#slide_list:not(:animated)").animate({"left":currentPosition+1100},1000,"easeOutCubic",function(){
			slideNum=slideNum-1
			$("#slide_num").html("<p>0"+slideNum+"<span>/07</span></p>")
			onAboutShow()
		})
	}
	
	/*
	if(currentPosition<0 && currentPosition>=-6600){
		$("#slide_list:not(:animated)").animate({"left":currentPosition+1100},1000,"easeOutCubic",function(){
			onAboutShow()
			
		})
	}
	*/
	
}

function onNextSlide(){
	
	currentPosition=$slideList.position().left
	
	if(currentPosition<=-6600){
		$slideList.css("left",-6600)
	}else{
		$("#slide_list:not(:animated)").animate({"left":currentPosition-1100},1000,"easeOutCubic",function(){
			slideNum=slideNum+1
			$("#slide_num").html("<p>0"+slideNum+"<span>/07</span></p>")
			onAboutShow()
		})
	}
	
	/*
	if(currentPosition<=0 && currentPosition>-6600){
		$("#slide_list:not(:animated)").animate({"left":currentPosition-1100},1000,"easeOutCubic",function(){
			onAboutShow()
			onSlideCountUP()
		})
	}
	*/
}



function onAboutShow(){
	
	//slideNum==2
	$("#about01_img").css("opacity",0)
	$("#about01_text").css({"opacity":0,"top":100})
	//slideNum==3
	$("#about02_list").children().css({"opacity":0,"top":100})
	//slideNum==4
	$("#editing_design").css("opacity",0)
	$("#editing_box").css({"opacity":0,"top":100})
	//slideNum==5
	$("#career_design").css("opacity",0)
	$("#career_box").css({"opacity":0,"top":100})
	//slideNum==6
	$("#balance_design").css("opacity",0)
	$("#balance_box").css({"opacity":0,"top":100})
	//slideNum==7
	$("#link_title").css("top",100)
	$("#link_list").css("opacity",0)
	
	currentPosition=$slideList.position().left
	
	if(slideNum==1){
		
	}else if(slideNum==2){
		$("#about01_img").animate({"opacity":1},600,"easeOutCubic")
		$("#about01_text").animate({"opacity":1,"top":0},600,"easeOutCubic")
	}else if(slideNum==3){
		$("#about02_list").children().eq(0).animate({"opacity":1,"top":0},300,"easeOutCubic",function(){
			$("#about02_list").children().eq(1).animate({"opacity":1,"top":0},300,"easeOutCubic",function(){
				$("#about02_list").children().eq(2).animate({"opacity":1,"top":0},300,"easeOutCubic")
			})
		})
	}else if(slideNum==4){
		$("#editing_design").animate({"opacity":1},1000,"easeOutCubic")
		$("#editing_box").animate({"opacity":1,"top":0},1000,"easeOutCubic")
	}else if(slideNum==5){
		$("#career_design").animate({"opacity":1},1000,"easeOutCubic")
		$("#career_box").animate({"opacity":1,"top":0},1000,"easeOutCubic")
	}else if(slideNum==6){
		$("#balance_design").animate({"opacity":1},1000,"easeOutCubic")
		$("#balance_box").animate({"opacity":1,"top":0},1000,"easeOutCubic")
	}else if(slideNum==7){
		$("#link_title").animate({"top":0},600,"easeOutCubic",function(){
			$("#link_list").animate({"opacity":1},2000,"easeOutCubic")
		})
		
	}
		
	
	
	
	/*
	if(currentPosition<=0 && currentPosition>-1100){}
	
	if(currentPosition<=-1100 && currentPosition>-2200){
		$("#about01_img").animate({"opacity":1},600,"easeOutCubic")
		$("#about01_text").animate({"opacity":1,"top":0},600,"easeOutCubic")
	}else{
		$("#about01_img").css("opacity",0)
		$("#about01_text").css({"opacity":0,"top":100})
	} 
	
	
	if(currentPosition<=-2200 && currentPosition>-3300){
		$("#about02_list").children().eq(0).animate({"opacity":1,"top":0},600,"easeOutCubic",function(){
			$("#about02_list").children().eq(1).animate({"opacity":1,"top":0},600,"easeOutCubic",function(){
				$("#about02_list").children().eq(2).animate({"opacity":1,"top":0},600,"easeOutCubic")
			})
		})
	}else{
		$("#about02_list").children().css({"opacity":0,"top":100})
	}
	
	if(currentPosition<=-3300 && currentPosition>-4400){
		$("#editing_design").animate({"opacity":1},1000,"easeOutCubic")
		$("#editing_box").animate({"opacity":1,"top":0},1000,"easeOutCubic")
	}else{
		$("#editing_design").css("opacity",0)
		$("#editing_box").css({"opacity":0,"top":100})
	}
	
	if(currentPosition<=-4400 && currentPosition>-5500){
		$("#career_design").animate({"opacity":1},1000,"easeOutCubic")
		$("#career_box").animate({"opacity":1,"top":0},1000,"easeOutCubic")
	}else{
		$("#career_design").css("opacity",0)
		$("#career_box").css({"opacity":0,"top":100})
	}
	
	if(currentPosition<=-5500 && currentPosition>-6600){
		$("#balance_design").animate({"opacity":1},1000,"easeOutCubic")
		$("#balance_box").animate({"opacity":1,"top":0},1000,"easeOutCubic")
	}else{
		$("#balance_design").css("opacity",0)
		$("#balance_box").css({"opacity":0,"top":100})
	} 
	
	if(currentPosition<=-6600){
	}
	*/
	
}


function onLinkOver(){
	$(this).css({"background":"rgba(10,10,10,0.5)","border":"solid 1px #c69c6d"})
	$(this).children().children().css("color","#c69c6d")
	$(this).children().css("color","#c69c6d")
}


function onLinkOut(){
	$linkList.css({"background":"none","border":"solid 1px white"})
	$linkList.children().children().css("color","white")
	$linkList.children().css("color","white")
}













