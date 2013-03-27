//js Todos/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('Todos/scripts/build.html',{to: 'Todos'});
});
