---
title: "Variables"
metaTitle: "Variables | Minku Singh"
metaDescription: "Variables in JavaScript"
---

Variables are containers in which we can store values and reuse them.

Variables in JavaScript can be declared in 3 ways using - 
1. var 
2. let 
3. const 

## var 
var declares a function-scoped or globally scoped variable, not block scoped.

While, interpreting the code, the variable declared with var are **created before any code is executed** because of hoisting and consists of undefined value.

So, declaring a variable with var anywhere in the code is equivalent to declaring it at the top of inside its scope(the top of global code or the top of function code).

```
    //both work similar
    //1
    name = 'Minku';
    var name;

    //2
    var name;
    name = 'Minku';
```

## let
let declares a block-scoped variable and is a recommended way to declare a variable in JS.

let doesn't support hoisting, and initialized to a value only when a parser evaluates it.

```
    let name = 'Minku';
```

## const
It is similar to let, the only difference is that its value can't be changed, once declared.


```
    const name = 'Minku';

    name = 'Modi'; // throws error
```

### Difference between let vs var
1. variable declared with let is initialized only when a parser evaluates it, while variable declared with var is initialized with undefined value even before any code is executed.

2. We can redeclare the variable with same name using var, while we can't redeclare the variable with same name using let. Though, we can reassign the value.