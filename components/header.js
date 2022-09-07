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
        <div 
          style={{
            display:"flex"
          }}
        >
          {/* <a className={styles.navMenu}>
            <FaHome className={styles.menuLogo}/>
            HOME
          </a> */}
          <div className={styles.navMenu}>
            <div className={styles.darkHover}>
              <FaGithubAlt className={styles.menuLogo}/>
              SOURCE
            </div>
          </div>
          <div className={styles.navMenu}>
            <div className={styles.darkHover}>
              <AiOutlineLinkedin className={styles.menuLogo}/>
              LINKED_IN
            </div>
          </div>
          <div className={styles.navMenu}>
           <div className={styles.darkHover}>
              <ImBlog className={styles.menuLogo}/>
              POST
            </div>
          </div>
        </div>
        <Theme/>
      </nav>
    </header>
  );
}
