import { Meteor } from 'meteor/meteor';
import Patterns from '../collections/patterns';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('patterns', function (search) {

    let query = {},
      projection = {
        //limit: 10,
        sort: {
          name: 1
        }
      };

    if (search) {
      let regex = new RegExp(search, 'i');

      query = {
        $or: [{
            name: regex
          },
          {
            image: regex
          },
          {
            tags: regex
          }
        ]
      };

      projection.limit = 100;
    }

    return Patterns.find(query, projection);
    //return Patterns.find({},{fields: {'name': 1, 'image': 1}});
  });
}