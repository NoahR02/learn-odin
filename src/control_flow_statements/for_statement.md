# For Statement

The for statement also called the for loop is useful for executing some block of code a specified amount of times based upon some condition.

A basic for loop has 2 statements and one conditional which are separated by semicolons:
- The initial statement: This is executed before the first iteration.
- The conditional: This is checked before every iteration. If the condition is false then the code in the for loop will stop executing.
- The final statement: This is executed at the end of every iteration

The initial and final statements are optional. 

Here is a for loop that will print from 1 to 5.  
```cpp
// i := 0 is the initial statement.  
// i < 5 is the conditional.  
// i += 1 is the final statement.

for i := 0; i < 5; i += 1 {
    fmt.println(i + 1)
}
```

If we want to iterate over a block of code until some condition is met then we can do the following:
> Note: This is also called a while loop in other programming languages.
```cpp
i := 0
for i < 20 {
  fmt.println(i)
  i += 1
}
```

If we want to loop forever:
```cpp
i := 0

for {
  fmt.println(i)
  i += 1
}
```

## Ranged based for loops
