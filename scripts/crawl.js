// load('Todos/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("Todos/todos.html","Todos/out")
});
