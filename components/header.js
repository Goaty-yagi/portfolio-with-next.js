import { useState, useEffect } from "react";
import styles from "/styles/components/nav.module.scss";
import { FaHome, FaGithubAlt } from "react-icons/fa";
import { GiFishbone } from "react-icons/Gi";
import { AiOutlineLinkedin } from "react-icons/Ai";
import { ImBlog } from "react-icons/im";

import Link from "next/link";
import Theme from "./theme";

export default function Header() {

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <a><div className={styles.boneIcon}><GiFishbone/></div><span>NOBUHIRO</span></a>
          </Link>
        </div>
        <div>
          {/* <a className={styles.navMenu}>
            <FaHome className={styles.menuLogo}/>
            HOME
          </a> */}
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
