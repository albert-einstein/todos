steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/gantchart.ejs', function($){

/**
 * @class Todos.Controller.Gantchart
 */
$.Controller('Todos.Controller.Gantchart',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html("//todos/controller/gantchart/views/gantchart.ejs",Todos.Models.Todo.findAll());
	},
	"{Todos.Models.Todo} created": function(Todo,ev,todo) {
	    this.element.append("//todos/controller/gantchart/views/gantchart.ejs",[todo]);
	}
})

});