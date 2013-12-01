module.exports = function(fw){
  fw.publish('nba', 'pubnbanews', function(callback){
    var collection = this;
    collection.extfind('pubnbanews', callback);
  });
}