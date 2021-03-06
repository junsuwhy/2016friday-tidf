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
    for(var j = 0;j<fields.length; j++){
        var content = dataElem[fields[j]];
        re = RegExp("\{\{" + fields[j] + "\}\}","gi");
        htmlElem = htmlElem.replace(re,content);
        re2 = RegExp("\{\{" + fields[j] + "\\?([^:]*):([^\}]*)\}\}","gi");
        if(content == "" || content == undefined){
            htmlElem = htmlElem.replace(re2,"$2");
        }else{
            htmlElem = htmlElem.replace(re2,"$1");
        }
    }
    $elem = $(htmlElem);
    if(isReplace){
        $(parentElem).html($elem);
    }else{
        $(parentElem).append($elem);
    }
    return $elem;
}

//FB share, used in PC
function shareFacebook(url, options, app_id){
    /**
     * options: 
     * picture, name, description, redirect_uri
     */

    var share_url = 'https://www.facebook.com/dialog/feed?app_id=' + app_id + '&display=popup&picture=' + encodeURI(options.picture) + '&link=' + url + '&redirect_uri=' + encodeURI(options.redirect_uri) + '&name=' + encodeURI(options.name) + '&description=' + encodeURI(options.description);
    console.log(share_url);
	var w_width=600;                                                                        
	var w_height=300;                                                                        
	var x=(screen.width-w_width)/2;                                                        
	var y=(screen.height-w_height)/2;                                                     
	var ww='width='+w_width+',height='+w_height+',top='+y+',left='+x;   
	
	window.open(share_url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,'+ww);
	
}