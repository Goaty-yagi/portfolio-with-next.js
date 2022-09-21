import styles from "../styles/globals.scss";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
// A fancy anchor tag that supports pre-fetching
import Layout from "../components/layout";

const breakpoints = {
  sm: "480px",
  md: "650px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
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
