# `When` Statement

When and if statements are very similar, but they have some differences.

- When statements take constant expressions as the condition.
- Initial statements are not allowed.
- You can use when statements at file scope.
- When statements do not create a new scope!
- When statements are evaluated at compile time.

Since I'm on linux the code below ultimately compiles down to ```fmt.println("Linux!")```!
```cpp
package main

import "core:fmt"
main :: proc() {
    when ODIN_OS == .Windows {
        fmt.println("Windows!")
    } else when ODIN_OS == .Linux {
        fmt.println("Linux!")
    } else {
        fmt.println("Some other operating system!")
    }    
}
```

We can now create operating system specific variables!
Since I'm on Linux I am able to print out the `my_linux_only_variable` variable.
> Note: I cannot access the my_windows_only_variable variable because I am on Linux.
> The variable does not exist at compile time!

```cpp
package main
import "core:fmt"

when ODIN_OS == .Windows {
    my_windows_only_variable := 20
} else when ODIN_OS == .Linux {
    my_linux_only_variable := 1000
} else {
    my_random_variable := 80
}   

main :: proc() { 
    fmt.println(my_linux_only_variable) 
}
```
