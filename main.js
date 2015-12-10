var App = {};//宣告名稱為App的物件
//init todo list data structure
App.init = function(){
  this.data = []; 
  // $('#addbtn').click(function(e){
  // 	App.add($(event.target).prev().val());//取得add button前面的元素的值，並且將值丟到App.add()方法
  // });
  $('#add').delegate('#addbtn','click',function(){/*針對#add綁定click事件，但是只針對底下的button有效  ref:http://jsgears.com/thread-402-1-1.html*/
  	App.add($(event.target).prev().val());/*取得add button前面的元素的值，並且將值丟到App.add()方法*/
  });
  $('#todo-list').delegate('.removeclass', 'click',function(){
  	App.remove($('.removeclass').index(this));//this???
  });
};
//Add function to add list
App.add = function(str){
  this.data.push(str);
  App.render();
};
//remove
App.remove = function(index){
  this.data.splice(this.data.length-1-index, 1);/*由start位置開始移除指定的元素個數 */
  App.render();
};
//render
App.render = function(){
	var text = "";
	for(var i = this.data.length-1 ; i>=0;i--){ //index由最大值遞減。eg：6,5,4,3,2,1
		text += "<li>" + this.data[i] + "<button class =  removeclass>" + 
    "remove" + "</button>" + "</li>";
	}
	// for(var i = 0; i <= this.data.length-1; i++){
	// 	text += "<li>" + this.data[i] + "</li>";
	// }
	$('#todo-list').html(text); //jQuery用法，todo-list為ul的id

};

App.init();



// <li>5<button class = "removeclass">class</button></li>