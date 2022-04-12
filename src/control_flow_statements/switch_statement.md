# Switch Statement

*Switch* statements are very similar to the if statement. 
Switch statements execute some block of code if some value matches another value.
This behavior is different from the if statement because the if statement executes some block of code depending on if a boolean condition is true.


> Note: One major advantage of using switch statements is readability. 

Starting a switch statement involves writing switch then the value we want to evaluate. 
Next, we create a [block scope](https://en.wikipedia.org/wiki/Scope_(computer_science)).
```cpp
grade := 'A'

switch grade { 

}
```

We then write *case* followed by a value that could potentially match our variable above.
Finally, we separate our statement from the code we want to execute with a colon.
```cpp
switch grade {
    case 'A': fmt.println("Amazing job!")
    case 'B': fmt.println("Good job!")
    case 'C': fmt.println("Ok job!")
}
```

> Note: Executing more than one line of code requires a block scope after the colon.

Adding a default case is also possible:
```cpp
switch grade {
    // ...
    case: fmt.println("Good try!")  
}
```

Unlike most programming languages Odin, *breaks* by default. 
If it matches a value, then the other cases will not be considered.
We can override the default behavior with *fallthrough*. Fallthrough *has* to be the last piece of code.

```cpp
grade = 'C'
switch grade {
    case 'A': fmt.println("Amazing job!")
    case 'B': fmt.println("Good job!")
    case 'C': {
        fmt.println("Ok job!")
        // It must be at the very end of the code in this block scope.
        fallthrough
    }
    case: fmt.println("Good try!")  
}
```

This will now print "Ok job!" and "Good try!". 
We can also use the break keyword to *break* from a case instead of falling through.

## Partial Switch Statements for Enums and Unions
Partial switch statements cover a partial amount of cases. 
When we use a switch statement on an enum value, we must make a case for every possible enum value.
Partial switch statements let us get around that.

```cpp
Color :: enum { 
    RED, BLUE, GREEN,
}

color := Color.BLUE

#partial switch color {
    case .BLUE: fmt.println("The Color is blue!")
}

```

Partial switch statements are also useful for unions:
```cpp
JsonResult :: union {
    string,  // The raw Json on success.
    int,     // Error code on failure.
}
value: JsonResult = `{"id": 0, "user_name": "David"}`

#partial switch in value {
    case string: fmt.println("This is a json string!")
}

```