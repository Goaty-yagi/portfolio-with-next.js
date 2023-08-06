import { useEffect, useState } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import { useAnimation } from "../../hooks/use-animation";
import AbstractSvg from "./abstractSvg";
import AbstractTab from "../customTabs/abstractTab";

export default function Easing() {
  // const refs = useRef(null);
  const configs = [
    {
      name: "linear",
      types: ["General", "Linear"],
    },
    {
      name: "ease",
      types: ["General", "Cubic-bezier"],
    },
    {
      name: "ease-in",
      types: ["General", "Cubic-bezier"],
    },
    {
      name: "ease-out",
      types: ["General", "Cubic-bezier"],
    },
    {
      name: "ease-in-out",
      types: ["General", "Cubic-bezier"],
    },
    {
      name: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
      types: ["Cubic-bezier"],
    },
    {
      name: "linear(0,0.9,0.95,1)",
      types: ["Linear"],
    },
    {
      name: "linear(0,0.9,1)",
      types: ["Linear"],
    },
    {
      name: "steps(5, jump-none)",
      types: ["Steps"],
    },
    {
      name: "steps(5, start)",
      types: ["Steps"],
    },
    {
      name: "steps(5, end)",
      types: ["Steps"],
    },
  ];
  const tabs = ["General", "Linear", "Cubic-bezier", "Steps"];
  const [currentTab, setCurrentTab] = useState("General");
  const clicks = [];
  function animationStart() {
    clicks.forEach((f) => {
      f();
    });
  }
  function Each({ val }) {
    const { refs, optionConfigure, animationHandler } = useAnimation();
    useEffect(() => {
      optionConfigure("easing", "easing", val);
    }, []);
    clicks.push(animationHandler);
    return (
      <>
        <Box>
          <Button onClick={animationHandler}>{val}</Button>
          <AbstractSvg refs={refs} />
        </Box>
      </>
    );
  }
  return (
    <>
      <Box w="100%">
        <Center>
          <Button
            textAlign={"center"}
            colorScheme="teal"
            variant="solid"
            onClick={animationStart}
          >
            Start
          </Button>
        </Center>
        <Center mt={"2rem"}>
          <AbstractTab tabs={tabs} set={setCurrentTab} color="#62a6ab" />
        </Center>
        <Box mt={"3rem"}>
          {configs.map((e, index) => (
            <Box key={index}>
              {e.types.includes(currentTab) && <Each val={e.name} />}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
