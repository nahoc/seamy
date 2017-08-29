import { Meteor } from 'meteor/meteor';
import Patterns from '../collections/patterns';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('patterns', function patternsPublication() {
    return Patterns.find({},{fields: {'name': 1, 'image': 1}});
  });
}