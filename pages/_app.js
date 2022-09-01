import styles from '../styles/globals.scss';

// A fancy anchor tag that supports pre-fetching
import Link from "next/link";
import Header from './component/header';
function MyApp({ Component, pageProps }) {
  return (
    <div className={"main"}>
      <Header/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;