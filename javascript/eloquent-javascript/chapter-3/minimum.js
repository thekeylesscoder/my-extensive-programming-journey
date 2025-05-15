// program that returns the smallest value between 2 given numbers
function returnMinimum() {
   // First and second user values; undeclared
  let value1;
  let value2;
  // Restriction found from Chapter 2 - the Number function. eed to add restrictions that ensure that only numbers and no other characters are included here
  console.log("Please input your first number: ");
  prompt(value1);
  console.log("Please input your second number: ");
  prompt(value2);
  console.log("Between these two numbers, the smallest given to me is " + Math.min(value1, value2));
}
