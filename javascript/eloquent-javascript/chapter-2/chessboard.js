/* PROGRAM REQUIREMENTS DEFINED

Program must display 8x8 grid display with newline characters separating lines akin to a chessboard. Spaces must either have a # or a space. Initially create a program with the following output:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

Afterwards, make a variable (or binding) size = 8 and modify the display so it works for any size.
*/ 

let size = 8;
let lightSpace = " # # # #";
let darkSpace = "# # # # ";

for (size; size > 0; size--) {
  if (size % 2 == 0) {
  console.log(lightSpace);
  }
  else console.log(darkSpace);
}
