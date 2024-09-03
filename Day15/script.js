
// Task 1
// function add(){
// let a=10;
//     function anthor(num){
//  console.log( num+a);
//     }
//     return anthor
// }

// let counterObject = {
//     counter: 0, // Initialize the counter property

//     // Shorter syntax for the increment method
//     increment() {
//         this.counter++; // Increment the counter
//     },

//     getValue() {
//         return this.counter; // Return the current value of the counter
//     }
// };
// counterObject.increment(); // Increment the counter
// console.log(counterObject.getValue()); 
// Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
// function unique(){
//     let id=2
//      return function inner(){
//         id++;
//         return id
//     }
// }

// let sub=unique()
// console.log(sub())

// // task 4
// function outer(username){
//     return function inner(){
//       greeting(){
//         return username
//       }
//     }
   
//  }
//  let fn=outer(ali)
//  fn()

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = function () {
//         console.log(i);
//     };
// }

// Task 5
let arr=[]
 for(let i=0;i<3;i++){
    arr[i] =function(){
        console.log(i)
    }
} 
 for(let i=0;i<arr.length;i++){
 arr[i]()
}

// Task 6
function manager() {
    let items = [];
  
    return {
      addItem(item) {
        items.push(item);
        console.log(`Added: ${item}`);
      },
      removeItem(item) {
        items = items.filter(i => i !== item);
        console.log(`Removed: ${item}`);
      },
      listItems() {
        console.log('Items:', items);
      }
    };
  }
  //for output
  let newItems = manager();
  newItems.addItem('apple'); // Output: Added: apple
  newItems.listItems(); // Output: Items: [ 'apple', 'banana' ]
  newItems.removeItem('apple'); // Output: Removed: apple
  newItems.listItems(); 
  












