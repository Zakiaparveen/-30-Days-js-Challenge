

// Activity 1
// Task1
let cls=document.querySelector('#green')
cls.textContent="hellow hor are you"

// Task 2
cls.style.color="pink";

// Activity 2
// Task 3
let newdiv=document.createElement("div")
let newbody=document.querySelector("body")
newbody.append(newdiv)
newdiv.innerText="i am div";

// Task4
let newli=document.createElement("li")
let ul= document.querySelector('ul')
newli.innerText="click me";
ul.append(newli);


// Activity 3
// Task 5
let element=document.querySelector('h1')
element.remove();

// Task6
const ali = document.getElementsByTagName("ul");
ali[0].children[1].remove();

// Activity 4
// task 7
let cbi=document.querySelector('h2')
let sky= cbi.setAttribute("id","demo")

// Task 8
// add class
cbi.setAttribute("class","green")
// Remove class
cbi.classList.remove("green");

// Activity 9
//  Task 9
let btn=document.querySelector('button')
btn.onclick=( ) =>{
    // console.log("b
    let p=document.querySelector('p')
    p.innerText="i am a  para"
}

// task10
btn.onmouseover=( ) =>{
    btn.style.borderColor="red"
  
}