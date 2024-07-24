// Activity 1
let num1 = 10;
let num2 = 10;
let sum = num1 + num2;
console.log(sum);

let num3 = 10;
let num4 = 10;
let difference = num3 - num4;
console.log(difference);

let num5 = 10;
let num6 = 10;
let product = num5 * num6;
console.log(product);

let num7 = 10;
let num8 = 10;
let division = num7 / num8;
console.log(division);

let num9 = 10;
let num10 = 10;
let modulus = num9 % num10;
console.log(modulus);

// Activity 2
let incrementMe = 7;
incrementMe++;
console.log(incrementMe);

let decrementMe = 7;
decrementMe--;
console.log(decrementMe);

// Activity 3
let number1 = 4;
let number2 = 6;
if (number1 > number2) {
    console.log("Number 1 is greater");
} else if (number2 > number1) {
    console.log("Number 2 is greater");
} else {
    console.log("Both numbers are equal");
}

if (number1 >= number2) {
    console.log("Number 1 is greater than or equal to Number 2");
} else {
    console.log("Number 2 is greater");
}

let number1Str = "4";
let number2Int = 4;
if (number1Str === number2Int.toString()) {
    console.log("Number 1 is strictly equal to Number 2");
} else if (number1Str == number2Int) {
    console.log("Number 1 is loosely equal to Number 2");
} else {
    console.log("Both numbers are not equal");
}

// Activity 4
let numberA = 14;
let numberB = 4;
if (numberA > numberB && numberA !== numberB) {
    console.log("Both numbers are different");
} else {
    console.log("Both numbers are the same");
}

if (numberA !== numberB) {
    console.log("Both numbers are different");
} else {
    console.log("Both numbers are the same");
}

// Activity 5
let a = -3;
let result = (a > 0) ? "positive" : "negative";
console.log(result);
