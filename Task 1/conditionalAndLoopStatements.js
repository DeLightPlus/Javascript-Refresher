/*
Temperature check
1. Write a code using if else statements to check the
temperature and print a message based on the following
conditions:
• If the temperature is below 0, print "It's freezing!"
• If the temperature is between 0 and 15, print "It's cold."
• If the temperature is between 16 and 25, print "It's mild."
• If the temperature is above 25, print "It's warm."
*/

console.log(" -------- Temperature Check -------- ");
console.log(" -------- If_else_Conditional_Statement -------- ");
let temperature = 0;
if(temperature > 25)
{
    console.log("It's warm");
}
else if(temperature > 15 && temperature <= 25)
{
    console.log("It's mild");
}
else if(temperature >= 0 && temperature <= 15)
{
    console.log("It's cold");
}
else if(temperature < 0)
{
        console.log("It's freezing");
}

console.log(" -------- Switch_Conditional_Statement -------- ");
//Switch

switch (true) 
{
    case (temperature > 25):
        console.log("It's warm");
        break;

    case (temperature > 15 && temperature <= 25):
        console.log("It's mild");
        break;

    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold");
        break;

    case (temperature < 0):
        console.log("It's freezing");
        break;

    default:
        break;
}
    

/*Divisibility Check
1. Write a code using if else statements to check if a number is
divisible by 2, 3, or both:
• If the number is divisible both by 2 and 3, print "Divisible
by both."
• If the number is divisible by only 2, print "Divisible by 2."
• If the number is divisible by only 3, print "Divisible by 3."
• If the number is not divisible by either, print "Not
divisible by 2 or 3."
2. Re-write the code using switch statements.*/

console.log(" -------- Divisibility Check -------- ");
console.log(" -------- If else Conditional Statement -------- ");

let divident = 1;
console.log("Divident: " + divident);

if (divident % 2 === 0 && divident % 3 === 0) 
    console.log(divident + " is divisible by both 2 and 3."); 
else
    console.log("Divisible by both: " + (divident % 2 === 0 && divident % 3 === 0));


//

if (divident % 2 === 0) 
    console.log(divident + " is divisible by 2.");
else
    console.log("divisible by 2: " + (divident % 2 === 0));

if (divident % 3 === 0) 
    console.log(divident + " is divisible by 3.");
else
    console.log("divisible by 3: " + (divident % 3 === 0));


if((divident % 2 === 0))        
    console.log(divident + " 2not divisible by 2 or 3: " + !(divident % 2 === 0)); 
else if((divident % 3 === 0))
    console.log(divident + " 3not divisible by 2 or 3: " + !(divident % 3 === 0)); 
else
    console.log("2not divisible by 2 or 3: " + !(divident % 2 === 0) || !(divident % 3 === 0));


console.log(" -------- Switch Conditional Statement -------- ");

let div2 = (divident % 2 === 0); 
let div3 = (divident % 3 === 0);
console.log("Divisible by both : " + (divident % 2 === 0 && divident % 3 === 0) );

switch (true) 
{
    case div2:
        console.log("Divisible by 2 :" + div2);        
        break;  
        
    case !div2:
        console.log("Divisible by 2 :" + div2);        
        break;  

    default:
        break;
}

switch (true) 
{
    case div3:
        console.log("Divisible by 3 :" + div3);        
        break;   
        
    case !div3:
        console.log("Divisible by 3 :" + div3);        
        break; 

    default:
        break;
}

switch (true) 
{
    case div2:
        console.log("Divisible by 2 or 3 :" + div3);        
        break;   
        
    case div3:
        console.log("Divisible by 2 or 3 :" + div3);        
        break; 

    case !(div2 && div3):
        console.log("Divisible by 2 or 3 :" + div3);    

    default:
        break;
}


console.log(" -------- For loops Statement -------- ");
/*
For loops
1. Print numbers from 1 to 10.
2. Print all even numbers between 1 and 20.
3. Calculate the sum of all numbers from 1 to 100 and print the
result. Hint: ‘+=’
4. const numbers = [1, 2, 3, 4, 5]. Given the array of numbers,
print each element to the console.
5. const numbers = [3, 7, 2, 5, 10, 6]. Given the array of numbers,
find and print the largest number.
#Hint: current value and previous value.
*/
console.log(" -------- numbers range[1,10] -------- ");
for (let index = 0; index < 10; index++)
{
    console.log(index+1);    
}

console.log(" -------- even number range[0,20] -------- ");
for (let index = 0; index < 21; index++)
{
        console.log(index++);    
}

console.log(" -------- the sum of all numbers from 1 to 100 -------- ");
let sum = 0;

for (let i = 1; i <= 100; i++)
{
    console.log(sum += i);
}
 console.log("Sum of all numbers from 1 to 100 is " + sum);

 console.log(" -------- Given the array of numbers1, [1, 2, 3, 4, 5] -------- ");
 const numbers1 = [1, 2, 3, 4, 5];
 for (let i = 0; i < numbers1.length; i++) 
 {
    let number = numbers1[i];
    console.log( number );    
 }
 
 console.log(" -------- Given the array of numbers2, [3, 7, 2, 5, 10, 6] -------- ");
 const numbers2 = [3, 7, 2, 5, 10, 6];
 let x = 0;

 for (let i = 0; i < numbers2.length; i++) 
{
    let num = numbers2[i]; 

    console.log( num );   
    
    if(num > x)
         x = num;
}
console.log("The largest number is " + x)

console.log(" -------- While loops Statement -------- ");
/*
While loops
1. Print numbers from 1 to 10.
2. Print all even numbers between 1 and 20.
3. Calculate the sum of all numbers from 1 to 100 and print the
result.
4. Print all multiples of 5 less than 50.
# Hint: ‘%’
*/
console.log(" -------- numbers range[1,10] -------- ");

let count = 0;
while (count < 10)
{  
    count++;
    console.log(count);    
}

console.log(" -------- even numbers range[1,20] -------- ");
let count2 = 0;
while(count2 < 20)
{
    count2 += 2;
    console.log(count2); 
}

console.log(" -------- sum all numbers range[1,100] -------- ");

let countAll = 1;
let stored = 0;

while(countAll <= 100)
{
    stored += countAll;


    console.log(stored);
    countAll++;
}

console.log("Sum of all numbers from 1 to 100 is " + stored);

console.log(" -------- all multiples of 5 less than 50 -------- ");
let numx5 = 0; 
while (numx5 < 50)
{    
    numx5 += 5; 
    console.log(numx5);
}

/////////////////////////////////////////////////////////
console.log(" -------- Do_While loops Statement -------- ");
/*
Do While loops
1. Print numbers from 1 to 10.
2. Calculate the sum of all numbers from 1 to 100 and print the
result.
3. Prompt the user to enter a number greater than 10. Keep
asking until they enter a valid number.
4. Create a simple guessing game where the user must guess a
number between 1 and 10. The game continues until the user
guesses the correct number.
*/
console.log(" -------- numbers range[1,10] -------- ");
let dwCount = 1; 
do {
    console.log(dwCount); // Print the current number
    dwCount++; // Increment the counter variable
}while (dwCount <= 10);

console.log(" -------- sum all numbers range[1,100] -------- ");
let dw_countAll = 1;
let dw_stored = 0;
do{
    dw_stored += dw_countAll;
    console.log(dw_stored);
    dw_countAll++;
}while(dw_countAll <= 100)
console.log("Sum of all numbers from 1 to 100 is " + dw_stored);


console.log(" -------- Prompt the user to enter a number greater than 10 -------- ");
let dw_input;
do {

    dw_input = prompt("Please enter a number greater than 10:");
    dw_input = Number(dw_input); 

} while (isNaN(dw_input) || dw_input <= 10);

console.log("You entered a valid number: " + dw_input);


const randomNum = Math.floor(Math.random() * 10) + 1;
let guessed_inp;
do {  

    guessed_inp = prompt("Guess a number between 1 and 10:");
    guessed_inp = Number(guessed_inp); 

    // Check if the guess is correct
    if (guessed_inp != randomNum) 
    {
        console.log("Better Luck Next Time. Please Try Again.");
    }
    else if (guessed_inp === randomNum) 
    {
        console.log("Congratulations! The correct number is " + randomNum);
    } 
    else 
    {
        console.log("Please enter a number between 1 and 10.");
    }

} while (guessed_inp !== randomNum);