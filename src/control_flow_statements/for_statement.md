# `For` Statement

The for statement, also called the for loop, is useful for executing some block of code a specified amount of times based upon some condition.

A basic for loop has 2 statements and one conditional which are separated by semicolons:
- The initial statement: This is executed before the first iteration.
- The conditional: This is checked before every iteration. If the condition is false, then the code in the for loop will stop executing.
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

If we want to iterate over a block of code until some condition is met, then we can do the following:
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

## `Break` and `Continue` Statements

The `break` statement can be used to break out of for loops.
```cpp
i := 0

for {
  fmt.println(i)
  if i == 20 {
    break
  }
  i += 1
}
```

The `continue` statement can be used to skip to the next iteration of the for loop.
```cpp
for i := 0; i < 20; i += 1 {
  if i == 5 {
    continue
  }
  // ... Some expensive operations
}
```

## The Ranged based `for` loop

The ranged based for loop iterates over a collection of values from some starting range to some ending range.
The variables you iterate over are copies of the original variable. 
To access the variable directly, you must be explicit and access it by reference (see below).

Here is the general syntax for the ranged `for` loop:
```cpp
for some_value, optional_index in some_collection {
}
```

Here are some examples:

```cpp
str := "My String!"

for my_rune, index in str {
    fmt.println(my_rune, index)
}
```

```cpp
arr: [3]int = {1, 2, 3}
for _, i in arr {
    arr[i] += 5
    fmt.println(arr[i])
}
```
> Note: Ranges in Odin range from inclusive to inclusive.
> To make the end range exclusive, we put a **<** before the end range.
```cpp
for val in 1..10 {
    // Prints 1-10
    fmt.println(val)
}
```

```cpp
for val in 1..<10 {
    // Prints 1-9
    fmt.println(val)
}
```

> Access the value by reference with **&**.
> By reference means directly accessing the value's memory address. You can now change the actual value and not a copy of it.
```cpp
arr: [3]int = {1, 2, 3}
for val in &arr {
    val += 5
    fmt.println(val)
}
```


