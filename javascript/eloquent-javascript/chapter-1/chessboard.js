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
