// Task 2


let newing = document.querySelector('img');
newing.addEventListener('dblclick', function() {
    // Toggle the visibility
    if (newing.style.display === 'none') {
        newing.style.display = 'block';
    } else {
        newing.style.display = 'none';
    }
});

// Activity 2
// task 3
let newhs=document.querySelector('h2')
newhs.addEventListener('mouseover',function(){
newhs.style.backgroundColor="red";
});

// Task 4
newhs.addEventListener('mouseout',function(){
newhs.style.backgroundColor="";
});

// Activity 3
// Task 5
let inp=document.querySelector('input')
inp.addEventListener('keydown',function(event){
console.log(event.key);
});

// task6
 let newp=document.querySelector('p')
inp.addEventListener('keyup',function(){
   newp.innerText=inp.value
    });
//   task 7
    let newform=document.querySelector('form')
    newform.addEventListener('submit',(e)=>{
        console.log(e)
     e.preventDefault();
    })
    let formData = new FormData(newform);
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    //  Task 8
let optionnew=document.querySelector('#options')
   optionnew.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    newp.textContent = 'You selected: ' + selectedValue;

   });

// Activity 5
// Task 9
   let newul=document.querySelector('#nest')
     newul.addEventListener('click',function(event){
        if (event.target.tagName === 'LI') {
        console.log('Item clicked:', event.target.textContent);
          }
     })

    //  Task 10

    function item(){
        let newadded=document.createElement('li')
        newadded.textContent="this a copy"
    newul.appendChild(newadded)
    }
document.querySelector('#additem').addEventListener('click',item)
 
      