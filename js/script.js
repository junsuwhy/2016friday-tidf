$(document).ready(function($){
    $(".tip-title").click(function(){
        $(".tip-body").toggleClass('tip-body-open');
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
            if($(this).attr('data-movie') == 0)$(this).trigger('click');
        });
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
        var $elem = insertElem(htmlElem, parentElem, data[i],fields,false);
        $elem.removeClass(tempClass).attr('data-movie',i)
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