import { useState, useEffect } from "react";
import styles from "/styles/components/nav.module.scss";
import { FaHome, FaGithubAlt } from "react-icons/fa";
import { GiFishbone, GiVintageRobot, GiHamburgerMenu } from "react-icons/Gi";
// import { AiOutlineLinkedin } from "react-icons/Ai";
import { ImBlog } from "react-icons/im";
import { motion } from "framer-motion";

import Link from "next/link";
import Theme from "./theme";
import { useRouter } from "next/router";

export default function Header() {
  const sourceUrl = "https://github.com/Goaty-yagi/portfolio-with-next.js";
  const [isOpen, setIsOpen] = useState(false);
  const openBuger = styles.open;
  const closeBurger = styles.close;
  const [menuClass, setMenuClass] = useState();
  const goToSource = () => {
    window.open(sourceUrl);
  };
  function isOpnehandler() {
    console.log("clicked");
    setIsOpen(!isOpen);
    setMenuClass(!isOpen ? openBuger : '');
  }
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setIsOpen(false)
      setMenuClass();
      console.log(isOpen,menuClass)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  function HamburgerMenu() {
    // let burgerVariants;
    // let innerHeight;
    // if (typeof window !== "undefined") {
    //   innerHeight = window.innerWidth;
    // }
    // console.log(innerHeight);
    // if (innerHeight > 750) {
    //   burgerVariants = {
    //     hidden: {},
    //     visible: {},
    //   };
    // } else {
      // const burgerVariants = {
      //   hidden: {
      //     x: isOpen ? 200 : 0,
      //     opacity: isOpen ? 0 : 1,
      //   },
      //   visible: {
      //     x: isOpen ? 0 : 200,
      //     opacity: isOpen ? 1 : 0,
      //   },
      // };
    // }
    return (
      <div
        className={`${styles.navMenuContainer} ${menuClass}`}
      >
        <div className={styles.navMenu} onClick={goToSource}>
          <div className={styles.darkHover}>
            <FaGithubAlt className={styles.menuLogo} />
            SOURCE
          </div>
        </div>
        <Link href="/project">
          <div className={styles.navMenu}>
            <div className={styles.darkHover}>
              <GiVintageRobot className={styles.menuLogo} />
              PROJECTS
            </div>
          </div>
        </Link>
        <Link href={"/post"}>
          <div className={styles.navMenu}>
            <div className={styles.darkHover}>
              <ImBlog className={styles.menuLogo} />
              POST
            </div>
          </div>
        </Link>
      </div>
    );
  }
  function HamburgerMenuContainer() {

  }
  // className={`${styles.hamburger} ${isOpen} ? ${styles.open}: ${styles.close}`}
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <div className={styles.boneIcon}>
                <GiFishbone />
              </div>
              <span>NOBUHIRO</span>
            </a>
          </Link>
        </div>
        <div className={styles.mobileWrapper}>
          <div onClick={isOpnehandler} className={styles.hamburger}>
            <GiHamburgerMenu />
          </div>
          <div>
            <HamburgerMenu />
          </div>
          <Theme />
        </div>
      </nav>
    </header>
  );
}
