import Easing from "../components/animations/easing";
import AnimeTab from "../components/customTabs/animeTab";
import { useState, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import { optionTypes } from "../hooks/use-animation";

export default function Animatios() {
  const {
    DEYAL,
    DIRECTION,
    DURATION,
    EASING,
    ENDDELAY,
    FILL,
    ITERATIONSTART,
    ITERATIONS,
    COMPOSITE,
    ITERATIONCOMPOSITE,
    PSEUDOELEMENT,
  } = optionTypes;
  console.log("START", EASING);
  const [currentTab, setCurrentTab] = useState("easing");
  function setLowerCase(val) {
    setCurrentTab(val.toLowerCase());
  }
  function tabHandler() {
    switch (currentTab) {
      case EASING:
        return <Easing />;
        break;
    }
  }
  return (
    <>
      <Box maxW={"800px"}>
        <AnimeTab set={setLowerCase} />
        {tabHandler()}
      </Box>
    </>
  );
}
