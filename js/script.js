$(document).ready(function($){ 
    $("tip-title").click(function(){
		$(".tip-body").animate({height: $("tip-body").get(0).scrollHeight},'slow');
		$(".tip-body").css("height","auto");
    });
});