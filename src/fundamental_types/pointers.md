# Pointers
---

Pointers point to a memory address.
The syntax to make a pointer is with a carrot head on the left side of the pointer type.
To dereference a pointer or access the value at that memory address, we put the carrot head on the right side of the pointer type.
To get the memory address of something we use the "address of" operator &.

Below we create a variable called my_value and store 20 inside. We then make an int pointer point to the address of my_value.
```cpp
my_value: int = 20
my_pointer: ^int = &my_value
```
my_pointer uses indirect addressing, which means the variable stores the memory address of whatever it is pointing to.
my_value uses direct addressing because the location of the value is at the same address.
You can see this relationship below.

```cpp
blue: int = 20
green: ^int = &blue // int pointer
```

![Two squares. One blue that is located at memory address 0x00. One Green that is located at memory address 0x04. Blue holds the number twenty. Green holds the memory address 0x00.
](/images/fundamental_types/2.4_0.svg)

Run the code below and study the relationship between the values.
```cpp
my_value: int = 20
my_pointer: ^int = &my_value

fmt.println(&my_value)
fmt.println(&my_pointer) // print the pointer address

fmt.println(my_value)
fmt.println(my_pointer) // print the address that the pointer holds.

fmt.println(my_value)
fmt.println(my_pointer^) // dereference the pointer
```