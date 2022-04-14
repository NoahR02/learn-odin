# Arrays
---

An Array is a collection of elements where all the elements have the same type.
Arrays store their data contiguously in memory.

### Fixed Sized Arrays
---
Fixed sized arrays are arrays with a fixed length that cannot be changed.

![](/images/fundamental_types/2.6_0.svg)

To make the array above do the following:
1. To denote that it is an array you put brackets before the type name.
2. Inside the brackets put the size.
3. Set the array equal to curly braces, then write the specified values inside.

> Note: The number of values placed inside the curly braces must be the maximum number of items the array can hold.

If you did this all correctly then you should have the following:
```cpp
my_array: [4]int = {120, 98, 2097, 5}
```

If we want to change the value of a specific element then we can do that by indexing the value and setting it equal to a new value:
```cpp
my_array[0] = 56 // The first element in the array is now equal to 56.
```

### Dynamic Arrays
---
Dynamically sized arrays are arrays with a variable length that can be changed.

To create the array above but without a fixed size then we do the following:
```cpp
my_array: [dynamic]int = {120, 98, 2097, 5}
```
We can now append another element to the array via the builtin append procedure:
```cpp
append(&my_array, 50)
```
Likewise, we can remove the last element via the builtin pop procedure:
```cpp
pop(&my_array)
```
One last thing we need to do is to delete the dynamic array. Dynamic arrays are stored on the heap.
To be more specific the contents of the array are stored on the heap but by default the pointer to those elements is stored on the stack.
Dynamic arrays use indirect addressing to store a pointer to the actual content of the array.
This is done because dynamic arrays can become very large and the dynamic array might resize often.

The heap is an area of memory in RAM that is of a dynamic length that must be managed by the programmer directly.
If we put something on the heap, we must remove it. Failing to clean up memory is a typical bug known as a "memory leak".

```cpp
delete(my_array)
```

Use the make function to specify the capacity and reserve of the dynamic array. The capacity and reserve are default parameters and may be omitted.
```cpp
my_array: [dynamic]int = make([dynamic]int, 12, 24)
```

We can append multiple elements at once by using the append_elems procedure.
```cpp
append_elems(&my_array, 120, 98, 2097, 5)
```
If you haven't already, free the memory.
```cpp
delete(my_array)
```
