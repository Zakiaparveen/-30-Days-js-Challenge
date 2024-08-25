// // Task1
// console.log(yahoo(1,2));
// import  {add as yahoo ,person as me}   from "./file.js"

// // Task 2+3

// console.log(me.name);    // Outputs: zakia
// console.log(me.grade);   // Outputs: three
// console.log(me.engine()); // Outputs: hi

// // Task 4
// import me, {add as yahoo}   from "./file.js"

// console.log(yahoo(1,2));


// console.log(me.name);    // Outputs: zakia
// console.log(me.grade);   // Outputs: three
// console.log(me.engine()); // Outputs: hi

// // Takk 5

// // import * as myModule from "./file.js";

// // console.log(myModule.add(1,2));

// // console.log(myModule.person.name);    // Outputs: zakia
// // console.log(myModule.person.grade);   // Outputs: three
// // console.log(myModule.person.engine()); // Outputs: hi


// Task 6

const _ = require('lodash'); // Import lodash

let array = [1, 2, 3];
let arrange=_.fill(array, 's');
console.log(arrange)

// Task 7
const axios = require('axios'); // Import axios

// URL of the API endpoint
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Use axios to make a GET request
axios.get(url)
  .then(response => {
    // Handle the response
    console.log('Data:', response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

// => false
