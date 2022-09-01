import styles from "/styles/nav.module.scss"
import { FaHome, FaRegSun } from "react-icons/fa"
import Link from "next/link"

// import styles from "/styles/Home.module.scss"
export default function Header() {
    return(
        <header>
            <nav className={styles.nav}>
                <div className={styles.logo}>LOGO</div>
                <div>
                    <a className={styles.navMenu}><FaHome/>HOME</a>
                    <Link href="/github">
                        <a className={styles.navMenu}>WORK</a></Link>
                    <a className={styles.navMenu}>POST</a>
                </div>
                <div className={styles.theme}>
                    <FaRegSun/>
                </div>
            </nav>
        </header>
    )
}