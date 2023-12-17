import { useState, useEffect } from "react";
import { createContext } from "react";

export const GlobalContext = createContext(null);

export default function Provider({ children }) {
  const [currentH, setCurrentH] = useState(0);
  const [currentW, setCurrentW] = useState(0);

  useEffect(() => {
    function setHW() {
      setCurrentH(window.innerHeight);
      setCurrentW(window.innerWidth);
    }

    setHW();
    window.addEventListener("resize", setHW);
    return () => window.removeEventListener("resize", setHW);
  }, []);

  return (
    <GlobalContext.Provider value={{ currentH: currentH, currentW: currentW }}>
      {children}
    </GlobalContext.Provider>
  );
}
