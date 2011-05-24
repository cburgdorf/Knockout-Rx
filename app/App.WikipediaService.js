(function(App){
	App.Services.WikipediaService = function(){
		var self = {};
				
		self.search = function(term) {
			return $.ajaxAsObservable({
				url: "http://en.wikipedia.org/w/api.php",
				dataType: "jsonp",
				data: {
					action: "opensearch",
					search: term,
					format: "json"
				}
			})
			.Select(function (d) {
				return d.data[1];
			});
		};
				
		return self;
	};
})(App);