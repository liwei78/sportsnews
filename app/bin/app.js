sumeru.config({httpServerPort:8080,sumeruPath:"/../sumeru"}),sumeru.router.add({pattern:"/itworks",action:"App.itworks"}),App.itworks=sumeru.controller.create(function(e,t){e.onrender=function(e){e("itworks",["push","left"])}}),sumeru.router.add({pattern:"/news",action:"App.news"}),sumeru.router.setDefault("App.news"),App.news=sumeru.controller.create(function(e,t){var n="news",r=function(){t.news=e.subscribe("pubnews",function(e){var n=e.getData()[0];t.bind("newsBlock",{topNews:n.topnews})})};e.onload=function(){return[r]},e.onrender=function(e){e(n,["push","left"])}}),sumeru.router.add({pattern:"/nba",action:"App.nba"}),App.nba=sumeru.controller.create(function(e,t){var n="nba",r=function(){t.nba=e.subscribe("pubnbanews",function(e){var n=e.getData()[0];t.bind("nbaBlock",{topNBANews:n.topnbanews})})};e.onload=function(){return[r]},e.onrender=function(e){e(n,["push","right"])}}),sumeru.router.add({pattern:"/football",action:"App.football"}),App.football=sumeru.controller.create(function(e,t){var n="football",r=function(){t.football=e.subscribe("pubfbnews",function(e){var n=e.getData()[0];t.bind("fbBlock",{topFBNews:n.topfbnews})})};e.onload=function(){return[r]},e.onrender=function(e){e(n,["push","right"])}}),Model.news=function(e){e.config={fields:[{name:"topnews",type:"text"}]}},Model.nba=function(e){e.config={fields:[{name:"topnbanews",type:"text"}]}},Model.nba=function(e){e.config={fields:[{name:"topfbnews",type:"text"}]}};