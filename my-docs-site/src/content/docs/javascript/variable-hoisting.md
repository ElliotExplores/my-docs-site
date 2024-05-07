---
title: Variable Hoisting
description: JavaScript's variable hoisting moves declarations to the top of their scope, enabling access before their actual declaration in the code.
---


Variable hoisting is a concept in JS that can sometimes lead to confusion among developers.

In JS, when you declare a variable using the var keyword, the declaration is "hoisted" to the top of its scope. This means that regardless of where the declaration occurs within the scope, the variable is accessible throughout that scope.

However, it's important to note that only the declaration is hoisted, not the initialization. This means that while you can access the variable throughout the scope, its value will be undefined until it's explicitly assigned a value.

Take a look at this example:    

```JavaScript
function example() {
    console.log(x); // Outputs: undefined
    var x = 10;
    console.log(x); // Outputs: 10
}

example();
```

In the above code, even though we try to log the value of x before it's assigned a value, it doesn't result in an error. This is because the declaration var x; is hoisted to the top, making x accessible throughout the scope.

Understanding variable hoisting is crucial for writing clean and predictable JavaScript code. Remember that while hoisting can be convenient, it's best practice to declare variables at the top of their scope to avoid unexpected behavior and improve code readability. 
#JavaScript

## References
- [What is Hoisting in JavaScript?](https://www.freecodecamp.org/news/what-is-hoisting-in-javascript/)
- [Hoisting | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)