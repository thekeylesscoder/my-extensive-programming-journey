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
- This issue is resolved through *bindings*, also known as *variables*.
