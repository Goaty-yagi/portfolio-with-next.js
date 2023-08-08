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
  console.log("START", EASING);
  const [currentTab, setCurrentTab] = useState("easing");
  function setLowerCase(val) {
    setCurrentTab(val.toLowerCase());
  }
  function tabHandler() {
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
        <AnimeTab set={setLowerCase} />
        {tabHandler()}
      </Box>
    </>
  );
}
