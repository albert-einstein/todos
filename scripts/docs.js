//js Todos/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('Todos/todos.html', {
		markdown : ['todos']
	});
});