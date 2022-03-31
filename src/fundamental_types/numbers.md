# Numbers

Today we will cover the different types of numbers in Odin. We will also be covering the syntax of how to declare a variable.

### Integers
---
The most common type of integer you will see is the standard int type:
```cpp
int
```
The standard int type is register sized, meaning that the size varies depending on what architecture you are on.
If I'm on a x64 architecture then the size of an int will be 64 bits or 8 bytes.

Odin has architecture independent sized integers such as:
```cpp
i8, i16, i32, i64, and i128
```

The following are the same as above but are just unsigned integers.
```cpp
uint
```
```cpp
ui8, u16, u32, u64, and u128
```

### Floating Point Numbers
---
In Odin we have the following floating point numbers:

```cpp
f16, f32, and f64
```

### Endian Specific Integers and Floating Point Numbers
---
An interesting addition in Odin is the endian specific integers and floating point numbers.

```cpp
// le = Little Endian
// be = Big Endian

i16le, i32le, i64le, and i128le
u16le, u32le, u64le, and u128le

i16be, i32be, i64be, and i128be
u16be, u32be, u64be, and u128be
```

```cpp
// le = Little Endian
// be = Big Endian

f16le, f32le, and f64le
f16be, f32be, and f64be
```
### Complex Numbers
---

### Quaternions
---