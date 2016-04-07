// JavaScript Document

//==大網banner 切換================================================
	$(function(){
    
    var item_width = $('.banner_In li').outerWidth(); 
    var left_value = item_width * (-1); 
    $('.banner_In li:first').before($('.banner_In li:last'));
    
    $('.banner_In ul').css({'left' : left_value});
    $('#left').click(function() {
        var left_indent = parseInt($('.banner_In ul').css('left')) + item_width;
        $('.banner_In ul').animate({'left' : left_indent}, 300,function(){    
            $('.banner_In li:first').before($('.banner_In li:last'));           
            $('.banner_In ul').css({'left' : left_value});
        });
        return false;
            
    });
    $('#right').click(function() {
        
        var left_indent = parseInt($('.banner_In ul').css('left')) - item_width;
        
        $('.banner_In ul').animate({'left' : left_indent}, 300, function () {
            $('.banner_In li:last').after($('.banner_In li:first'));                     
            $('.banner_In ul').css({'left' : left_value});
        });
                 
        return false;
    });        
});
	function rotate() {
		$('#right').click();
	}
	
//==小網banner輪播 切換================================================
	$(function(){
    var speed = 2000;
    var run = setInterval('rotate()', speed);    
    
    var item_width = $('.banner_In_m li').outerWidth(); 
    var left_value = item_width * (-1); 
        
    $('.banner_In_m li:first').before($('.banner_In_m li:last'));
    
    $('.banner_In_m ul').css({'left' : left_value});
    $('#left_m').click(function() {
        var left_indent = parseInt($('.banner_In_m ul').css('left')) + item_width;
        $('.banner_In_m ul').animate({'left' : left_indent}, 200,function(){    
            $('.banner_In_m li:first').before($('.banner_In_m li:last'));           
            $('.banner_In_m ul').css({'left' : left_value});
        
        });
        return false;
    });

    $('#right_m').click(function() {
        
        var left_indent = parseInt($('.banner_In_m ul').css('left')) - item_width;
        $('.banner_In_m ul').animate({'left' : left_indent}, 200, function () {
            $('.banner_In_m li:last').after($('.banner_In_m li:first'));                     
            $('.banner_In_m ul').css({'left' : left_value});
        });                 
        return false;
        
    });        
    
    $('.banner_In_m').hover(
        function() {
            clearInterval(run);
        }, 
        function() {
            run = setInterval('rotate()', speed);    
        }
    ); 
        
});
	function rotate() {
		$('#right_m').click();
	}