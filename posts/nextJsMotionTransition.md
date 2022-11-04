---
title: "[Framer-Motion] transition doesn't work with Chakra components"
date: "October 10 2022"
excerpt: "How to deal with Chakra components with transition"
cover_image: "/images/posts/framer-motion.png"
alt: "image"
tags: ["Chakra", "Framer-Motion"]
---

When I tried to implement scroll animation with whileInView and Chakra component Box, transition was not working properly.
Here is how I solved the problem.
<br>

## Dependency

```javascript
"marked": "^4.1.0",
"next": "12.2.5",
"framer-motion": "^7.4.0"
```

<br>

## Problem code(Just see the Box component)

```javascript
import { Box, Text, Flex, Heading, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Access() {
  return (
    <Box
      as={motion.div} 
      h="100%"
      w="100%"
      m="1rem 0"
      alignItems="center"
      initial={{ opacity: 0, x: "-1000px" }}
        whileInView={{ opacity: 1, x: "0" }}
        transition={{
          duration: 0.25,
          delay: 0.5,
        }}
      viewport={{ once: true }}>
        <Center>
          <Heading>ACCESS</Heading>
        </Center>
        <Box
          w="100%"
          mt="1rem"
          p="5rem"
          position="relative"
          overflow={"hidden"}
        >
          <Image
            src={"/images/access.jpg"}
            width="90%"
            height="60%"
            layout="responsive"
            objectFit="contain"
          ></Image>
        </Box>
    </Box>
  );
}
```

### What is the problem??
<br>

Box component with 'as' props doesn't work with transition props. So I solved it by separating motion.div from Box component like below.


```javascript
import { Box, Text, Flex, Heading, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Access() {
  return (
    <Box
      h="100%"
      w="100%"
      m="1rem 0"
      alignItems="center"
    >
      <motion.div
        initial={{ opacity: 0, x: "-1000px" }}
        whileInView={{ opacity: 1, x: "0" }}
        transition={{
          duration: 0.25,
          delay: 0.5,
        }}
        viewport={{ once: true }}
        >
        <Center>
          <Heading>ACCESS</Heading>
        </Center>
        <Box
          w="100%"
          mt="1rem"
          p="5rem"
          position="relative"
          overflow={"hidden"}
        >
          <Image
            src={"/images/access.jpg"}
            width="90%"
            height="60%"
            layout="responsive"
            objectFit="contain"
          ></Image>
        </Box>
      </motion.div>
    </Box>
  );
}
```
