import { useRef, useState } from "react";
import styles from "/styles/components/nav.module.scss";
import { FiSun, FiMoon } from "react-icons/fi";
let themeClicked = false;

export default function Theme() {
  const [theme, setData] = useState();
  const show ={
    position: "absolute",
    opacity:100,
    transform: "translateY(0px)"
  }
  const hide = {
    position: "absolute",
    opacity:0,
    transform: "translateY(-30px)",
    pointerEvents: "none"
  }
  const themeHandler = () => {
    const className = themeClicked ? ".darkMain": ".main"
    const main = document.querySelector(className)
    themeClicked = !themeClicked;
    main.className = themeClicked ? "darkMain" : "main"
    const icon = themeClicked ? <FiMoon /> : <FiSun />;
    setData(icon);
  };
  return (
    <div className={styles.themeWapper}
      onClick={(e) => {
        e.preventDefault();
        themeHandler();
      }}>
        <div 
          className={styles.themeDark}
          style={themeClicked ? show : hide}>
          <FiMoon/>
        </div>
        <div 
          className={styles.theme}
          style={themeClicked ? hide : show}>
          <FiSun/>
        </div>
    </div>
  );
}