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

// Initial program - correctly displays chessboard style

let size = 0;

for (size; size <= 7; size++) {
  if (size % 2 == 0) {
  console.log(" # # # #\n");
    }
  else console.log("# # # # ");
}

// Modified program - needs work

let size = 8;
while (size <= 0) {
  if (size % 2 == 0) {
    console.log(" # # # #\n");
  }
  else if (size % 3 ==1) {
    console.log("# # # #\n");
  }
  else if (size == 0) break;
}
