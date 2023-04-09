export default (input) => {
    var _addEventListener = (input.addEventListener) ? input.addEventListener : input.attachEvent;

    function addEventListenerWrapper(type, listener) {
        // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
        // and then trigger the original listener.
            var orig_listener = listener;
            listener = function(event) {
                var suggestion_selected = document.getElementsByClassName('pac-item-selected').length > 0;
                if (event.which == 13 && !suggestion_selected) {
                    var simulatedEvent = document.createEvent('Event');
                    simulatedEvent.keyCode = 40;
                    simulatedEvent.which = 40;
                    orig_listener.apply(input, [simulatedEvent]);
                }
                orig_listener.apply(input, [event]);
            };

        _addEventListener.apply(input, [type, listener]);
    }

    input.addEventListener = addEventListenerWrapper;
    input.attachEvent = addEventListenerWrapper;
};
