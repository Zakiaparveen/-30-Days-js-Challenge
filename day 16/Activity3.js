//Write a recursive function to reverse a string. Log the result for a few test cases.
// Task 5
function rec(str){
    if(str.length <=1){
        return str
    }
    return str[str.length-1]+rec(str.slice(0,-1))
}

console.log(rec("hello"))
// Task 6

// Write a recursive function to check if a string is a palindrome. Log the result for a few test cases
// Task 6
function isPalindrome(str) {
    // Base case: if the string has 0 or 1 characters, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    // Check if the first and last characters are the same
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    // Recursive case: Check the substring without the first and last characters
    return isPalindrome(str.slice(1, -1));
}

// Test cases
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("racecar")); // Output: true

// Task 7
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: If the left index is greater than the right, the target is not in the array
    if (left > right) {
        return -1; // Target not found
    }

    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Return the index if the target is found
    }

    // If the target is smaller, search the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }

    // If the target is larger, search the right half
    return binarySearch(arr, target, mid + 1, right);
}

// Test cases
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log(binarySearch(arr, 7));  // Output: 3
console.log(binarySearch(arr, 13)); // Output: 6
console.log(binarySearch(arr, 2));  // Output: -1 (not found)
console.log(binarySearch(arr, 19)); // Output: 9
console.log(binarySearch(arr, 1));  // Output: 0

//  Task 8
function countOccurrences(arr, target, index = 0) {
    // Base case: If we've reached the end of the array, return 0
    if (index === arr.length) {
        return 0;
    }

    // Recursive case: Check if the current element is equal to the target
    // If it is, add 1 to the count and move to the next element
    // Otherwise, just move to the next element
    if (arr[index] === target) {
        return 1 + countOccurrences(arr, target, index + 1);
    } else {
        return countOccurrences(arr, target, index + 1);
    }
}

// Test cases
let array1 = [1, 2, 3, 4, 2, 2, 5];
let array2 = ['a', 'b', 'a', 'c', 'a'];
let array3 = [7, 8, 7, 9, 7, 10];

console.log(countOccurrences(array1, 2)); // Output: 3
console.log(countOccurrences(array2, 'a')); // Output: 3
console.log(countOccurrences(array3, 7)); // Output: 3
