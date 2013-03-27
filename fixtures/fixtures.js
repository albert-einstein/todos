// map fixtures for this application

steal("jquery/dom/fixture", function() {

    $.fixture.make("todo", 5, function(i, todo) {
	var descriptions = [ "grill fish", "make ice", "cut onions" ];
	return {
	    name : "todo " + i,
	    description : $.fixture.rand(descriptions, 1)[0],
	    startDate : "1/2/2013"
	}
    })
})