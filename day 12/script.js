// Task 1
try{
    throw newError("error")
  }
  catch{
    console.log("failed")
  }

// Task 2
function divide(a,b){
    try{
      if(b===0){
        throw new Error("error")
      }
        return a / b;
    }
      catch(error){
        console.log("hi")
      }
    
  }
  console.log(divide(2,22))
//   Task 3
function arrow(){
    try{
       console.log("Inside try block: Attempting to execute code.");
    throw new Error("kk")
    }
    catch(error){
      console.log("jjj")
    }
    finally{
          console.log("Inside finally block: This code runs regardless of the outcome.");
    }
  }

//  Task 4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError"; // Custom name for the error
  }
}
function exampleFunction(a, b) {
  try {
    if (b === 0) {
      throw new CustomError("Division by zero error"); // Throwing the custom error
    }
    console.log(a / b);
  } catch (error) {
    if (error instanceof CustomError) {
      console.log(`CustomError caught: ${error.message}`);
    } else {
      console.log(`General error caught: ${error.message}`);
    }
  }
}

exampleFunction(10, 0);

// Task 5
    class ValidationError extends Error {
      constructor(message) {
        super(message);
        this.name = "ValidationError"; // Custom name for the error
      }
    }
    function validateName(name) {
      if (name.trim() === "") { // Check if name is empty or spaces
        throw new ValidationError("Name cannot be empty"); // Throw error
      }
      return "Name is valid"; // Return success message if not empty
    }
    function submitForm(name) {
      try {
        const validationMessage = validateName(name); // Validate the name
        console.log(validationMessage); // Log success message
        // Proceed with form submission
      } catch (error) {
        if (error instanceof ValidationError) {
          console.error(`Validation Error: ${error.message}`); // Show validation error
        } else {
          console.error(`Unexpected Error: ${error.message}`); // Handle other errors
        }
      }
    }
    const userNameInput = ""; // User left the name field empty
    submitForm(userNameInput); // Simulate form submission
    

// Task 6

function ali(ids){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject("sucess")
    },2000)
  })
}

 ali().catch(error => {
    console.log("Error:", error); // Logs "Error: Failure" if rejected
  });


    // Task 7

    async function ali(ids){
        try{
        await new Promise((resolve,reject)=>{
         setTimeout(()=>{
           reject("sucess")
         },2000)
       })
        }
        catch(error){
          console.log("error",error)
        }
     }
     
      ali().catch(error => {
         console.log("Error:", error); // Logs "Error: Failure" if rejected
       });
// Task 8

function geterror(){
  const apiurl = 'https://jsonplaceholders.typicode.com/posts';
try{
 fetch(apiurl).then
 if(res.ok){
   return res.json()
 }
  else{
   throw new Error(res,statusText)
 }
}
catch(erro){
 console.log("erro",erro)
}
}
geterror()
      //  task 9
      async function geterror() {
        const apiurl = 'https://jsonplaceholders.typicode.com/posts';
        try {
          const res = await fetch(apiurl);
          if (res.ok) {
            const data = await res.json();
            return data;
          } else {
            throw new Error(res.statusText);
          }
        } catch (error) {
          console.log("Error:", error);
        }
      }
      
      geterror();
      