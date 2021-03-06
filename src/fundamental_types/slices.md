# Slices
---
Slices are a pointer to a contiguous block of memory with a size. Slices are widely used in Odin code.

To declare a slice we do the following:
```cpp
slice: []int // slice of integers
```

Let's declare an array:
```cpp
my_array: [5]int = {1, 2, 3, 4, 5}
```

We can now take a slice of it. Let's take the first 3 elements.

The first index is inclusive. The second index is exclusive.
Or in interval notation: [0, 3).

```cpp
slice = my_array[0 : 3]
```

Printing a slice looks similar to printing an array.
For example, printing my_array will print [1, 2, 3].


Slices are typically created from contiguous data structures like arrays, but they can also be created from pointers.
Use the mem.slice_ptr function to create a slice from a pointer.
```cpp
mem.slice_ptr(&my_array[0], 3)
```