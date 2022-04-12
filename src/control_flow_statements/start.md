# Control Flow Statements

Control flow statements execute some block of code depending on some condition.
Control flow statements, as the name implies, control the flow of the code being executed.

For example, we can translate the paragraph below into some pseudocode:

```If they have the new crispy chicken sandwich then get me that. If they do not have that, then just get me a milkshake.```

We do this with the *if statement*.
```cpp
if crispy_chicken_sandwhich {
    get_crispy_chicken_sandwhich()
} else {
    get_milk_shake()
}
```