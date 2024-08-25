// Importing lodash
import _ from 'lodash';

// Using lodash functions
 export const array = [1, 2, 3, 4];
const shuffledArray = _.shuffle(array);
console.log(shuffledArray); // Outputs a shuffled version of the array


const joinedString = _.join(['Hello', 'world'], ' ');
console.log(joinedString); // Outputs: Hello world
export function greet(name) {
    return `Hello, ${name}!`;
  }
  
