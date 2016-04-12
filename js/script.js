$(document).ready(function($){
    $(".tip-body").css("max-height",0);
    $(".tip-title").click(function(){
        if($(this).hasClass('is-open')){
            $(".tip-body").animate({"max-height": 0 ,"padding-top":0,"padding-bottom":0},'slow');
            $(this).removeClass('is-open');
        }else{
            $(".tip-body").animate({"max-height": 999,"padding-top":30,"padding-bottom":30},'slow');
            $(this).addClass('is-open');
        }
        
    });
    copyTemplate(".m-list-item-template-pc",".m-list-inner-pc",data,dataFields);
    copyTemplate(".m-list-item-template-m",".m-list-inner-m",data,dataFields);
    $('.m-list-item-pc').each(function(){
        $(this).click(function(){
            var tempClass = 'm-body-template-pc';
            var htmlElem = $('.'+tempClass).parent().html();
            var $elem = insertElem(htmlElem,'.m-body-pc',data[$(this).attr('data-movie')],dataFields,true).removeClass(tempClass);
        });
        if($(this).attr('data-movie') == 0)$(this).trigger('click');
    });
    $('.m-list-item-m').each(function(){
        $(this).click(function(){
            var tempClass = 'm-body-template-m';
            var htmlElem = $('.'+tempClass).parent().html();
            console.log($(this).data('movie'));
            var $elem = insertElem(htmlElem,'.m-body-m',data[$(this).attr('data-movie')],dataFields,true).removeClass(tempClass);
        });
        if($(this).attr('data-movie') == 0)$(this).trigger('click');
    });
    $('.m-list-inner').slick({
        slidesToShow: 2,
        slidesToScroll: 2
    });
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});


function copyTemplate(tempElem,parentElem,data,fields){
    var htmlTemp = $(tempElem).parent().html();
    for(var i = 0;i<data.length;i++){
        var htmlElem = htmlTemp;
        var tempClass = tempElem.replace(".","");
        var itemClassName = parentElem.replace(".","");
        var $elem = insertElem(htmlElem, parentElem, data[i],fields,false);
        $elem.removeClass(tempClass).attr('data-movie',i).addClass(itemClassName + "-item-" + i);
    }
}

/**
 * 將一串 html 的變數以 data 的字串取代，然後插入 jquery 物件中
 * @param  String  htmlElem   被當作 template 的html文字
 * @param  jQuery  parentElem html 更新後要置入的物件
 * @param  Object  dataElem   物件 key: html中搜尋字串 value: 取代字串
 * @param  array  fields     dataElem 要搜尋的字串組成的陣列
 * @param  {Boolean} isReplace  為True時取代，為False時置入
 * @return jQuery             回傳新增元件的jQuery物件
 */
function insertElem(htmlElem,parentElem,dataElem,fields,isReplace){
    console.log(dataElem);
    for(var j = 0;j<fields.length; j++){
            htmlElem = htmlElem.replace("{{"+fields[j]+"}}",dataElem[fields[j]]);
        }
    $elem = $(htmlElem);
    if(isReplace){
        $(parentElem).html($elem);
    }else{
        $(parentElem).append($elem);
    }
    return $elem;
}

//FB share
function shareFacebook(){
	var share_url = 'https://www.facebook.com/dialog/feed?app_id=505571959643999&display=popup&picture=http%3A%2F%2Fvideo.friday.tw%2Fact%2F2016TIDF%2Fimg%2Ffb_og.jpg&link=http%3A%2F%2Fvideo.friday.tw%2Fact%2F2016TIDF%2F&redirect_uri=http%3A%2F%2Fvideo.friday.tw%2Fact%2F2016TIDF%2F&name=friDay%E5%BD%B1%E9%9F%B3X2016%20TIDF&description=%E6%90%B6%E5%85%88%E6%92%AD%E6%98%A0TIDF%E6%AD%B7%E5%B1%86%E5%BE%97%E7%8D%8E%E7%B2%BE%E9%81%B8%EF%BC%814%2F24%E5%89%8D%E5%85%8C%E6%8F%9B%E5%85%8D%E8%B2%BB%E9%AB%94%E9%A9%97%E5%BA%8F%E8%99%9F%EF%BC%8C%E5%8A%A0%E7%A2%BC%E5%86%8D%E6%8A%BD2016%20TIDF%E8%B2%B4%E8%B3%93%E5%85%8C%E6%8F%9B%E5%88%B8%EF%BC%81';
	var w_width=600;                                                                        
	var w_height=300;                                                                        
	var x=(screen.width-w_width)/2;                                                        
	var y=(screen.height-w_height)/2;                                                     
	var ww='width='+w_width+',height='+w_height+',top='+y+',left='+x;   
	
	window.open(share_url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,'+ww);
	
}