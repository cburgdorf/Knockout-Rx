var App = window.App = {};
App.Services = {};
App.ViewModels = {};
	
$(function(){
	var service = new App.Services.WikipediaService();
	var viewModel = new App.ViewModels.SearchViewModel(service);
	ko.applyBindings(viewModel);
});
