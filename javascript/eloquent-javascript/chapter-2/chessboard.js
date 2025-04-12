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

/*

Second draft - still causing an error, "RangeError: Potential infinite loop: exceeded 2000 iterations.", but wanted to show progress.
let size = 0;

while (size <= 8) {
  if (size % 2 == 0) {
    console.log(" # # # #");
    size++;
  } else if (size % 3 == 0) {
    console.log("# # # # ");
    size++;
  }
  if (size == 8) {
    break;
  }
}
*/


let lineCount = 0;
let characterCount = 0;
let size = 8;

while (lineCount < 8) {
  if (lineCount % 2 == 0) {
    console.log(" # # # #");
    lineCount++;
  } else if (lineCount % 3 == 0) {
    console.log("# # # # ");
    lineCount++;
  }
}
