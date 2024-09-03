// // Task1
// function fn(i){
//     if(i===0 || i===1){
//         return 1
//     }
//      return i*fn(i-1)
// }
// console.log(fn(4))

// Task 2
function fbnoci(n){
    
    if(n===0){
        return 0
    }
    if(n===1){
        return 1
            }
    return fbnoci(n-1)+fbnoci(n-2)
}

console.log(fbnoci(4));
// // Task 3
// function sumArray(arr) {
//     // Base case: if the array is empty, return 0
//     if (arr.length === 0) {
//         return 0;
//     }
//     // Recursive case: add the first element to the sum of the remaining elements
//     return arr[0] + sumArray(arr.slice(1));
// }

// console.log(sumArray([1,2,3]))

// // Task 4
// function fmax(n){
//     if(n.length===1){
//       return n[0];
//     }
//     return Math.max(n[0],fmax(n.slice(1)))
//   }
  
//   console.log(fmax([1,2,3,4,5]))