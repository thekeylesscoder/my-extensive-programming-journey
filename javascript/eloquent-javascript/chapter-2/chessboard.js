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

// Modified program - prints out one row then stops. Need to further modify.

let size = 8;

for (size; size >= 0; size++) {
  if (size % 2 == 0) {
  console.log(" # # # #\n");
    }
  else if (size % 2 == 1) {
    console.log("# # # # ");
  }
  break;
}
