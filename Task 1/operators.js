/*
Exercise 1: Numbers

1. Declare a number variable and assign it a value.
2. Declare a number variable and assign it a floating number.
3. Perform addition, subtraction, multiplication, division,
modulus and exponentiation with number variable and
another number.
4. Print all your variables 
*/

let num1 = 5;
let num2 = 2.5;

let sum = num1 + num2;
let difference = num1 - num2;

let product = num1 * num2;
let quotient = num1 / num2;

let modulus = num1 % num2;
let exponentiation = num1 ** num2;

console.log("num1: " + num1 + ", num2: " + num2);
console.log("Sum: " + sum);
console.log("Differene: " + difference);
console.log("Produt: " + product);
console.log("Quotient: " + quotient);

console.log("Modulus: " + modulus);
console.log("Exponentiation: " + exponentiation);

console.log("------------------------------------------------");

/*
 Boolean and Operators

1. Use comparison operators to compare two numbers and
store the results in boolean variables.
2. Declare two variables x and y with the values 8 and 12
respectively.
Use comparison operators to check and print the following:
• If x is greater than y.
• If x is less than or equal to y.
• If x is equal to y.
• If x is not equal to y.
*/

let x = 8;
let y = 12;

let greaterThan = (x > y);
let lessOrEqual = (x <= y);
let equalTo = (x === y);
let notEqualTo = (x != y);

console.log("x = " + x + ", y = " + y);
console.log("Is x greater than y ? - " + greaterThan);
console.log("Is x less than or equal to y ? - " + lessOrEqual);
console.log("Is x equal to y ? - " + equalTo);
console.log("Is x not equal to y ? - " + notEqualTo);

console.log("------------------------------------------------");

/*
Declare the variables a and b with values true and false,
determine and print the result of the following logical
operations:
• a AND b
• a OR b
• NOT a
*/

let a = true;
let b = false;

let AND = (a && b);
let OR = (a || b);
let NOT_a = (!a);

console.log("a => " + a + ", b => " + b);
console.log("a AND b => " + AND);
console.log("a OR b => " + OR);
console.log("NOT a => " + NOT_a);

console.log("------------------------------------------------");

/*
Declare variable p and assign it a value of 10. Use the
following assignment operators to modify the value of p with
any number and print the result each time:
• +=
• -=
• *=
• /=
• %=
*/

let p = 10;
console.log("p = " + p);

p += 11;
console.log("p += 11 => " + p);

p -= 1;
console.log("p -= 1 => " + p);

p *= 3;
console.log("p *= 3 => " + p);

p /= 2;
console.log("p /= 2 => " + p);

p %= 4;
console.log("p %= 4 => " + p);

console.log("------------------------------------------------");