import {
  Meteor
} from 'meteor/meteor';
import Patterns from '../collections/patterns';

// Patterns
const patterns = [{
  name: '10dollars',
  image: 'pattern_1.jpg',
}, {
  name: '20dollars',
  image: 'pattern_2.jpg',
}, {
  name: '30dollars',
  image: 'pattern_3.jpg',
}, {
  name: '40dollars',
  image: 'pattern_4.jpg',
},{
  name: '50dollars',
  image: 'pattern_5.jpg',
}, ];

patterns.forEach(({
  name,
  image
}) => {
  const patternsExists = Patterns.findOne({
    name
  });
  if (!patternsExists) Patterns.insert({
    name,
    image
  });
});