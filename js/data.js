var dataFields = ["title","titleB","director","award","awardB","description","imgBig","imgSmall","youtubeID","link","mlink"];


/**
 * 程式更改規則說明~
 * 任何字串都要用 "" 或是 '' 包覆起來
 * 「 : 」前面的 "title", "award" 這些不要更動
 * 每行結尾一定要有 「 , 」
 * "" 裡面不要有斷行
 */

var data = [
    {
        "title" : "金城小子",
        "titleB" : "金城小子",
        "director" : "XXX",
        "award" : "TIDF 歷年得獎精選",
        "awardB" : "第八屆台灣獎首獎",
        "description" : "同步榮獲第48屆金馬獎最佳紀錄片;從小離鄉的知名畫家劉小東,30年後決定重歸故里,重新面對鄉愁",
        "imgBig" : "pic1_1.jpg",
        "imgSmall" : "pic1_2.jpg",
        "youtubeID" : "G71t7rXZC1w",
        "link" : "http://video.friday.tw/sn?sn=2016TIDF&button=2016TIDF",
        "mlink" : "http://video.friday.tw/m/sn?sn=2016TIDF&button=2016TIDF",
    },{
        "title" : "艾未未．草泥馬",
        "titleB" : "艾未未．草泥馬",
        "director" : "XXX",
        "award" : "TIDF 歷年得獎精選",
        "awardB" : "第八屆國際長片競賽評審團特別提及獎",
        "description" : "同步榮獲日舞影展評審團特別獎;中國最具爭議藝術家-艾未未,搏命歷程唯一全紀錄",
        "imgBig" : "pic2_1.jpg",
        "imgSmall" : "pic2_2.jpg",
        "youtubeID" : "hKmZ65MlOl8",
        "link" : "http://video.friday.tw/sn?sn=2016TIDF&button=2016TIDF",
        "mlink" : "http://video.friday.tw/m/sn?sn=2016TIDF&button=2016TIDF",
    },{
        "title" : "黑晝記",
        "titleB" : "黑晝記",
        "director" : "XXX",
        "award" : "TIDF 歷年得獎精選",
        "awardB" : "第六屆台灣獎 評審團特別獎",
        "description" : "記錄著父親罹患癌症後,兩人一同經歷種種治療的心路歷程",
        "imgBig" : "pic3_1.jpg",
        "imgSmall" : "pic3_2.jpg",
        "youtubeID" : "j8MOCZP9yHI",
        "link" : "http://video.friday.tw/sn?sn=2016TIDF&button=2016TIDF",
        "mlink" : "http://video.friday.tw/m/sn?sn=2016TIDF&button=2016TIDF",
    },{
        "title" : "再會吧！1999",
        "titleB" : "再會吧！1999",
        "director" : "XXX",
        "award" : "TIDF 歷年得獎精選",
        "awardB" : "第四屆台灣獎首獎",
        "description" : "同步榮獲台北電影節百萬首獎;獨特的剪輯運鏡與動人旁白,深刻展現導演對母親的思念",
        "imgBig" : "pic4_1.jpg",
        "imgSmall" : "pic4_2.jpg",
        "youtubeID" : "91zsx1ebG_o",
        "link" : "http://video.friday.tw/sn?sn=2016TIDF&button=2016TIDF",
        "mlink" : "http://video.friday.tw/m/sn?sn=2016TIDF&button=2016TIDF",
    },{
        "title" : "部落之音",
        "titleB" : "部落之音",
        "director" : "XXX",
        "award" : "TIDF 歷年得獎精選",
        "awardB" : "第四屆台灣獎 評審團推薦獎",
        "description" : "原住民廣播主持人以犀利而戲謔的旁白引領我們見證一段在九二一地震後部落重建的經歷",
        "imgBig" : "pic5_1.jpg",
        "imgSmall" : "pic5_2.jpg",
        "youtubeID" : "9N2ik31VSow",
        "link" : "http://video.friday.tw/sn?sn=2016TIDF&button=2016TIDF",
        "mlink" : "http://video.friday.tw/m/sn?sn=2016TIDF&button=2016TIDF",
    },{
        "title" : "第四公民",
        "titleB" : "第四公民",
        "director" : "XXX",
        "award" : "編輯選片",
        "awardB" : "奧斯卡最佳紀錄電影大獎",
        "description" : "震撼全球「史諾登事件」的現場直擊,一場驚天動地、匪夷所思的監控風暴即將登場",
        "imgBig" : "pic6_1.jpg",
        "imgSmall" : "pic6_2.jpg",
        "youtubeID" : "4xLWXTJN6I8",
        "link" : "http://video.friday.tw/sn?sn=2016TIDF&button=2016TIDF",
        "mlink" : "http://video.friday.tw/m/sn?sn=2016TIDF&button=2016TIDF",
    },{
        "title" : "哈瑪斯之子",
        "titleB" : "哈瑪斯之子",
        "director" : "XXX",
        "award" : "編輯選片",
        "awardB" : "日舞影展 觀眾票選最佳紀錄電影",
        "description" : "中東著名恐怖組織「哈瑪斯」頭目的親生子,為了大是大非「出賣」了父親",
        "imgBig" : "pic7_1.jpg",
        "imgSmall" : "pic7_2.jpg",
        "youtubeID" : "r680wdZZnUo",
        "link" : "http://video.friday.tw/sn?sn=2016TIDF&button=2016TIDF",
        "mlink" : "http://video.friday.tw/m/sn?sn=2016TIDF&button=2016TIDF",
    },{
        "title" : "太陽•不遠",
        "titleB" : "太陽•不遠",
        "director" : "XXX",
        "award" : "編輯選片",
        "awardB" : "台灣史上最大學運完整記錄",
        "description" : "奔向自由時代,民主台灣最熱血的光影記事。台灣史上最大學運-太陽花運動,這期間青年世代改變了什麼?",
        "imgBig" : "pic8_1.jpg",
        "imgSmall" : "pic8_2.jpg",
        "youtubeID" : "2qEjb4Emzc0",
        "link" : "http://video.friday.tw/sn?sn=2016TIDF&button=2016TIDF",
        "mlink" : "http://video.friday.tw/m/sn?sn=2016TIDF&button=2016TIDF",
    },{
        "title" : "蘇富比偽畫大師",
        "titleB" : "蘇富比偽畫大師",
        "director" : "XXX",
        "award" : "編輯選片",
        "awardB" : "2014德國奧斯卡最佳紀錄片",
        "description" : "畫技高超的偽畫師,因藝術史上最大偽畫案被判六年刑期,並面臨2700萬美元的求償訴訟,幕前幕後充滿話題性",
        "imgBig" : "pic9_1.jpg",
        "imgSmall" : "pic9_2.jpg",
        "youtubeID" : "BcqPkVVehZo",
        "link" : "http://video.friday.tw/sn?sn=2016TIDF&button=2016TIDF",
        "mlink" : "http://video.friday.tw/m/sn?sn=2016TIDF&button=2016TIDF",
    },
    
            
    ];