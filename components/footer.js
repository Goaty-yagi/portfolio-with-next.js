import styles from "/styles/components/footer.module.scss";
import { BsLinkedin } from "react-icons/Bs";

export default function Footer() {
  const copyLight = "© 2022 Nobuhiro. All Rights Reserved."
  const goToLinkedin = () => {
    const url = "https://www.linkedin.com/in/nobuhiro-funahashi-1b725322b/"
    window.open(url)
  }
  return (
    <footer className={styles.footer}>
      {/* <BsLinkedin/> */}
      <div className={styles.footerContainer}>
        <div className={styles.linkedinIcon}>
          <BsLinkedin
            className={styles.icon}
            onClick={goToLinkedin}/>
        </div>
        <h4>{copyLight}</h4>
      </div>
    </footer>
  );
}
