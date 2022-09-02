import { useState, useEffect } from "react";
import styles from "/styles/nav.module.scss";
import { FaHome, FaGithubAlt, FaLinkedinIn, FaStaylinked } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { ImBlog } from "react-icons/im";

import Link from "next/link";

// import styles from "/styles/Home.module.scss"
export default function Header() {

  let markup = <FiSun />
  let themeClicked = false
  const [theme, setData] = useState(markup);
  
  const themeHandler = () => {
    console.log("TM",themeClicked)
    themeClicked = !themeClicked
    if(themeClicked) {
      return <FiMoon />
    } else {
      return <FiSun />
    }
  }

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>LOGO</div>
        <div>
          <a className={styles.navMenu}>
            <FaHome className={styles.menuLogo}/>
            HOME
          </a>
          <a className={styles.navMenu}>
            <FaGithubAlt className={styles.menuLogo}/>
            SOURCE
          </a>
          <a className={styles.navMenu}>
            <FaLinkedinIn className={styles.menuLogo}/>
            LINKED_IN
          </a>
          <a className={styles.navMenu}>
            <ImBlog className={styles.menuLogo}/>
            POST</a>
        </div>
        <div 
          onClick={(e) => {
            e.preventDefault()
            setData(themeHandler)}}
           
          className={ themeClicked ?  styles.themeDark:styles.theme}>
          {theme}
        </div>
      </nav>
    </header>
  );
}
