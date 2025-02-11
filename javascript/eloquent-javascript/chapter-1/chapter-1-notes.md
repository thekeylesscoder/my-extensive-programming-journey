# Notes

## [Chapter 1: Values, Types, and Operators](https://eloquentjavascript.net/3rd_edition/01_values.html)

*All content paraphrased from the above link.*

- Computers only recognize data, and it can be read, modified, and created. They store this data in a format called **bits**, or bivalue items using zeroes and ones, and can take different forms (i.e. electrical charges; lowered or raised parts of a CD).
- Numbers can be represented as bit values. In the book, Haverbeke uses 13 as an example, but to make things interesting, I'll show 157 in binary (or eight bits):
  -   1  0  0  1  1  1  0  1\
    128 64 32 16  8  4  2  1
- ***Values***
  - Modern computers usually have 30+ billion bits stored in **volatile data storage** (or **working memory**). The hard disk or similar device, or **nonvolatile storage**, has an even larger amount.
  - Without some method to differentiate this data, it's going to blend. The solution for this is to separate the data using **values** and their purpose can vary (text, functions, numbers, et cetera).
  - Values can be made by giving it a name, which can be easy but come at a cost (as all good things in life). By naming something, it's assigned an address. Additionally, naming too many values can potentially result in running out of memory. But as long as you no longer need a value, it can return to being bits until it's reused as a new value.
  - The focus of this chapter is on what are known as **simple values** and operators that can be used on them.
- ***Numbers***
  - Numbers are self-explanatory.
  - JavaScript uses 64 bits to save a number, which results in a limited amount of values that can be represented (in this case, 2 to the 64th power, so about 18,000,000,000,000,000,000 - 18 quintillion!). 
    - Compared to older computers, no need to worry about numbers overflowing.
  - These numbers can also store negative values, as a bit can represent whether a value is positive or negative.
  - Numbers with dots can be fractional (such as 7.82) or scientific notation, which adds an e for the exponential part of the value (3.29e2, or 3.29 x $10^2$).
  - Be aware of precision. Whole numbers smaller than 9 quadrillion tend to be, whereas fractional numbers aren't.
- ***Arithmetic***
  - This is the usual direction people go with when working with numbers - take two or more numbers and perform some operation on them.
