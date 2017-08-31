Template.card.events({
    'click .is-preview': function (event, template) {
        var html = $('html');

        // we convert the svg to base64
        var s = new XMLSerializer().serializeToString($(event.target).closest('.card').find('svg')[0]);
        var encodedData = window.btoa(s);
        var url = "data:image/svg+xml;base64," + encodedData;

        // we assigne the SVG to the background image
        html.css("background-image", "url(" + url + ")");

        // We then change the button text to be "stop preview"
        if (event.target.innerHTML == "Preview") {
            // resets all preview button to show "preview"
            $('.is-preview').html("Preview");
            event.target.innerHTML = "Stop preview";
        } else {
            event.target.innerHTML = "Preview";
            html.css("background-image", "none");
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