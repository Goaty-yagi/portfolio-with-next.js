import { AnimeTab } from "../../customTabs";
import { useState } from "react";
import { Box, Heading, Center } from "@chakra-ui/react";
import { optionTypes } from "../../../hooks/use-animation";
import {
  Easing,
  Direction,
  Fill,
  Duration,
  Iterations,
  Delay,
  EndDelay,
  IterationStart,
  Composite,
  IterationComposite,
  PseudoElement,
}  from './types' 




export default function EffectTiming() {
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
      case COMPOSITE:
        return <Composite />;
      case ITERATIONCOMPOSITE:
        return <IterationComposite />;
      case PSEUDOELEMENT:
        return <PseudoElement />;
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
