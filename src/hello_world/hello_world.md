# Writing our Hello World Program

So far your program should look something like this:
```cpp
package hello_world
```

### Collections
---

Next we will import a package called fmt from Odin's core collection.
A collection is a path to a folder containing packages. If you do not specify a collection, Odin will look for a package relative to your current file's directory.
The ***core*** collection is Odin's standard library for common things like reading files, string manipulation, json, and much more!

The fmt, format, package is used for formatting text and printing to the screen.

```cpp
package hello_world

import "core:fmt"
```

### Procedures
---

Next we have to make a procedure, specifically the main procedure.
A procedure is what most people call a function. 
The difference is that a procedure is semantically more correct.
You can think of it like a function if you'd like.
You can read the procedure below as: main, which is of type procedure, has a function body.

A procedure is a block of code, which can:
* Take in parameter(s)
* Return Value(s)
* Modify global state.

Most procedures have a name, but not all. We will cover this in a future chapter.
```cpp
package hello_world

import "core:fmt"

main :: proc() {

}

```
### println
---
```cpp
println :: proc(args: ..any, sep := " ") -> int { return fprintln(fd=os.stdout, args=args, sep=sep) }
```
The println procedure is defined [here](https://github.com/odin-lang/Odin/blob/master/core/fmt/fmt_os.odin).
Println takes 0 or more arguments printing them seperated by sep, " " by default, and appends a new line.

Sep can be provided by naming the args like so. This will print, "a_b_c".

When one parameter is named, all of them must be named. However, order does not matter.  
```cpp
fmt.println(sep="_", args={"a", "b", "c"});
```
---
When using println, the resulting code should look like this:
```cpp
package hello_world

import "core:fmt"

main :: proc() {
    fmt.println("Hello World!")
}

```

Now run this inside your hello_world folder. This will compile and run your package.
The resulting binary will be named my_first_program.

```sh
odin run . -out=my_first_program
```

Or if you want to run it from anywhere:

```sh
odin run ../path_to_odin_package/hello_world -out=my_first_program
```

```sh
Note that your executable cannot be the same name as your folder if you are running the command from one level outside the folder.
```

If you did everything correctly, then your program should print out "Hello World!" to the console! 

***Congratulations, you just made your first Odin program!***