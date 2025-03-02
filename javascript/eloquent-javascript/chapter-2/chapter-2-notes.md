# Notes

## [Chapter 2: Program Structure](https://eloquentjavascript.net/3rd_edition/02_program_structure.html)

*All content paraphrased from the above link.*

- This chapter introduces concepts that are linked to programming.
- ***Expressions and Statements***
  - Chapter 1 introduced values and operation application to make new values, but needs additional functionality to be of use.
  - Code that makes a value is known as an *expression* - this includes literal values, like a string or number; those included in parentheses; or unary or binary operators applied to their respective expressions. This structure is similar to human language, where you can have multiple subsentences within each other.
  - Continuing to build on this analogy, a full sentence is called a *statement*. JavaScript programs are lists of statements. The most concise statement is any expression that ends with a semicolon. However, these can often add no value to a program, especially if they stand alone. They only bring value if it causes a change, or *side effect*.
  - Sometimes JavaScript allows no semicolon; other times, it will be necessary to differentiate statements. Since not including semicolons can cause problems, it's best to include them at the end of all statements until the user has a better understanding of them. 
- ***Bindings***
  - The previous chapter only discussed old values and how to create new ones from old ones. A few concerns to be aware of based on current knowledge:
    - Old values can't be changed once defined.
    - New values have to be used after being made or will vanish.
  - This issue is resolved through *bindings*, also known as *variables*. The binding's structure starts with a keyword, `let`; the binding's name; and the optional immediate value that's set with an equal sign and the value. Bindings' names can be used as expressions, where the value is the current value. This value can always change by using the equal sign with the new value.
  - The author compares bindings to tentacles as they only grasp, not contain, values. (Note two individual bindings can actually be equal to the same value.)
  - Programs can only access values it still can reference.
  - Bindings without values hold nothing, so empty bindings will be see as `undefined` until they equal something.
  - You can define multiple bindings with a single `let` statement, but the values need to be separated by commas.
  - Additional keywords to define bindings are `var` (the way variables were created up to 2015 - more details on the difference will come later, but it's best to still with `let`) and `const` (short for *constant*, which remains the same).
- ***Binding Names***
  - Mostly anything can be used as a name, with a few exceptions:
    - It cannot start with numbers.
    - The only symbols that can be used are dollar signs ($) and underscores (_).
    - Certain words cannot be used as binding names as they're saved for specific functions in JavaScript. The author lists all the reserved keywords, as seen below:
      - `break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import interface in instanceof let new package private protected public return static super switch this throw true try typeof var void while with yield`
    - He mentions to potentially look out if errors occur because a reserved keyword is being used.
- ***The Environment***
  - The *environment* is all bindings and values that exist during a current time. Even if no created bindings exist, there are other ones that exist within the system.
- ***Functions***
  - Many values have a type known as *function*, or a program that's wrapped in a value. The value that encases the program can then be applied to have the program run. The example used by the author is the binding prompt, which has a function holding a dialog box asking for user input.
    - `prompt() //The text goes inside of the parentheses with quotation marks` 
  - When a function runs, it's known as invoking; calling; or applying. Functions can run after you include parentheses after including an expression, and usually use the binding name. The information used in functions are known as *arguments*. Depending on the function, different numbers or arguments may be needed.
  - The above function is not used often in modern web programming unless you're testing or making toy programs.
- ***The console.log() Function***
  - The function used in book examples to show text was `console.log()`. JavaScript and its variant languages have this function that prints out the input to another device (i.e. browsers show output on the console, which can be shown through its Developer Tools option). Unlike the example included, the output of the program is shown after the example.
  - The `console.log` name includes a period because it is a binding known as `console` that finds a `log` property. This is further discussed in Chapter 4 and this syntax is not allowed for regular bindings.
- ***Return Values***
  - Things that are shown or happen are known as *side effects*, which can be helpful.
    - Example: `console.log(Math.max(2,4) \\returns largest value`
  - The value that is ultimately shown is *returned*.
  - Chapter 3 will go more into creating our own functions.
- ***Control Flow***
  - Statements are executed from the top to the bottom.
  - The author provides the below example of a *straight-line control flow* program:
    - `let theNumber = Number(prompt("Pick a number"));
    - console.log("Your number is the square root of " + theNumber * theNumber);`
