Template.card.events({
    'click button': function (event, template) {
        var html = $('html');
        var newBg = event.target.value;
        // We then add the new background class
        html.toggleClass(newBg.substring(0, newBg.indexOf('.')));
        // We then change the button text to be "stop preview"
        if (event.target.innerHTML == "Preview") {
            event.target.innerHTML = "Stop preview";
        } else {
            event.target.innerHTML = "Preview";
        }
    }
});