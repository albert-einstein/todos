steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/list.ejs', function($){

/**
 * @class Todos.Controller.List
 */
$.Controller('Todos.Controller.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html("//todos/controller/list/views/list.ejs",Todos.Models.Todo.findAll());
	},
	'{Todos.Models.Todo} created': function(Todo,ev,todo) {
	    this.element.append("//todos/controller/list/views/list.ejs", [todo]);
	}
})

});