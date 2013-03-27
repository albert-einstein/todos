steal("funcunit/qunit", "todos/fixtures", "todos/models/todo.js", function() {
    module("Model: Todos.Models.Todo")

    test("findAll", function() {
	expect(5);
	stop();
	Todos.Models.Todo.findAll({}, function(todos) {
	    ok(todos)
	    ok(todos.length)
	    ok(todos[0].name)
	    ok(todos[0].description)
	    ok(todos[0].startDate)
	    start();
	});

    })

    test("create", function() {
	expect(3)
	stop();
	new Todos.Models.Todo({
	    name : "dry cleaning",
	    description : "take to street corner"
	}).save(function(todo) {
	    ok(todo);
	    ok(todo.id);
	    equals(todo.name, "dry cleaning")
	    todo.destroy()
	    start();
	})
    })
    test("update", function() {
	expect(2);
	stop();
	new Todos.Models.Todo({
	    name : "cook dinner",
	    description : "chicken"
	}).save(function(todo) {
	    equals(todo.description, "chicken");
	    todo.update({
		description : "steak"
	    }, function(todo) {
		equals(todo.description, "steak");
		todo.destroy();
		start();
	    })
	})

    });
    test("destroy", function() {
	expect(1);
	stop();
	new Todos.Models.Todo({
	    name : "mow grass",
	    description : "use riding mower"
	}).destroy(function(todo) {
	    ok(true, "Destroy called")
	    start();
	})
    })
    //Test covert startDate với date là string mm/dd/yyyy
    test("covert startDate is string", function() {
	todo=new Todos.Models.Todo({startDate:'12/2/2013'});
	expect(2);
	stop();
	ok(todo.startDate);
	equals(todo.startDate,new Date("12/2/2013").getTime());
	start();
    })
    //Test convert name is number
    //expect : exception Invalid Type [string]
    test("convert invalid String Type", function() {
	expect(1);
	stop();
	//jquery raises test catch exception
	raises(function() {
	    todo=new Todos.Models.Todo({name:123});
	}, function(err) {
	    console.log("error",err.message);
	    return err.message=="Invalid Type [string]";
	},"Invalid String Type")
	start();
    })
})