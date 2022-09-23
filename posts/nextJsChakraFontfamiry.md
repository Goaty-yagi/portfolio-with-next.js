---
title: "[Chakra] How to use font-family with Chakra"
date: "September 23 2022"
excerpt: "Way to use font-family with Chakra"
cover_image: "/images/posts/chakra.png"
alt: "image"
tags: ["NextJs", "Chakra"]
---

This is record that I could use font-family with chakra by setting as attribute.
<br>
## Dependency

```javascript
    "next": "12.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "@chakra-ui/react": "^2.3.4",
```
<br>

## According to the Chakra ui official, there are two ways. First approach is:

```javascript
npm install @fontsource/open-sans @fontsource/raleway
```
Install icon via npm

then

```javascript
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})

export default theme
```
set theme, then
```javascript
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import {
  ChakraProvider,
  Container,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react'
import theme from './theme'

const App = () => (
  <ChakraProvider theme={theme}>
    <Container>
      <Stack>
        <Heading>The spectacle before us was indeed sublime.</Heading>
        <Text>
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside, the sable cloud beneath was dished out, and
          the car seemed to float in the middle of an immense dark sphere, whose
          upper half was strewn with silver. Looking down into the dark gulf
          below, I could see a ruddy light streaming through a rift in the
          clouds.
        </Text>
      </Stack>
    </Container>
  </ChakraProvider>
)
```
import the fonts then set theme in ChakraProvider.
<br>
<br>

## But I want to use font-family to specific text only. 

```javascript
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({ breakpoints,fonts: {
  logo: `'Times New Roman', Times, sans-serif`,   
}, });

function MyApp({ Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  );
}
```
Then set font-family attribute

```javascript
import { Text } from '@chakra-ui/react'

<Text
    fontFamily='logo'>
    Hello JS
</Text>
```
