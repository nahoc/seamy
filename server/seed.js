import {
  Meteor
} from 'meteor/meteor';
import Patterns from '../collections/patterns';

// Patterns
const patterns = [{
  name: 'Passions',
  image: 'pattern_1.svg',
  "tags": ["globe", "shoes", "microphone", "web", "target", "coffee", "pen", "phone", "headphones", "laptop", "gear","brush", "paint", "bbq", "barbecue", "person", "monitor", "tool"]
}, ];

patterns.forEach(({
  name,
  image,
  tags
}) => {
  const patternsExists = Patterns.findOne({
    name
  });
  if (!patternsExists) Patterns.insert({
    name,
    image,
    tags
  });
});