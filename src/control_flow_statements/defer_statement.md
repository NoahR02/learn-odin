# `Defer` Statement

Defer statements defer the execution of code to the end of the scope.
Defer statements are stacked on top of each other, meaning that if you have two defer statements then the second defer statement will be called first at the end of the scope.
You can think of this as *LIFO*(last in first out).

```cpp
package main

import "core:fmt"

main :: proc() {
    defer fmt.println(1)
    fmt.println("Hi")
    defer fmt.println(2)
    defer fmt.println(3)
    
    defer {
        fmt.println("Hello")
        fmt.println("?")
    }
}
```

This prints out: 
``
"Hello", "?", "Hi", 3, 2, 1
``

> Note: Notice how we can defer a block of code.

### Why use defer statements?
If you have never seen defer statements before you may be confused as to why you should use them.
Defer statements are very useful for managing memory.

If we make a dynamic array then it must be freed, or we will leak memory. 
What we can do is defer the deletion of the dynamic array to the end of the scope right after we allocate it, so we clean it up right there and then.

For example:
```cpp
package main

import "core:fmt"

main :: proc() {
    numbers: [dynamic]int = {1, 2, 3}
    // Now we don't have to think about deleting it later or where to put it. Clean it up right there.
    defer delete(numbers)
    append(&numbers, 4, 5)
}
```

> The mental toll of when or where to clean up memory starts to fade.