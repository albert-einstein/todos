steal("funcunit", function(){
	module("todos test", { 
		setup: function(){
			S.open("//Todos/todos.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})