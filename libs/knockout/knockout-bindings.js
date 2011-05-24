// Here's a custom Knockout binding that makes elements shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
ko.bindingHandlers.ulValue = {
    init: function (element, valueAccessor) {
        // Initially set the element to be instantly visible/hidden depending on the value
        var value = valueAccessor(),
        $element = $(element),
		values = ko.utils.unwrapObservable(value) || [];
		
		$element.empty()
		$.each(values, function(index, value){
			$element.append("<li>" + value + "</li>");
		});		
    },
    update: function (element, valueAccessor) {
        ko.bindingHandlers.ulValue.init(element, valueAccessor);
    }
};
