---
title: "[Framer-Motion] Staggered and Scroll animation"
date: "October 12 2022"
excerpt: "Detail of implementation of Staggered and Scroll animation"
cover_image: "/images/posts/framer-motion.png"
alt: "image"
tags: ["NextJs", "Framer-Motion"]
---

## This is a record that how I implement Staggered and Scroll animation with Framer-Motion.

<br>

## Dependency

```javascript
"next": "12.2.5",
"react": "18.2.0",
"react-dom": "18.2.0",
"@chakra-ui/react": "^2.3.4",
"framer-motion": "^7.4.0"
```

<br>

## What I want to achieve?

I would like to implement animation which when user scroll down, staggered animation happens.

<br>

# :How to implement scroll animation?

```javascript
import { motion } from "framer-motion";

export default function Scroll({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
```

<br>
Use whileInView instead of animate.
<br>

## You can use viewport prop when whileInView in use.

```javascript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{
    duration: 0.5,
    delay: 0.5,
  }}
  viewport={{ once: true, amount: 0.4 }}
>
  {children}
</motion.div>
```

<br>
viewport prop accept two key value pairs, one is "once" with true or false value. True means the animation happens just once, false means this happens as many as scroll to the animation part.  The other one is "amount". As default, the animation part is scrolled even 1 px in the screen, then it starts. Amount prop accept 0 to 1 num which means if 1 is set, then scroll to the point but the animation is not starting untill the point is 100% viewable in the screen.  
<br>

# :How to implement staggered animation?

There are two requirement to do so. Below is a whole code. I will describe what are required later. 

```javascript
import { motion } from "framer-motion";

  const variant = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      y: -10,
      opacity: 0,
    },
  };
  const childVariant = {
    hidden: (index) => ({
      x: index % 2 === 0 ? "-1000px" : "1000px",
    }),
    show: {
      x: "0",
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 30,
      },
    },
    exit: (index) => ({
      x: index % 2 === 0 ? "-1000px" : "1000px",
    }),
  };
<motion.div
  variants={variant}
  initial={"hidden"}
  whileInView={"show"}
  exit={{ y: -10, opacity: 0 }}
  transition={{ duration: 0.2 }}
  viewport={{ once: true, amount: 0.7 }}
>
  <motion.div
    variants={childVariant}
  >
  </motion.div>
</motion.div>
```

<br>

## 1, First,the place you want to set staggered animation must be nested in other motion component.


```javascript
<motion.div
  variants={variant}
  initial={"hidden"}
  whileInView={"show"}
  exit={{ y: -10, opacity: 0 }}
  transition={{ duration: 0.2 }}
  viewport={{ once: true, amount: 0.7 }}
>
  <motion.div
    variants={childVariant}
  >
  </motion.div>
</motion.div>
```

## 2, Assign variants with staggerChildren in transition then set it to the motion components.

```javascript
const variant = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      y: -10,
      opacity: 0,
    },
  };
  const childVariant = {
    hidden:{
      x:  "-1000px",
    },
    show: {
      x: "0",
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 30,
      },
    },
    exit: {
      x: "1000px",
    },
  };
<motion.div
  variants={variant}
  initial={"hidden"}
  whileInView={"show"}
  exit={{ y: -10, opacity: 0 }}
  transition={{ duration: 0.2 }}
  viewport={{ once: true, amount: 0.7 }}
>
  <motion.div
    variants={childVariant}
  >
  </motion.div>
</motion.div>
```
