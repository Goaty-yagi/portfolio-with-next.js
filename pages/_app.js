import styles from "../styles/globals.scss";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
// A fancy anchor tag that supports pre-fetching
import Layout from "../components/layout";
import Fonts from "../components/fonts";


const breakpoints = {
  sm: "480px",
  md: "650px",
  lg: "750px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints,fonts: {
  logo: `'Times New Roman', Times, sans-serif`,   
}, });

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <CSSReset />
      <div className={"darkMain"}>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
