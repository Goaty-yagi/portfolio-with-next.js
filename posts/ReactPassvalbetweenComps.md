---
title: "[React] Passing values and methods between components"
date: "October 27 2022"
excerpt: "Way to pass values and methods from P to C and vise versa"
cover_image: "/images/posts/react.png"
alt: "image"
tags: ["ReactJs","NextJs"]
---

This is record that how to pass values and methods between components
<br>
## Dependency

```javascript
    "next": "12.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0",
```
<br>

# From parent to child.

```javascript
export default function Parent() {
  const data = "parent"
  function Child({text}) {
    console.log(text) // return parent
    return (
      <div>{text}</div>
    )
  }
  return (
      <>
      <Child text={data}/>
      </>
  )
}
```
<br>

<mdContainer> Set argument to the child function ,and props to child component, then you can access parent values and methods even component files are separated.
</mdContainer>

<br>

# From child to parent

```javascript
import { useEffect, useState } from "react"

export default function Parent() {
  const data = "parent"
  const [value, setValue] = useState() // to set value from child.
  console.log(value) // return from child
  function Child({setMethod}) {
    const childText = "from child"
    useEffect(() => {
      if(setMethod) {
        setMethod(childText)
      }
    })
    return (
      <div>{text}</div>
    )
  }
  return (
      <>
        <Child setMethod={setValue}/>
      </>
  )
}
```
<br>

<mdContainer>
Assign useState to set value from child, then pass the set method to child. In child, set an argument to receive the set method, then set values in useEffect.
</mdContainer>
