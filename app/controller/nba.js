sumeru.router.add(
  {
    pattern: '/nba',
    action: 'App.nba'
  }
);

App.nba = sumeru.controller.create(function(env, session){

  var view = 'nba';

  var getNews = function(){

    session.nba = env.subscribe('pubnbanews', function(nbaCollection){

      var obj = nbaCollection.getData()[0];

      session.bind('nbaBlock', {
        'topNBANews' : obj['topnbanews']
      });

    });
  };

  env.onload = function(){
    return [getNews];
  };
  env.onrender = function(doRender){
    doRender(view, ['push', 'right']);
  };
});