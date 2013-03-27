steal( 'jquery/controller',
	'jquery/dom/form_params',
	 'jquery/controller/view',
	'jquery/view/ejs' )
	.then( './views/create.ejs', function($){

/**
 * @class Todos.Controller.Create
 */
$.Controller('Todos.Controller.Create',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
	// load form create todo
	    this.element.html("//todos/controller/create/views/create.ejs",{});
	},
	//lắng nghe sự kiện tạo của form
	submit: function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...');
		todo=new Todos.Models.Todo(el.formParams());
		todo.save(this.callback('saved'));
	},
	//sau khi lưu xong sẽ gọi tới hàm saved để reset form
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});