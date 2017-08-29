import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Patterns = new Mongo.Collection('Patterns');

Patterns.allow({
  insert: () => false,
  update: () => true,
  remove: () => false,
});

Patterns.deny({
  insert: () => true,
  update: () => false,
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
