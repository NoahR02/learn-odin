# Enumerations
---

Enumerations store one value out of a set of possible values. Enums values can range from 1 to 8 bytes.
They are useful for storing things such as months, options, etc. that can only take on certain values.

Similar to defining a struct we can define a Colors enum like so:
```shell
Note that you can leave out the type after enum and it will default to int.
```
```cpp
Colors :: enum int {
}
```

We can now put the possible values Colors can be.
```cpp
Colors :: enum int {
    RED, // 0
    GREEN = 100, // 100
    BLUE, // 101
}
```

An instance of Colors can only be 3 values: RED, GREEN, or BLUE.
Colors.RED maps to 0 which is of type integer.
Colors.GREEN maps to 100 which is of type integer.
Colors.BLUE maps to 101 which is of type integer.

We can now define an instance of Colors.
```cpp
color: Colors = Colors.RED // Or .RED to be more implict.
```

Enums can only be compared to enums of the same type. Comparing them with integers is an error.
If you need the integer representation, you can cast the enum to its integer type.