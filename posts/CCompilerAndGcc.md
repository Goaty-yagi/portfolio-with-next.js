---
title: "[C] What happens when you type gcc HelloWorld.c"
date: "November 2 2023"
excerpt: "Detail of compilation process"
cover_image: "/images/posts/c.jpg"
alt: "image"
tags: ["C-language", "GCC"]
---

This is a record of experiment that how gcc compile c file.
---
<br>

## Dependency

```c
    "ubuntu": "20.04",
    "gcc": "9.4.0",
```
<br>

## Contents

- What is compiler?
- What is gcc?
- What is the 4 steps of compiling c file?


<br>

# :What is compiler?

<mdContainer class='blue'>
A compiler as an IT terminology is like a converter from a source file(c-file in this case.) to other types of file. Once you write source code in a c file, it should be converted for a machine readability file to be executed.
</mdContainer>

<br>

# :What is gcc?

<mdContainer class='blue'>
GCC stands for The GNU Compiler Collection which is an optimizing compiler produced by the GNU Project.
</mdContainer>

<br>

## - Let's compile HelloWorld.c file with gcc command in the terminal.

### * We have a c file named HelloWorld.c.

```javascript
#include <stdio.h>

int main()
{
    printf("Hello World!\n");
    return (0);
}
```

<br>

### * Run the gcc command!

```bash
gcc HelloWorld.c
```
<br>

<mdContainer>
This command compile the HelloWorld.c to be executable, and create a.out.
</mdContainer>

<br>

<img src="https://images2.imgbox.com/2f/ec/vBxKptwR_o.png">

<br>

## - Let's execute a.out file with ./ command.

```bash
./a.out
```
<br>

<img src="https://images2.imgbox.com/5c/28/UXmW9xnP_o.png">

<br>

<mdContainer>
Wow! we got printed out HelloWorld!
</mdContainer>

<br>

<mdContainer class="red">
<br>
But why we need to compile a sorce file?<br>
What happened under the hood?
<br>
<br>
There are 4 steps to be executable from c file.
<br>
<br>
</mdContainer>


# :What is the 4 steps of compiling c file?

<mdContainer class='blue'>
A compilation consists of 4 steps to be executable
<br>
1, Preprocessing<br>
2, Compilation<br>
3, Assembly<br>
4, Linking
</mdContainer>

<br>

<center>
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20230404112946/Compilation-Process-in-C.png">
</center>

<br>

## <index-color>0</index-color>, Let's start from here. We have a c file named HelloWorld.c in a directory named c-practice.

<img src="https://images2.imgbox.com/59/e3/JQAcGtRf_o.png">

### <sub-index-color>-</sub-index-color> HelloWorld.c looks like this.

```javascript
#include <stdio.h>

int main()
{
    printf("Hello World!\n");
    return (0);
}
```

<br>
<mdContainer>
The HelloWorld.c just prints "Hello World!" when executed.
</mdContainer>
<br>

## <index-color>1</index-color>, Preprocessing

<mdContainer class='blue'>

A C Preprocessor is like a text substitution tool, which removes comments ,and expands preprocessor directives such as #include, #defined. This step is pre process to be processedablity in the next step.

</mdContainer>

<br>

### <sub-index-color>-</sub-index-color> How to make preprocessed file?
```bash
gcc -E HelloWorld.c
```

<br>


<mdContainer class='red'>
gcc command with a flag E converts c file to preprocessed file, and output.
So to make it as a file, you need to set a filename like...
</mdContainer>

<br>

```bash
gcc -E HelloWorld.c -o HelloWorld.i

or

gcc -E HelloWorld.c > HelloWorld.i

*/ filename is not necessary with extension .i/*
```
<br>

### <sub-index-color>-</sub-index-color> How the preprocessed file looks like?

<img src="https://images2.imgbox.com/04/91/REendLog_o.png">

<br>

### <sub-index-color>-</sub-index-color> Now the directory c-practice looks like this.


<img src="https://images2.imgbox.com/87/17/UdSrhTd1_o.png">


## <index-color>2</index-color>, Compilation

<mdContainer class='blue'>

In this step, HelloWorld.i will be compiled to assembly code for the assembler in the next step, and create intermediate compiled file named HelloWorld.s as default(in this case). 

</mdContainer>

<br>

### <sub-index-color>-</sub-index-color> How to make assembly code .s file?
```bash
gcc -S HelloWorld.c  or  HelloWorld.i
```

<br>


<mdContainer class='red'>
gcc command with a flag S converts preprocessed file to assembly code and make a .s file. You can make it as from c file and preprocessed file.
</mdContainer>

<br>

### <sub-index-color>-</sub-index-color> How the assembly code file looks like?

<img src="https://images2.imgbox.com/63/70/m7OnYOVH_o.png">

<br>

### <sub-index-color>-</sub-index-color> Now the directory c-practice looks like this.

<img src="https://images2.imgbox.com/7e/c3/P9rXvOOp_o.png">

<br>

## <index-color>3</index-color>, Assembly

<mdContainer class='blue'>

In this step, HelloWorld.s will be compiled to object .o file by the assembler,
which contains machine-level instructions. The function calls like printf() are not resolved at this point. As default, file name will be HelloWorld.o(in this case.)


</mdContainer>

<br>

### <sub-index-color>-</sub-index-color> How to make object code .o file?
```bash
gcc -c HelloWorld.c or HelloWorld.i or HelloWorld.s
```

<br>


<mdContainer class='red'>
gcc command with a flag c converts assembly code to object code and make a .o file. You can also make it from whichever file created in the previous steps including c file.
</mdContainer>

<br>

### <sub-index-color>-</sub-index-color> How the object code file looks like?

<img src="https://images2.imgbox.com/42/25/V0rZ2xTO_o.png">

<br>

### <sub-index-color>-</sub-index-color> Now the directory c-practice looks like this.

<img src="https://images2.imgbox.com/fc/f0/SyQp6Rdg_o.png">

<br>

## <index-color>4</index-color>, Linker

<mdContainer class='blue'>

In the last step, HelloWorld.o will be compiled to executable by done some works
such as linking function calls addind extra code etc... This process creates executable file named a.out as default.


</mdContainer>

<br>

### <sub-index-color>-</sub-index-color> How to make executable file?
```bash
gcc HelloWorld.c or HelloWorld.i or HelloWorld.s or HelloWorld.o
```

<br>


<mdContainer class='red'>
 the most simplest gcc command above converts object file to executable file. You can also make it from whichever file created in the previous steps including c file.
</mdContainer>

<br>

### <sub-index-color>-</sub-index-color> Let's execute a.out file with the command ./!

```bash
./a.out
```

<img src="https://images2.imgbox.com/5c/28/UXmW9xnP_o.png">

### <sub-index-color>-</sub-index-color> Now the directory c-practice looks like this.

<img src="https://images2.imgbox.com/42/92/Op842JeS_o.png">