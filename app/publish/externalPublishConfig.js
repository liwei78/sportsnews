function runnable(){
    var iconv = require('iconv-lite');
    var config = {};

    config['pubnews'] = {

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
    }

    return {
        type : 'external',
        config : config
    }
}

module.exports = runnable;