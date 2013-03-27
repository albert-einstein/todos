steal('jquery/model', function() {

    /**
     * @class Todos.Models.Todo
     * @parent index
     * @inherits jQuery.Model Wraps backend todo services.
     */
    $.Model('Todos.Models.Todo',
    /* @Static */
    {
	attributes : {
	    name : 'string',// tên của todo có kiểu dữ liệu string
	    description : 'string',// mô tả của todo có kiểu dữ liệu string
	    startDate : 'date'// ngày bắt đầu công việc có dữ liệu là date
	},
	serialize : {
	    "date" : function(val) {
		return new Date(val);
	    }
	},
	findAll : "/todos.json",
	findOne : "/todos/{id}.json",
	create : "/todos.json",
	update : "/todos/{id}.json",
	destroy : "/todos/{id}.json"
    },
    /* @Prototype */
    {
	// thực hiện convert với dữ liệu phù hợp
	setName : function(raw) {
	    if (typeof raw == 'string') {
		return raw;
	    } else {
		throw new Error("Invalid Type [string]");
	    }
	},

    });

})