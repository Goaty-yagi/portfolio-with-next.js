// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
    sm: "480px",
    md: "650px",
    lg: "750px",
    xl: "1200px",
    "2xl": "1536px",
  };
const styles = {
  global: (props) =>({
    "html, body": {
      border: "solid red",
      bg: props.colorMode === 'dark' ? "to bottom, #6cd8e8, #001517)": "linear-gradient(to bottom, #232323 80%, #6cd8e8)",
      "pre code": {
        width:"auto",
        overflowX: "auto"
      },
      "pre": {
        width:"auto"
      },
    }
  }
  ) 
}

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ breakpoints,fonts: {
    logo: `'Times New Roman', Times, sans-serif`,   
  }, config,styles })

export default theme