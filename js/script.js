$(document).ready(function ($) {
    $("tip-title").click(function () {
		$(".tip-body").animate({height: $("tip-body").get(0).scrollHeight},'slow');
		$(".tip-body").css("height","auto");
    });
    copyTemplate(".m-list-item-template",".m-list",data,dataFields);
    $('.m-list').slick({
        slidesToShow: 2,
        slidesToScroll: 2
    });
});


function copyTemplate(tempElem,parentElem,data,fields) {
    var htmlTemp = $(tempElem).parent().html();
    for(var i = 0;i<data.length;i++){
        var htmlElem = htmlTemp;
        var tempClass = tempElem.replace(".","");
        var $elem = insertElem(htmlElem, parentElem, data[i],fields,false);
        $elem.removeClass(tempClass).data('movie',i).click(function(){
            var tempClass = 'm-body-template';
            var htmlElem = $('.'+tempClass).parent().html();
            var $elem = insertElem(htmlElem,'.m-body',data[$(this).data('movie')],fields,true).removeClass(tempClass);
        });
        if(i == 0)$elem.trigger('click');
    }
}

function insertElem(htmlElem,parentElem,dataElem,fields,isReplace){
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