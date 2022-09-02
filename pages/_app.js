import styles from '../styles/globals.scss';

// A fancy anchor tag that supports pre-fetching
import Link from "next/link";
import Header from './component/header';
import Footer from './component/footer';
function MyApp({ Component, pageProps }) {
  return (
    <div className={"main"}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;