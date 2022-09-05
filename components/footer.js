import styles from "/styles/components/footer.module.scss";
import Link from "next/link";

export default function Footer() {
  const copyLight = "© 2022 Nobuhiro. All Rights Reserved."
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h4>{copyLight}</h4>
      </div>
    </footer>
  );
}
