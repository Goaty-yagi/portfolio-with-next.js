import styles from '../styles/globals.scss';

// A fancy anchor tag that supports pre-fetching

import Layout from '../components/layout';



function MyApp({ Component, pageProps, router }) {
  return (
    <div className={"darkMain"}>
      <Layout router={router}>
          <Component {...pageProps} />
      </Layout>      
    </div>
  );
}

export default MyApp;