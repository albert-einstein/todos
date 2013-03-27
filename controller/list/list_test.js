steal('funcunit').then(function(){

module("Todos.Controller.List", { 
	setup: function(){
		S.open("//todos/controller/list/list.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Todos.Controller.List Demo","demo text");
});


});