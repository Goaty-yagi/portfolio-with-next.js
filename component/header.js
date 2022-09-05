import { useState, useEffect } from "react";
import styles from "/styles/nav.module.scss";
import { FaHome, FaGithubAlt } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/Ai";
import { ImBlog } from "react-icons/im";

import Link from "next/link";
import Theme from "./theme";

export default function Header() {

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
            <AiOutlineLinkedin className={styles.menuLogo}/>
            LINKED_IN
          </a>
          <a className={styles.navMenu}>
            <ImBlog className={styles.menuLogo}/>
            POST</a>
        </div>
        <Theme/>
      </nav>
    </header>
  );
}
