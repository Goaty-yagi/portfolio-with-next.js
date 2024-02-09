---
title: "[Pytest] Mutable, Immutable... everything is object!"
date: "February 9 2024"
last_update: ""
excerpt: "About Python object type."
update_excerpt: ""
cover_image: "/images/posts/python.png"
alt: "python-image"
git: "https://github.com/Goaty-yagi/holbertonschool-higher_level_programming/tree/main/python-everything_is_object"
tags: ["Python"]
previous: ""
next: ""
---

<mdTopBottomContainer>

### This is an article wrapped up what I learned from Holberton school Python project "Python - Everything is object".

</mdTopBottomContainer>
<br>

# Dependency

```bash
Ubuntu: 20.04
Python: 3.8.5
```

<br>

# Contents

<mdDotContainer>
- Introduction<br>
- ID and Type<br>
- Mutable Objects<br>
- Immutable Objects<br>
- Why does it matter<br>
- How differently does Python treat mutable and immutable objects<br>
- How arguments are passed to functions and what does that imply for mutable and immutable objects<br>
- Conclusion
</mdDotContainer>
<br>

# Introduction

Python is an object-oriented programming language known for its simplicity and readability. In Python, everything is an object, and understanding the nature of objects is crucial for writing efficient and bug-free code. In this blog post, we'll delve into the fundamentals of Python objects, including their identification, mutability, and the implications of mutable and immutable objects.

<br>

# ID and Type

Every object in Python has a unique identifier (id) and a type. The id represents the memory address of the object, while the type defines the class or data type of the object. This unique combination of id and type is what distinguishes one object from another.
<br>

## <sub-index-color>1</sub-index-color> ID

### <sub-index-color>-</sub-index-color> You can access object id by id function.

```python

x = [1, 2, 3]

# Display the memory address of the variable x
print(id(x)) # 139926795932424


y = x

# Display the memory address of the variable y
print(id(y)) # 139926795932424
print(y is x) # True
print(y == x) # True

```

<br>

<mdContainer class='blue'>
As I mentioned above, the id returned from ID function is unique, but y and x have the same id.
</mdContainer>

<br>

<mdTextContainer class="red">
<boxTitle class="red">
INFO
</boxTitle>
1, "is" is a type of operation for identity comparison.<br>
2, y is assigned the memory address of x, so x and y are pointing the same reference.<br>
3, the reason above, the values of x and y are the same. <br>
</mdTextContainer>

<br>

### <sub-index-color>-</sub-index-color> How about this case?

```python
x = [1, 2, 3]
y = [1, 2, 3]

# guess True or False
print(x == y)
print(x is Y)

```

<br>

<mdContainer class="blue">
"x == y" must be True because both have the same values.<br>
but "x is y" is False... Why??
</mdContainer>

<br>

<mdTextContainer class="red">
<boxTitle class="red">
INFO
</boxTitle>
1, y is assigned a new value [1, 2, 3] which is not from somewhere already allocated.<br>
2, So y has different id to x.
</mdTextContainer>

### Ok, I can see the pattern now.

## <sub-index-color>2</sub-index-color> Weird Id

### <sub-index-color>-</sub-index-color> Let's see a next example!

```python
a = "hello"
b = "hello"

# guess True or False
print(a == b)
print(a is b)
```

<br>

<mdContainer class="blue">
"a == b" must be True because both have the same value "hello.<br>
but "x is y" is True... Why??
</mdContainer>

<br>

<mdTextContainer class="red">
<boxTitle class="red">
INFO
</boxTitle>
Python optimizes memory usage by reusing the same string object for both a and b when they have the same value.<br><br>
However, it's important to note that the behavior of string interning may vary across different Python implementations and versions, and it is an implementation detail. For this reason, it's recommended to use == when comparing the values of immutable objects like strings and reserve the use of is for checking object identity in cases where it is explicitly needed.
</mdTextContainer>

### <sub-index-color>-</sub-index-color> Integer have the similar behaviour

```python
i = 256
n = 256

print(i == n) # True
print(i is n) # True

k = 257
j = 257
print(k is j) # False

```

### ??? Why "i is n" == True, but "k is j == False"?

<br>

<mdTextContainer class="red">
<boxTitle class="red">
INFO
</boxTitle>
In Python, small integers(0 ~ 256) and short strings are subject to a feature called "interning," which means that some commonly used values are stored in memory in a way that promotes reusing the same object for efficiency. However, this behavior is implementation-dependent, and it should not be relied upon for all cases.
</mdTextContainer>

## <sub-index-color>3</sub-index-color> Type

### <sub-index-color>-</sub-index-color> You can use type function to check object type

```python
a = 90
print(type(90)) # <class 'int'>
print(type(i) == int)

```

### <sub-index-color>-</sub-index-color> type is actually class

```python
class MyClass:
  pass

instance = MyClass()
print(type(instance) == MyClass) # True

```

<br>

# mutable objects

A mutable object is an object whose state or value can be modified after it is created. This means that you can change the content, add, or remove elements of a mutable object without changing its identity (memory location).

## <sub-index-color>1</sub-index-color> List

```python
my_list = [1, 2, 3]
my_list[0] = 99  # Modifying an element in-place

```

## <sub-index-color>2</sub-index-color> Dictionary

```python
my_dict = {'key': 'value'}
my_dict['new_key'] = 'new_value'  # Adding a new key-value pair

```

## <sub-index-color>3</sub-index-color> Set

```python
my_set = {1, 2, 3}
my_set.add(4)  # Adding an element to the set

```

# immutable objects

An immutable object is an object whose state or value cannot be modified after it is created. Once an immutable object is created, its content remains fixed throughout its lifetime. Any operation that appears to modify the object actually creates a new object with the modified content.

## <sub-index-color>1</sub-index-color> Integers

```python
x = 5
# Attempting to modify x results in creating a new object
y = x + 2

```

## <sub-index-color>2</sub-index-color> Float

```python
pi = 3.14159
# Attempting to modify pi results in creating a new object
pi_squared = pi ** 2

```

## <sub-index-color>3</sub-index-color> String

```python
my_string = "Hello"
# Attempting to modify my_string results in creating a new object
my_modified_string = my_string + ", World!"

```

## <sub-index-color>4</sub-index-color> Tuple

```python
my_tuple = (1, 2, 3)
# Attempting to modify my_tuple results in creating a new object
my_new_tuple = my_tuple + (4, 5)

```

<br>

# Why does it matter?

## <sub-index-color>1</sub-index-color> Predictable Behavior

Immutable objects provide predictable behavior in functions and operations since their values don't change.

## <sub-index-color>2</sub-index-color> Safety

Immutable objects are inherently safer in concurrent or multi-threaded environments as they eliminate the need for locks.

## <sub-index-color>3</sub-index-color>Hashability

Immutable objects can be hashed, making them suitable for keys in dictionaries and elements in sets.

# How differently does Python treat mutable and immutable objects?

Python treats mutable and immutable objects differently in terms of memory management and assignment. Mutable objects are modified in-place, while immutable objects involve the creation of new objects.

## <sub-index-color>1</sub-index-color> Mutable Objects

```python
# Mutable object

my_list = [1, 2, 3]
print(id(my_list)) # 4375886080
my_list[0] = 99  # Modifying an element in-place
print(id(my_list)) # 4375886080
my_list.append(100) # mutable object have methods to modify its value
print(id(my_list)) # 4375886080
```

## <sub-index-color>2</sub-index-color> Imutable Objects

```python
string = "hello"
print(id(string)) # 4375955504
string_b = string.upper() # upper method return a new string
print(string_b) # HELLO
print(id(string_b)) # 4375955376 different id
print(id(string)) #  4375955504 still the same id
print(string) # hello

```

# How arguments are passed to functions and what does that imply for mutable and immutable objects

Understanding how arguments are passed to functions is essential for grasping the impact of mutable and immutable objects.

## <sub-index-color>1</sub-index-color> Pass by Object Reference

Python uses a mechanism known as "pass by object reference." When passing arguments to functions, references to objects are passed, not the actual objects.

## <sub-index-color>2</sub-index-color> Mutable vs. Immutable Arguments

Mutable objects passed to a function can be modified within the function, affecting the original object. In contrast, modifying immutable objects creates new objects, leaving the original unchanged.

### Mutable

```python
def modify_list(my_list):
    my_list.append(4)

original_list = [1, 2, 3]
modify_list(original_list)
print(original_list)  # Output: [1, 2, 3, 4]

```

### Imutable

```python
def modify_string(my_string):
    my_string += " World"

original_string = "Hello"
modify_string(original_string)
print(original_string)  # Output: Hello
```

# Conclusion

<mdContainer class="yellow">
In this exploration of Python objects, we've covered the basics of id and type, the distinction between mutable and immutable objects, and the implications of Python's treatment of these objects. Understanding these concepts will empower you to write more robust and efficient Python code, enhancing your proficiency as a Python developer.
</mdContainer>
