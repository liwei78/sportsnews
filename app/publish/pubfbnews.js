module.exports = function(fw){
  fw.publish('football', 'pubfbnews', function(callback){
    var collection = this;
    collection.extfind('pubfbnews', callback);
  });
}