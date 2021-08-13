
$(document).ready(function(e){
	
	
	skillDataCount()
	
	
	
})


function skillDataCount(){
	$('#skillSet li').each(function() {
		var dataCount=$(this).attr('data-count');
		// alert(dataCount);
		$(this).circleProgress({
			value: dataCount*0.01
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(dataCount * progress) + '<i>%</i>');
		});
	});
}
