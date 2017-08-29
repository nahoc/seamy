import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Patterns = new Mongo.Collection('Patterns');

if ( Meteor.isServer ) {
  Patterns._ensureIndex( { name: 1, image: 1 } );
}

Patterns.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Patterns.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

PatternsSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'The name of the pattern.',
  },
  image: {
    type: String,
    label: 'The image URL.',
  },
});

Patterns.attachSchema(PatternsSchema);

export default Patterns;
