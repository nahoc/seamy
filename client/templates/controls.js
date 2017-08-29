Template.controls.events({
  'click #reset': function (event, template) {
    $('#search').val('');
    var e = jQuery.Event("keypress");
    e.which = 13;
    e.keyCode = 13;
    $("#search").focus();
    $("#search").trigger(e);
  }
});