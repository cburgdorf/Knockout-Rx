(function(App){
    App.ViewModels.SearchViewModel = function(service){
        var self = {}

        self.searchInput = ko.observable("");
        self.data = self.searchInput
                        .toObservable()
                        .Throttle(500)
                        .DistinctUntilChanged()
                        .Select(service.search)
                        .Switch()
                        .toKoObservable();

        return self; 
    };
})(App)