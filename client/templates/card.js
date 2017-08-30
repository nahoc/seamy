Template.card.onRendered(function () {
    // SVG crowbar lib to download SVGs
    /*var e = document.createElement('script');
    e.setAttribute('src', 'https://nytimes.github.io/svg-crowbar/svg-crowbar.js');
    e.setAttribute('class', 'svg-crowbar');
    document.body.appendChild(e);*/
    //get svg element.

});

Template.card.events({
    'click .is-preview': function (event, template) {
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
    },
    'click .is-tag': function (event, template) {
        $("#search").val(event.target.text.substring(1));
        $("#search").focus();
    },
    'click .is-download': function (event, template) {
        // on download click, we download the closest svg element, encoded to base64
        var s = new XMLSerializer().serializeToString($(event.target).closest('.card').find('svg')[0]);
        var encodedData = window.btoa(s);
        var url = "data:image/svg+xml;base64," + encodedData;
        $('.is-download').attr("href", url);
    },
});