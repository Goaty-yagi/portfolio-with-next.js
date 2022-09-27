import { useRef, useState } from "react";
import styles from "/styles/components/nav.module.scss";
import { FiSun, FiMoon } from "react-icons/fi";
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
let themeClicked = true;


export default function Theme() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("rgb(255, 235, 197)","purple.500")
  const hover = useColorModeValue({bg:"orange", color:"white"}, {bg:"purple"})
  const [theme, setData] = useState();
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0},
    exit: {  x: 0, y: 20 },
  };
  const show = {
    position: "absolute",
    opacity: 1,
    transform: "translateY(0px)",
  };
  const hide = {
    position: "absolute",
    opacity: 0,
    transform: "translateY(-30px)",
    pointerEvents: "none",
  };
  const themeHandler = () => {    
    toggleColorMode()

    const className = themeClicked ? ".darkMain" : ".main";
    // const main = document.querySelector(className);
    // themeClicked = !themeClicked;
    // main.className = themeClicked ? "darkMain" : "main";
    const icon = themeClicked ? <FiMoon /> : <FiSun />;
    setData(icon);
  };
  return (
    <Box
      position="absolute"
      right="45px"
      top="0"
      // className={styles.themeWapper}
      onClick={(e) => {
        e.preventDefault();
        themeHandler();
      }}
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={useColorModeValue('light', 'dark')} // animation doesn't work without key. why??
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Box
            borderRadius={"0.4rem"}
            p="0.47rem"
            fontSize={"1.5rem"}
            transition=".5s"
            bg={bg}
            _hover={hover}
            >
          {colorMode === "light" ? (
              <FiSun />
            ) : (
              <FiMoon/>
            )}
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
