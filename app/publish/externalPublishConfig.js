function runnable(){
    var iconv = require('iconv-lite');
    var config = {};

    config['pubnews'] = {

        uniqueColumn : "news",

        fetchUrl : function(){
              return 'http://sports.sina.com.cn/';
        },
        
        resolve : function(originData){
            decodeData = iconv.decode(originData,'gb2312');

            var topnewsRegex = /<div class="mod-focus-news" data-sudaclick="foucs_news">([\W\w]*?)<!-- 要闻part2 begin-->/;
            var topnews = decodeData.match(topnewsRegex)[1];

            var resolved = {
                topnews: topnews
            }

            return resolved;
        },

        fetchInterval : 15 * 1000,
        //如果需要转码，buffer设为true， 默认为false
        buffer : true
    };

    config['pubnbanews'] = {

        uniqueColumn : "nbanews",

        method: 'GET',

        fetchUrl : function(){
              return 'http://china.nba.com/news/';
        },
        
        resolve : function(originData){
            decodeData = iconv.decode(originData,'gb2312');

            var topnbanewsRegex = /<div id="Page_1">([\W\w]*?)<div id="Page_2" style="display:none;">/;
            var topnbanews = decodeData.match(topnbanewsRegex)[1];

            var resolved = {
                topnbanews: topnbanews
            }

            return resolved;
        },

        fetchInterval : 15 * 1000,
        //如果需要转码，buffer设为true， 默认为false
        buffer : true
    };

    config['pubfbnews'] = {

        uniqueColumn : "football",

        method: 'GET',

        fetchUrl : function(){
              return 'http://sports.baidu.com/';
        },
        
        resolve : function(originData){
            decodeData = iconv.decode(originData,'gb2312');

            // var topfbnewsRegex = /<h2>英超<\/h2>([\W\w]*?)<p class="more" style="position: absolute; top: 280px; width: 96%; text-align: right;"><a href="http:\/\/news.baidu.com\/n?cmd=4&amp;class=Yingchao&amp;pn=1" target="_blank">更多英超新闻&gt;&gt;<\/a><\/p>/;
            var topfbnewsRegex = /<body>([\W\w]*?)<\/body>/;
            var topfbnews = decodeData.match(topfbnewsRegex)[1];

            var resolved = {
                topfbnews: topfbnews
            }

            return resolved;
        },

        fetchInterval : 15 * 1000,
        //如果需要转码，buffer设为true， 默认为false
        buffer : true
    };


    return {
        type : 'external',
        config : config
    }
}

module.exports = runnable;