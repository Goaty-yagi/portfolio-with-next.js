import EffectTiming from "../components/animations/effectTimings/effectTiming";
import Method from "../components/animations/methods/method";
import { AnimationApiTab } from "../components/customTabs";
import { useEffect, useState, useRef } from "react";
import { Box } from "@chakra-ui/react";

export default function Animatios() {
  const [currentOption, setCurrentOption] = useState("effect-timing");
  const tabs = ["properties", "effect-timing", "methods", "steps"];
  function tabHandler() {
    console.log(currentOption, 'MO')
    switch (currentOption.toLocaleLowerCase()) {
      case "effect-timing":
        return <EffectTiming />;
      case "methods":
        return <Method />;
    }
  }
  return (
    <Box w={'100%'}>
      <AnimationApiTab set={setCurrentOption} />
      {tabHandler()}
    </Box>
  );
}
