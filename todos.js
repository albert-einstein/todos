steal('./controller/list/list.js',
	'./controller/gantchart/gantchart.js',
	'./controller/create/create.js',
	'./css/todos.css', // application CSS file
	'./css/gantchart.css',
'./models/models.js', // steals all your models
'./fixtures/fixtures.js', // sets up fixtures for your models
function() { // configure your application
    $("#todoscreate").todos_create();
    $("#todoslist").todos_list();
    $("#gantchart").todos_gantchart();
})