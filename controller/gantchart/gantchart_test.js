steal('funcunit').then(function(){

module("Todos.Controller.Gantchart", { 
	setup: function(){
		S.open("//todos/controller/gantchart/gantchart.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Todos.Controller.Gantchart Demo","demo text");
});


});