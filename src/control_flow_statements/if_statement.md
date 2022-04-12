# `If` Statement

The *if* statement is used when you want to execute some block of code when some condition is true.

```cpp
grade := 'A'

if grade == 'A' {
  fmt.println("Amazing job!")
}
```

If the *if statement* above evaluates to false then we can execute some block of code with the *else statement*:
```cpp
if grade == 'A' {
  fmt.println("Amazing job!")
} else {
  fmt.println("Good try!")  
}
```
We can chain multiple if statements together with the *else if statement*:
```cpp
if grade == 'A' {
  fmt.println("Amazing job!")
} else if grade == 'B' {
  fmt.println("Good job!")
} else if grade == 'C' {
  fmt.println("Ok job.")
} else {
  fmt.println("Good try!")  
}
```

*If statements* can start with an initial statement, meaning that you can declare a variable before the condition in your if statement like this:
```cpp
if grade := 'A'; grade == 'A' {
  fmt.println("Amazing job!")
}
```
The variable declared inside the initial statement can be accessed in any of the chained if else or else statements.
