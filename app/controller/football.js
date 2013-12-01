sumeru.router.add(
  {
    pattern: '/football',
    action: 'App.football'
  }
);

App.football = sumeru.controller.create(function(env, session){

  var view = 'football';

  var getNews = function(){

    session.football = env.subscribe('pubfbnews', function(fbCollection){

      var obj = fbCollection.getData()[0];

      session.bind('fbBlock', {
        'topFBNews' : obj['topfbnews']
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