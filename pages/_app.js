import styles from '../styles/globals.scss';
import { ChakraProvider} from '@chakra-ui/react'

// A fancy anchor tag that supports pre-fetching

import Layout from '../components/layout';



function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <div className={"darkMain"}>
        <Layout router={router}>
            <Component {...pageProps} />
        </Layout>      
      </div>
    </ChakraProvider>
  );
}

export default MyApp;