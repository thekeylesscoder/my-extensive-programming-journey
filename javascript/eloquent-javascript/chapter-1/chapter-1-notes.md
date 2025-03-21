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
  - Some examples of operators are + (plus); * (multiply); - (subtract); and / (divide). Some equations may use () and may be helpful to ensure that a specific operation is performed first. Otherwise, something known as **precedence** ensures that the calculation is performed in a specific way.
    - Multiplication and division have a higher precedence than addition and subtraction. If operators appear next to each other, they are applied left to right.
      - Readers are advised if there's doubt about a specific calculation to use parentheses.
    - The last operator is the remainder operation, %, or modulo. This is what's left behind after X is divided by Y. (An example of this is 10 % 5 is 0, or 385 % 3 is 3.)
- ***Special Numbers***
  - Values that don't act like regular numbers but are still seen as so are Infinity and -Infinity. Any values calculated by either version of Infinity end up as NaN (not a number). Some examples of this that are provided in the text are Infinity - Infinity or 0/0.
- ***Strings***
  - This data type represents text and use quotes to enclose the values (``, "", and ''). It doesn't matter which type of quotes you use as long as they match.
  - Most items will display properly within quotes but some can be difficult. **Newlines**, what displays when you use the ENTER key, can display properly when the backtick ` is used.
  - Ensuring that a specific character is displayed properly means having to use the backslash \ with quoted text, known as ***escaping*** a character. (Compare this to using a backslash alone, where the backslash will be included as well.)
    - Example: Outputing "I am a string\" will include the last character, whereas using the reserved \n in the same statement will include a newline afterwards.
    - Additional Example: "Give me some space\tBefore telling me anything" will display this statement with a tab character.
  - In case you want to display the newline, tab, or other similar symbol with its syntax, you can include two backslashes, which 'cancels' the functionality of the first backslash.
    - Book Example: "A newline character is written like \"\\n\"."
  - Just like numbers, strings are also translated as bits so the computer can process them. JavaScript uses a standard called *Unicode* to do so, giving numbers to every character needed, even in different languages. Since every character has a number, strings can be described as numbers. JavaScript does this with one issue - it uses 16 bits for each string, or about 2<sup>16</sup> characters. Unicode has more characters though, so some, like emoji, take up much more space. This is discussed in Chapter 5.
  - Mathematical applications can't be applied to strings, but using the + operator adds values together.
    - Example: "con" + "cat" + "e" + "nate" displays "concatenate"
  - Other ***functions***, or ***methods*** can be used on strings, which will be discussed more in Chapter 4.
  - There isn't much difference between strings that use single or double quotes, except the quote version needed to escape from them. The backtick quote, `, is able to complete some other tasks, like using span across lines, or embed other values. In the below example, anything included within the ${} syntax results in a computation, string conversion, and embedded value.
    - Example: `half of 100 is ${100 / 2}`
- ***Unary Operators***
  - Operators can also be represented as words rather than symbols.
    - An example of this is the *typeof* operator that gives you the value type as a string for whatever input is given.
      - Examples `console.log(typeof 4.5)` and `console.log(typeof "x")` will give number and string, respectively.
    - `console.log` is often used to see the result of various calculations and will be revisited in future examples in the next chapter.
    - There are two types of operators, unary (where only one value is taken) and binary (where two are taken). One exception of an operator being both is the - operator (it can be used to negate a result).
      - Example: `console.log(- (3 - 6))` results in `-3`
- ***Boolean Values***
  - For a value where a value can be either or a single value, use Boolean values (often usually seen with values like "on/off" or "yes/no", but usually represented as "true"/"false").
  - ***Comparison***
    - The example provided compares whether a number is greater than or less than another (`console.log(100 > 99)` results in true, whereas `console.log(100 < 99)` is false. Another similar example given is seeing the values of strings. JavaScript does this by comparing the Unicode values of each character from left to right. (Note that uppercase letters have a lesser value than lowercase ones.)
    - The other operators that can be used are >=/<= (greater than/less than or equal to); == (equal to); and != (not equal to).
      - Note the only value not equal to itself is NaN as it can represent any value that doesn't make sense.
- ***Logical Operators***
  - Some operations can also be applied to Boolean values, or, as the author mentions, to reason about them.
    - The *and* operator (&&) is only true when both values are true.
    - The *or* operator, ||, is true if either one value is true.
    - The *not* operator, !, reverses the final value.
  - It might be difficult to tell when to use parentheses, but the author mentions the following order of precedence, from lowest to highest, which assists in not having to include these:
    - ||
    - &&
    - Comparison
  - The final logical operator is ternary, the ***conditional operator*** and uses ? and :. Whatever is included to the question mark's left decides the output. The middle value is chosen when this value is true, and the latter when false.
    - Example: `console.log(false ? 3 : 4); // the result would be 4` 
- ***Empty Values***
  - When there isn't a meaningful value present (but still a value, which is why some operations show this value), you can express it using `null` and `undefined`. There really isn't much difference between them so the author suggests using them interchagably in most cases.
- ***Automatic Type Conversion***
  - JavaScript will do its best to accomodate all programs, even ones that don't seem to make sense. Some of the examples he gives includes:
    - `console.log(8 * null) // 0`
    - `console.log("5" - 1) // 4`
    - `console.log("5" + 1) // 51`
    - `console.log("five" * 2) //NaN`
    - `console.log(false == 0) //true`
  - When operators get applied to an incorrect value, JavaScript quietly converts it to the type it needs to execute properly (even if it's not want you wanted with the program)! This process is known as *type conversion*.
  - Values that don't clearly convert to numbers become NaN, and will continue to produce this value as other operators are applied to it. If a calculation continues to evaluate as NaN, it's possible type conversion happened.
  - Anytime == is used to compare values, everything should evaluate to true for the same values, except for NaN. However, differing types results in JavaScript once again behaving strangely (usually trying to convert one value into the other value's type). Note that if null and undefined are compared, it will result as a true value. This can be helpful.
  - When you want to test whether something is exactly equal to `false`, you need to be careful. Using binary comparison will depend on automatic type conversion, so to ensure it doesn't happen, the precisely equals to (===) or the not precisely equal to (!==) operators can be used.
    - Using "" == false ends up as true versus "" === false, which results in false.
  - He recommends using the binary operators when the probability of the answer being true is false but the tertiary operators for defensive programming.
- ***Short-Circuiting of Logical Operators***
  - The && and || operators convert their left side values to Booleans to make a decision. Depending on the used operator and conversion result, the right hand or original left value will be returned.
    - Examples: The value from the left will be returned by || if it can be converted to true. If not, it will return the value on the right. It reacts relatively well for Booleans and other type values.
  - This can be used to have a default value choosen. The example he gives is the or operator can be used if you have a potentially empty value first. The replacement value will be given if the empty value is false. Note this is because string and number conversion to Booleans (o, NaN, and empty strings) are false, while others are true.
  - The and operator is the opposite - if the left value is converted to false, that value is given, otherwise returning the righthand value.
  - JavaScript does something known as *short-circuit evulation*. This means that the righthand side is only evaluated as needed. An operator that uses a similar execution is the conditional operator - the one that's selected is the one that has its value changed (from the second and third options).
- ***Summary***
  - The four values discussed were numbers, strings, Booleans, and undefined.
  - They are declared if their name or value is typed.
  - They can be changed and combined via operators - binary arithmetic, as well as comparison and logical operators; string concatenation; unary and ternary  operators. These can easily be used to have similar functions as a calculator. Additional functionality to build programs will be discussed in the next chapter.
