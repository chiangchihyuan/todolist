var App = {};
//init todo list data structure
App.init = function(){
  this.data = []; 
};
//Add function to add list
App.add = function(str){
  this.data.push(str);
  App.render();
};
//remove
App.remove = function(index){
  this.data.splice(data.length-1-index, 1);
  App.render();
};
//render
App.render = function(){
};

App.init();



