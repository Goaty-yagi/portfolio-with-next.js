import AnimeTab from "../components/customTabs/animeTab";
import { useState, useMemo } from "react";
import { Box, Heading, Center } from "@chakra-ui/react";
import { optionTypes } from "../hooks/use-animation";
import {
  Easing,
  Direction,
  Fill,
  Duration,
  Iterations,
  Delay,
  EndDelay
} from "../components/animations";

export default function Animatios() {
  const {
    DELAY,
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
  const [currentTab, setCurrentTab] = useState("easing");
  function set(val) {
    
    setCurrentTab(optionTypes[val]);
  }
  function tabHandler() {
    console.log("CURRENT", currentTab)
    switch (currentTab) {
      case EASING:
        return <Easing />;
      case DIRECTION:
        return <Direction />;
      case FILL:
        return <Fill />;
      case DURATION:
        return <Duration />;
      case ITERATIONS:
        return <Iterations />;
      case DELAY:
        return <Delay />;
      case ENDDELAY:
        return <EndDelay />;
    }
  }
  return (
    <>
      <Box maxW={"800px"}>
        <Center>
          <Heading as="h1" size="2xl">
            EffectTiming
          </Heading>
        </Center>
        <AnimeTab set={set} />
        {tabHandler()}
      </Box>
    </>
  );
}
