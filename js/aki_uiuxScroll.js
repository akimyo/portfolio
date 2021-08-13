
var UIUXscrollTop
var $RWD_slogan
var $RWD_headline
var $RWD_text
var $RWD_banner
var $RWD_guide
var $RWD_sketch
var $RWD_proposal
var $over_main
var $oven_sub
var $over_mockup
var $GUI_guide

$(document).ready(function(){
	
	$RWD_slogan=$("#mockup_responsive").children().children().eq(0)
	$RWD_headline=$("#mockup_responsive").children().children().eq(1)
	$RWD_text=$("#mockup_responsive").children().children().eq(2)
	$RWD_banner=$("#portflio_banner").children()
	$RWD_guide=$("#guide_list").children()
	$RWD_sketch=$("#ideas_sketch")
	$RWD_proposal=$("#design_proposal")
	$over_main=$("#oven_01")
	$oven_sub=$("#oven_02")
	$over_mockup=$("#mockup_oven")
	$GUI_guide=$("#design_style_guide")		
	
	$("#code_box_pc").css("left",-1000)
	$("#code_box_tablet").css("left",-1000)
	$("#code_box_mobile").css("left",-1000)
	$("#url_link_pc").css("opacity",0)
	$("#url_link_tablet").css("opacity",0)
	$("#url_link_mobile, #mobile_qr_link").css("opacity",0)
	
	$RWD_slogan.css({"top":100,"opacity":0})
	$RWD_headline.css({"top":100,"opacity":0})
	$RWD_text.css({"top":100,"opacity":0})
	$RWD_banner.css({"top":100,"opacity":0})
	$RWD_guide.css({"top":200,"opacity":0})
	$RWD_sketch.css({"top":100,"opacity":0})
	$RWD_proposal.css({"top":100,"opacity":0})
	$over_main.css({"top":100,"opacity":0})
	$oven_sub.css({"top":100,"opacity":0})
	$over_mockup.css({"top":100,"opacity":0})
	$GUI_guide.css({"top":-100,"opacity":0})
	
	
	$RWD_slogan.animate({"top":0,"opacity":1},800,"easeOutCubic",function(){
		$RWD_headline.animate({"top":0,"opacity":1},800,"easeOutCubic",function(){
			$RWD_text.animate({"top":0,"opacity":1},800,"easeOutCubic")
		})
	})
	
	
	$(window).bind("scroll", onUIUXscroll);		
	
})

function onUIUXscroll(){
	
	UIUXscrollTop=$(document).scrollTop()
	
	if(UIUXscrollTop>620){
		$RWD_banner.stop()
		$RWD_banner.animate({"top":0,"opacity":1},800,"easeOutCubic")
	}
	
	if(UIUXscrollTop>1000){
		for(var i=0; i<4; i++){
			$RWD_guide.eq(i).stop()
			$RWD_guide.eq(i).animate({"top":0,"opacity":1},600+(400*i),"easeOutCubic") 			
		}
	}
	
	if(UIUXscrollTop>1500){
		$RWD_sketch.stop()
		$RWD_sketch.animate({"top":0,"opacity":1},800,"easeOutCubic")
	}
	
	if(UIUXscrollTop>2200){
		$RWD_proposal.stop()
		$RWD_proposal.animate({"top":0,"opacity":1},800,"easeOutCubic")
	}
	
	if(UIUXscrollTop>3200){
		$over_main.stop()
		$over_main.animate({"top":0,"opacity":1},800,"easeOutCubic")
	}
	
	if(UIUXscrollTop>3800){
		$oven_sub.stop()
		$oven_sub.animate({"top":0,"opacity":1},800,"easeOutCubic")
		$over_mockup.stop()
		$over_mockup.animate({"top":0,"opacity":1},800,"easeOutCubic")
	}
	
	if(UIUXscrollTop>5000){
		$GUI_guide.stop()
		$GUI_guide.animate({"top":-200,"opacity":1},800,"easeOutCubic")
	}
	
	//배경화면
	if(UIUXscrollTop>=6045 && UIUXscrollTop<8650){
		$("body").css("background","#1a1a1a")
		$("#change_slogan").removeClass("black_color")
		$("#change_headline").removeClass("navy_color")
		$("#change_color").removeClass("black_color")
		$("#change_color").addClass("point_color")
		$("#change_num").removeClass("navy_color")
		
	}else{
		$("body").css("background","none")
		$("#change_slogan").addClass("black_color")
		$("#change_headline").addClass("navy_color")
		$("#change_color").removeClass("point_color")
		$("#change_color").addClass("black_color")
		$("#change_num").addClass("navy_color")
	}
	
	//pc화면이동
	if(UIUXscrollTop>=6100 && UIUXscrollTop<6500){
		$("#uiux_pc_box").children("img").stop()
		$("#uiux_pc_box").children("img").animate({"top":-400},1000,"linear")
		$("#code_box_pc").stop()
		$("#code_box_pc").animate({"left":0},800,"easeOutCubic",function(){
			$("#url_link_pc").stop()
			$("#url_link_pc").animate({"opacity":1},500,"easeOutCubic")
		})
	}else if(UIUXscrollTop>=6500 && UIUXscrollTop<6800){
		$("#uiux_pc_box").css({"z-index":20,"box-shadow":"0px 0px 10px gray"})
		$("#uiux_pc_box").css("top",524+(UIUXscrollTop-6500))
	}else if(UIUXscrollTop>=6800){
		$("#uiux_pc_box").css("z-index",1)
		TweenLite.to("#uiux_pc_box",0.7,{top:1290, scaleX:0.47, opacity:0, onComplete:onPcBox})
	}else{
		$("#uiux_pc_box").show()
		$("#uiux_pc_box").children("img").stop()
		$("#uiux_pc_box").children("img").animate({"top":0},800,"linear")
		$("#uiux_pc_box").css({"top":524,"opacity":1,"z-index":5,"box-shadow":"none"})
	}
	
	//tablet화면이동
	if(UIUXscrollTop>=7000 && UIUXscrollTop<7200){
		$("#uiux_tablet_box").children("img").stop()
		$("#uiux_tablet_box").children("img").animate({"top":-500},800,"linear")
		$("#code_box_tablet").stop()
		$("#code_box_tablet").animate({"left":0},800,"easeOutCubic",function(){
			$("#url_link_tablet").stop()
			$("#url_link_tablet").animate({"opacity":1},500,"easeOutCubic")
		})
	}else if(UIUXscrollTop>=7200 && UIUXscrollTop<7600){
		$("#uiux_tablet_box").css({"z-index":20,"box-shadow":"0px 0px 10px gray"})
		$("#uiux_tablet_box").css("top",1288+(UIUXscrollTop-7200))
	}else if(UIUXscrollTop>=7600){
		$("#uiux_tablet_box").css("z-index",1)
		TweenLite.to("#uiux_tablet_box",0.6,{top:2000, scaleX:0.7, onComplete:onTabletBox})
	}else{
		$("#uiux_tablet_box").show()
		$("#uiux_tablet_box").children("img").stop()
		$("#uiux_tablet_box").children("img").animate({"top":0},800,"linear")
		$("#uiux_tablet_box").css({"top":1288,"opacity":1,"z-index":5,"box-shadow":"none"})
	}
	
	//tablet화면이동
	if(UIUXscrollTop>=7600 && UIUXscrollTop<8000){
		$("#uiux_mobile_box").children("img").stop()
		$("#uiux_mobile_box").children("img").animate({"top":-400},500,"linear")
		$("#code_box_mobile").stop()
		$("#code_box_mobile").animate({"left":0},800,"easeOutCubic",function(){
			$("#url_link_mobile, #mobile_qr_link").stop()
			$("#url_link_mobile, #mobile_qr_link").animate({"opacity":1},500,"easeOutCubic")
		})
	}else{
		$("#uiux_mobile_box").children("img").stop()
		$("#uiux_mobile_box").children("img").animate({"top":0},500,"linear")
	}
		
	
}

function onPcBox(){
	$("#uiux_pc_box").hide()
	$("#uiux_pc_box").css("transform","scale(1,1)")
}

function onTabletBox(){
	$("#uiux_tablet_box").hide()
	$("#uiux_tablet_box").css("transform","scale(1,1)")
}

	
