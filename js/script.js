$(document).ready(function ($) {
    
    $("tip-title").click(function () {
		$(".tip-body").animate({height: $("tip-body").get(0).scrollHeight},'slow');
		$(".tip-body").css("height","auto");
    });
    console.log(data,dataFields);
    copyTemplate(".m-list-item-template",".m-list",data,dataFields);
});


function copyTemplate (tempElem,parentElem,data,fields) {
    htmlTemp = $(tempElem).html();
    for(var i = 0;i<data.length;i++){
        htmlElem = htmlTemp;
        for(var j = 0;j<fields.length; j++){
            htmlElem = htmlElem.replace("{{"+fields[j]+"}}",data[i][fields[j]]);
        }
        tempClass = tempElem.replace(".","");
        $elem = $('<div>').attr('class',$(tempElem).attr('class')).removeClass(tempClass).html(htmlElem);
        $(parentElem).append($elem);
    }
}

function insertElem(html,parentElem,dataElem,fields,isReplace){
    
}