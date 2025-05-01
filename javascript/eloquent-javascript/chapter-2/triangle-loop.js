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

let counter = 0;
let hashtagCount = "#";
while (counter < 7) {
  counter++;
  console.log(counter + "/n");
}
