# Strings
---
Strings in Odin are immutable. Strings are UTF-8 encoded, and we place characters inside our strings via the concept of runes.

Runes are unencoded code points like 0x96EA which get viewed as 雪.
When you construct a string with runes, they get encoded into a UTF-8 format and stored as an array of bytes.
You can think of runes as characters, but be careful, as one rune does not always equal one character.
For example: 👋🏻 produces 2 runes. One for the hand and one for the mask color.

Lets do a simple example and print some kanji!
```cpp
snow: string = "雪"
fmt.println(snow)
```
That's it.
This might seem like a simple thing but in programming languages like C, and C++ with no UTF-8 support it is a nightmare to a user who just wants to print out a string in a different language.

Later on there will be a whole chapter on manipulating strings.