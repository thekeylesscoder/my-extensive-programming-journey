/* PROGRAM DEFINITION

Print all numbers between 1 to 100 using console.log except in the following cases:
- "Fizz" must be printed for numbers divisible by 3
- "Buzz" must be printed for numbers divisible by 5

Afterwards, modify the program to print "FizzBuzz" for numbers divisible by both 3 and 5.
*/

// Need to find a way to combine the two together and confirm it's showing correctly.

// "Fizz" Program
let count = 1;
for (count; count <= 100; count++) {
  if (count % 3 == 0) {
  console.log("Fizz");
  }
  else { console.log(count)};
}


/* Needs work but potentially this logic for the correct "Buzz" printouts?

let count = 1;
for (count; count <= 100; count++) {
  if (count % 3 == 0 && count % 5 == 0) {
  console.log("Fizz");
  }
  else console.log(count);
}

*/


// "Buzz" Program
let count = 1;
for (count; count <= 100; count++) {
  if (count % 5 == 0) {
  console.log("Buzz");
  }
  else console.log(count);
}

// "Fizz" + "Buzz" Program - in progress
/* let count = 1;
for (count; count <= 100; count++) {
  if (count % 3 != 0 && count % 5 != 0) {
    console.log(count);
  }
  else if (count % 3 == 0) {
  console.log("Fizz");
  }
  else if (count % 5 == 0) {
    console.log("Buzz");
  }
 else if (count % 3 == 0 && count % 5 == 0) {
    console.log("FizzBuzz");
  }
}*/
