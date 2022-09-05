import { useState } from "react";
import styles from "/styles/components/nav.module.scss";
import { FiSun, FiMoon } from "react-icons/fi";

let themeClicked = false;

export default function Theme() {
  let markup = <FiSun />;
  const [theme, setData] = useState(markup);

  const themeHandler = () => {
    const className = themeClicked ? ".darkMain": ".main"
    const main = document.querySelector(className)
    themeClicked = !themeClicked;
    main.className = themeClicked ? "darkMain" : "main"
    const icon = themeClicked ? <FiMoon /> : <FiSun />;
    setData(icon);
  };
  return (
    <div className={styles.themeWapper}>
      <div
        onClick={(e) => {
          e.preventDefault();
          themeHandler();
        }}
        className={themeClicked ? styles.themeDark : styles.theme}
      >
        {theme}
      </div>
    </div>
  );
}
