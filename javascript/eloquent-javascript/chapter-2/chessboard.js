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
 /* This code alone causes the program to potentially get stuck in an infinite loop and doesn't execute anything. 
 Simply reversing the logic causes the same issue.*/ 
 
  if (size % 2 == 0) {
  console.log(" # # # #\n");
    }
  else if (size % 2 == 1) {
    console.log("# # # # ");
  }
 // The break statement needs additional input which is what causes it to only display one line.
  break;
}

// Version 3 - variables for strings. Causing an infinite loop so need to rework this.

let size = 8;
let lightSpace = " # # # #";
let darkSpace = "# # # # ";

for (size; size <= 0; size++) {
 if (size % 2 == 0) {
  console.log(lightSpace);
 }
 else if (size % 2 == 1) {
  console.log(darkSpace);
 }
 else if (size == 0) {
  break;
 }
}


