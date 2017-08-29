Template.search.onCreated( () => {
  let template = Template.instance();

  template.searchQuery = new ReactiveVar();
  template.searching   = new ReactiveVar( false );

  template.autorun( () => {
    template.subscribe( 'patterns', template.searchQuery.get(), () => {
      setTimeout( () => {
        template.searching.set( false );
      }, 300 );
    });
  });
});

Template.search.helpers({
  searching() {
    return Template.instance().searching.get();
  },
  query() {
    return Template.instance().searchQuery.get();
  },
  patterns() {
    let patterns = Patterns.find();
    if ( patterns ) {
      return patterns;
    }
  }
});

Template.search.events({
  'keyup [name="search"], focus [name="search"]' ( event, template ) {
    let value = event.target.value.trim();

    if ( value !== '' && value.length > 2 ) {
      template.searchQuery.set( value );
      template.searching.set( true );
    }

    if ( value === '' ) {
      template.searchQuery.set( value );
    }
  }
});