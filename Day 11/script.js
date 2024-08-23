//Task 1
// Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order
function promisechain(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
console.log("hi")
resolve("sucess")
    },2000)
    
  })
  
}
promisechain(1).then((sucess)=>{
  console.log("hi")
  return promisechain(2)
  .then(()=>{
    console.log("jjjj")
  })
})


// task 3
function promisechain(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching data for ID: ${dataid}`);
      resolve(`Data for ID: ${dataid}`);
    }, 2000);
  });
}

promisechain(1)
  .then((data) => {
    console.log(data); // Logs the fetched data
    console.log("Step 1 complete");
    return promisechain(2);
  })
  .then((data) => {
    console.log(data); // Logs the fetched data
    console.log("Step 2 complete");
    return promisechain(3);
  })
  .then((data) => {
    console.log(data); // Logs the fetched data
    console.log("Step 3 complete");
  });
// Activity 3
  // Task 4 
  function promisechain(dataid) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Fetching data for ID: ${dataid}`);
        resolve(`Data for ID: ${dataid}`);
      }, 2000);
    });
  }
  (async function(){
    await  promisechain(1)
    console.log("Step complete");
     await promisechain(2)
  console.log("Step complete");
  }
  )()

  // Task 5
  async function getData(){
    try{
      await new Promise((resolve,reject)=>{
        setTimeout(()=>{
          reject("error")
        },2000)
      })
    }
  catch(error){
    console.log("error")
  }
  }
  
  getData()

  // Task 6
  const apiurl = 'https://jsonplaceholder.typicode.com/posts';
 fetch(apiurl)
.then(res=>{
   if(res.ok){
     return res.json()
   } else{
     // throw new Error(res,statusText)
     console.log("error",error)
   }
 })
.then(final=>{
   console.log(final)
 })
.catch(erro=>{
   console.log("erro",erro)
 })
// task 7
 async function apiwala() {
  const apiurl = 'https://jsonplaceholder.typicode.com/posts';
  
  try {
    const response = await fetch(apiurl);
    if (!response.ok) {
      throw new Error('Error: ' + response.statusText);
    }
    const data = await response.json();
    
    // Print the data to the console
    console.log(data);
  } catch (error) {
    // Print any errors to the console
    console.error('Fetch failed:', error);
  }
}

// Call the function to fetch and log the data
apiwala();
//  task 8
let promise1= Promise.resolve(1)
let promise2= Promise.resolve(2)
let promise3= Promise.resolve(3)

Promise.all([promise1,promise2,promise3])
.then((values)=>{
  console.log(values)
})
   .catch((error)=>{
      console.log("failed",values)
      })

      // Task 9
  
      let promise1=Promise.resolve(1)
      let promise2=Promise.resolve(2)
      let promise3=Promise.resolve(3)
      
      
      Promise.race([promise1,promise2,promise3])
        .then(resolves=>{
          console.log(resolves)
        })
        .catch(error=>{
          console.log("error")
        })
      