import AnimeTab from "../components/customTabs/animeTab";
import { useState, useMemo } from "react";
import { Box, Heading, Center } from "@chakra-ui/react";
import { optionTypes } from "../hooks/use-animation";
import { createContext } from "react";
import {
  Easing,
  Direction,
  Fill,
  Duration,
  Iterations,
  Delay,
  EndDelay,
  IterationStart,
} from "../components/animations";

export const AnimeContext = createContext(null);

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
  const [currentOption, setCurrentOption] = useState("easing");
  function set(val) {
    setCurrentOption(optionTypes[val]);
  }
  function tabHandler() {
    switch (currentOption) {
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
      case ITERATIONSTART:
        return <IterationStart />;
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
        <AnimeContext.Provider value={currentOption}>
          {tabHandler()}
        </AnimeContext.Provider>
      </Box>
    </>
  );
}
