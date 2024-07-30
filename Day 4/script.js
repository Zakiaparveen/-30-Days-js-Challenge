// Activity 1
// Task 1


for(let a=1; a>=10;a++)
    {
      console.log(a)
    }

    // Task 2
    for(a=1; a<=12; a++){
        console.log(a*5)
      }


// Activity 2
// Task 3
let a=1;
let sum=0;
while(a<=10){
  sum+=a
  console.log(sum)
  a++;
  
}
// Task 4
let a=10;
while(a>=0)
{
  console.log(a)
  a--;
}

// Activity 3
// Task 5

let a=0;
do{
 console.log(a)
  a++;
}
 
  
while(a<=5)

// Task 6
let n = 5; 
let result = 1; // Initialize result to 1 (the factorial of 0 or 1 is 1)
let i = 1; // Start with 1
do {
    result *= i; 
    i++; 
} while (i <= n); 

console.log(result); 

// Activity 4 
// Task 7
for(i=1;i<=5;i++) 
{
  for(j=1;j<=i;j++)
  {
  console.log("*")
}
   console.log("/<br>")
}
//  Activty 5 
// Task 8
for(a=1;a<=10;a++){
  if(a==5){
    console.log("stop number 5")
    continue;
   
  }
  console.log(a)
  
}

// Task 9
for(a=1;a<=10;a++){
  if(a==7){
    console.log("stop 🛑")
    break;
   
  }
  console.log(a)
  
}