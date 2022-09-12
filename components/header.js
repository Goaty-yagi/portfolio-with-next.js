import { useState, useEffect } from "react";
import styles from "/styles/components/nav.module.scss";
import { FaHome, FaGithubAlt } from "react-icons/fa";
import { GiFishbone, GiVintageRobot, GiHamburgerMenu } from "react-icons/Gi";
// import { AiOutlineLinkedin } from "react-icons/Ai";
import { ImBlog } from "react-icons/im";

import Link from "next/link";
import Theme from "./theme";


export default function Header() {
  const sourceUrl = "https://github.com/Goaty-yagi/portfolio-with-next.js"
  const goToSource = () => {
    window.open(sourceUrl)
  }
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <a><div className={styles.boneIcon}><GiFishbone/></div><span>NOBUHIRO</span></a>
          </Link>
        </div>
        <div className={styles.mobileWrapper}>
          <div className={styles.hamburger}>
            <GiHamburgerMenu/>
          </div>
          <div className={styles.navMenyContainer}>
            <div className={styles.navMenu}
              onClick={goToSource}>
              <div className={styles.darkHover}>
                <FaGithubAlt className={styles.menuLogo}/>
                SOURCE
              </div>
            </div>
            <Link href="/project">
              <div className={styles.navMenu}>
                <div className={styles.darkHover}>
                  <GiVintageRobot className={styles.menuLogo}/>
                  PROJECTS
                </div>
              </div>
            </Link>
            <Link href={"/post"}>
              <div className={styles.navMenu}>
                <div className={styles.darkHover}>
                    <ImBlog className={styles.menuLogo}/>
                    POST
                </div>
              </div>
            </Link>
          </div>
          <Theme/>
        </div>
      </nav>
    </header>
  );
}
