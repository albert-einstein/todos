steal('funcunit').then(function(){

module("Todos.Controller.Create", { 
	setup: function(){
		S.open("//todos/controller/create/create.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Todos.Controller.Create Demo","demo text");
});


});