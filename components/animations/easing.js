import Image from "next/image";
import { useEffect, useRef } from "react";
import { Box, Flex, Button, Text, Center } from "@chakra-ui/react";
import { useAnimation } from "../../hooks/use-animation";
import AbstractSvg from "./abstractSvg";
import AbstractTab from "../customTabs/abstractTab";


export default function Easing() {
  // const refs = useRef(null);
  const configs = [
    "linear",
    "ease",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    "linear(0,0.9,0.95,1)",
    "linear(0,0.9,1)",
    "steps(5, jump-none)",
    "steps(5, start)",
    "steps(5, end)"
  ];
  const tabs = ['General','Linear', 'cubic-bezier', 'steps']
  const clicks = [];
  function animationStart() {
    clicks.forEach((f) => {
      f();
    });
  }
  // function animationHandler() {
  //   refs.current.animate(
  //       [{ transform: 'translateX(0%)' }, { transform: 'translateX(100%)' }],
  //       {
  //         // sync options
  //         duration: 1000,
  //         fill:"forwards"
  //         // iterations: ''
  //       }
  //   );
  // }
  function Each({ val }) {
    const {
      refs,
      optionConfigure,
      animationHandler,
    } = useAnimation();
    useEffect(() => {
      console.log("OP", optionConfigure);
      optionConfigure("easing", "easing", val);
    }, []);
    // console.log(clicks, Array.isArray(clicks))
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
        <Center mt={'2rem'}>
        <AbstractTab tabs={tabs} color='#62a6ab'/>
        </Center>
        <Box mt={"3rem"}>
          {configs.map((e, index) => (
            <Box key={index}>
              <Each val={e} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
