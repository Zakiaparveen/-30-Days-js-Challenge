// Activity 1
// Task 1
let a="hamza";
let b="ali";
console.log(`my ${a} is ${b}`)

// Task 2
let a="hamza";
let b="ali";
let c=`this is ali
he is very good`
console.log(`my ${a} is ${b} is ${c}`)

// Activity 2
// Task 3

let fruits = ["Apple", "Banana", "Cherry"];
let [fiirst, second, third,fourth] = fruits;

console.log(fiirst);  // "Apple"
console.log(second); // "Banana"
console.log(third);  // "Cherry"


// Task 4
let person = { name: "Zakia", age: 30, city: "New York" };
let { name, age, city } = person;
console.log(name); 
console.log(age);  
console.log(city); 


// Task 5
let numbers = [1, 2, 4, 5];
let updatedNumbers = [...numbers.slice(0, 2), 3, ...numbers.slice(2)];

console.log(updatedNumbers); 

// Task 7
function pro(a,b=1){
    return a*b
  }
  console.log(pro(3));

//   Task 8
let obj={
    title:"jjl",
    author:"3333",
     ali(){
      console.log(`this ${this.title} is ${this.author}`
    }
  }
  obj.ali()
  

//   Task 9
  let keyName = "dynamicKey";

let myObject = {
    [keyName]: "This is the value for the dynamic key"
};

console.log(myObject);
