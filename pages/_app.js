import styles from '../styles/globals.scss';
import { ChakraProvider, CSSReset} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
// A fancy anchor tag that supports pre-fetching
import Layout from '../components/layout';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

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