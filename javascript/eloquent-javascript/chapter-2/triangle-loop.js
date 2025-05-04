/* PROGRAM INSTRUCTIONS

This program needs to output a triangle with seven different lines of output, as seen below:

#
##
###
####
#####
######
#######

Haverbeke gives a hint to use the .length attribute for any string.

*/

/*
  Potentially using this logic to print out the correct # - need to elaborate and test.
  
  let counter = 0;
let hashtagCount = "#";
while (counter < 7) {
  counter++;
  if (counter.length % 2 == 0) {
    console.log("#/n");
  }
  else if (counter.length % 2 == 1) {
    console.log("##/n");
  }
*/

let counter = 0;
let hashtagCount = "#";
while (counter < 7) {
  counter++;
  if (counter == 1) {
    console.log("#/n");
  }
  else if (counter == 2) {
    console.log("##/n");
  }
  else if (counter == 3) {
    console.log("###/n");
  }
  else if (counter == 4) {
    console.log("####/n");
  }
  else if (counter == 5) {
    console.log("#####/n");
  }
  else if (counter == 6) {
    console.log("######/n");
  }
  else console.log("#######/n");
}
