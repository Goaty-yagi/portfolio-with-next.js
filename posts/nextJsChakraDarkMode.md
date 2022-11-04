---
title: "[Chakra] Implement dark-mode with Chakra and Next.js"
date: "September 27 2022"
excerpt: "Detail of implementation of dark-mode with Chakra"
cover_image: "/images/posts/chakra.png"
alt: "image"
tags: ["NextJs", "Chakra"]
---

This is a record that I was struggled to implement dark-mode with Chakra.
---
<br>

## Dependency

```javascript
    "next": "12.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "@chakra-ui/react": "^2.3.4",
```
<br>

## What I want to achieve?

- How to set up dark-mode?
- How to switch light to dark vice versa?
- Can I set original css style to specific part in dark-mode?


<br>

# :How to set up dark-mode?

## 1, use extendTheme function with dark-mode config.

for import purpose, create theme file named 'theme.js'(whatever)

```javascript
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme(config);

export default theme
```
<br>

## 2, Set it to ChakraProvider. 

```javascript
import theme from "theme-path"

function MyApp({ Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  );
}
```
<br>

## 3, Create  a file pages/_document.js then set ColorModeScript. 

```javascript
import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '/lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```
<br>

# :How to switch light to dark vice versa?

## 1, import useColorMode then set variable.

```javascript
import { useColorMode } from "@chakra-ui/react";

export default function ToggleButton() {
    const { colorMode, toggleColorMode} = useColorMode()
}
```

<mdContainer>

 #### colorMode is variable containing current mode as string "light" or "dark" or "system". The system is not mentioned in this article.
</mdContainer>
<br>

## 2, Execute toggleColorMode to switch current mode to another.

```javascript
import { Button, useColorMode } from "@chakra-ui/react";

export default function ToggleButton() {
    const { colorMode, toggleColorMode} = useColorMode()
    return (
        <Button onClick={toggleColorMode()}/>
    )
}
```

<mdContainer>
dark-mode style is already set as default.
</mdContainer>


<br>

# :Can I set original css style to specific part in dark-mode?

## Yes!

<br>

## 1, import useColorModeValue then set style values.

```javascript
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ToggleButton() {
    const { colorMode, toggleColorMode} = useColorMode()
    const bg = useColorModeValue("red","blue")
    return (
        <Button onClick={toggleColorMode()}>
            {colorMode === "light" ? (
            <FiSun />
            ) : (
            <FiMoon/>
            )}
        </Button>
    )
}

```
<br>

## 2, Set the variable to the Chakra component.

```javascript
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ToggleButton() {
    const { colorMode, toggleColorMode} = useColorMode()
    const bg = useColorModeValue("red","blue")
    return (
        <Button bg={bg} onClick={toggleColorMode()}>
            {colorMode === "light" ? (
            <FiSun />
            ) : (
            <FiMoon/>
            )}
        </Button>
    )
}
```
<br>

### useColorModeValue("red","blue") left side indicate "light-mode" right side indicate "dark-mode"

<mdContainer>

 #### useColorModeValue is not working as my expectation in _app.js, because _app.js is rendered before set current mode. If you want to change back-ground color, use it in other components like layout.
 
</mdContainer>
