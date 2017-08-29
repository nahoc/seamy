Template.card.events({
    'click button': function (event, template) {
        var html = $('html');
        var newBg = event.target.value;
        // We remove all the classes on HTML
        html.removeClass();
        // We then add the new background class
        html.addClass(newBg.substring(0, newBg.indexOf('.')));
    }
});