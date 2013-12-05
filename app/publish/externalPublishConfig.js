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
              return 'http://roll.sports.sina.com.cn/s_premierleague_all/5/index.shtml';
        },
        
        resolve : function(originData){
            decodeData = iconv.decode(originData,'gb2312');

            var topfbnewsRegex = /<div class="d_list_txt" id="d_list">([\W\w]*?)<div class="pagebox">/;
            // var topfbnewsRegex = /<body>([\W\w]*?)<\/body>/;
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