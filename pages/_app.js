import styles from "../styles/globals.scss";
import { ChakraProvider,CSSReset} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
// A fancy anchor tag that supports pre-fetching
import Layout from "../components/commons/layout";
const breakpoints = {
  sm: "480px",
  md: "650px",
  lg: "750px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints,fonts: {
  logo: `'Times New Roman', Times, sans-serif`,   
}, 
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
});

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout router={router} pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
