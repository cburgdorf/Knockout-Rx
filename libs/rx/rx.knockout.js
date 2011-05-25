(function () {
    var global = this,
        root = (typeof ProvideCustomRxRootObject == "undefined") ? global.Rx : ProvideCustomRxRootObject();

    var observable = root.Observable;
    var asyncSubject = root.AsyncSubject;
    var observableCreate = observable.Create;
    var disposableEmpty = root.Disposable.Empty;

    if (!Object.getPrototypeOf) {
        Object.getPrototypeOf = function getPrototypeOf(object) {
            return object.__proto__ || object.constructor.prototype;
            // or undefined if not available in this engine
        };
    }

    if (typeof Object.getPrototypeOf !== 'undefined') {
        Object.getPrototypeOf(ko.observable).toObservable = function () {
            var koObservable = this;
            return observableCreate(function (observer) {
                var disposable = koObservable.subscribe(function (data) {
                    observer.OnNext(data);
                });
                return function () {
                    disposable.dispose();
                };
            });
        };
    }

    root.Observable.prototype.toKoObservable = function () {
        var koObservable = ko.observable();
        var disposable = this.Subscribe(function (data) {
            koObservable(data);
        });
        koObservable.dispose = function () {
            disposable.Dispose();
        };
        return koObservable;
    };

})();