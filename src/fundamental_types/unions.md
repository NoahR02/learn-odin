# Unions
---

Unions are a type that can hold multiple types.
You can only access one type at a time with a union because the size of a union is the largest type that it can hold.

Here is how to define a union:
```cpp
JsonResult :: union {
}
```

We can then put the possible types we will use inside the union body.
```cpp
JsonResult :: union {
    string,  // The raw Json on success.
    int,     // Error code on failure.
}
```

Let's declare an instance of JsonResult.
```cpp
queryUserData: JsonResult = `{"id": 0, "user_name": "David"}`
```

queryUserData is now storing the result of a JsonQuery.

If the query failed, queryUserData could store an error code instead:
```cpp
queryUserData = 404
```