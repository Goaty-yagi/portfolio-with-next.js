import { Button, Flex, Box, Text, ButtonGroup } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import AbstractSvg from "../../abstractSvg";

export default function Persist() {
  useEffect(() => {
    const offsetWidth = document.body.offsetWidth
    if(offsetWidth < 600) {
      setBaseTranslate(offsetWidth-100)
      setOffset(offsetWidth-100)
    }
  }, []);
  const [offset, setOffset] = useState(300);
  const [baseTranslate, setBaseTranslate] = useState(300)
  const [animations, setAnimations] = useState([]);
  const [persistOn, setPersistOn] = useState(false);
  const refs = useRef(null);
  const [update, setUpdate] = useState(false);
  const buttonFontSize = {
    fontSize:{base:'0.8rem', md:'1rem'},
    p:{base:'0.5rem', md:'1rem'}
  }

  function setAnimation() {
    const element = refs.current;
    const anime = element.animate(
      { transform: `translate(${baseTranslate + offset}%)` },
      { duration: 1000, fill: "forwards" }
    );
    setOffset((pre) => pre * -1);
    anime.cancel();
    anime.onremove = (e) => {
      setUpdate((pre) => !pre);
    };
    if (persistOn) {
      anime.persist();
    }
    setAnimations([...animations, anime]);
    anime.play();
  }
  return (
    <>
      <Flex flexDirection={"column"} m={"0.5rem"}>
        <AbstractSvg refs={refs} />
        <ButtonGroup gap={4}>
          <Button
          {...buttonFontSize}
            maxW={"100px"}
            alignSelf={"flex-start"}
            onClick={() => setPersistOn((pre) => !pre)}
          >
            persist{persistOn ? " on" : " off"}
          </Button>
          <Button  {...buttonFontSize} onClick={setAnimation}>Set Animation</Button>
          <Button  {...buttonFontSize} onClick={() => setAnimations([])}>Clear Animations</Button>
        </ButtonGroup>
        <Flex
          flexDirection={"column"}
          h={"200px"}
          m={"1rem"}
          flexWrap={"wrap"}
          overflowX={"auto"}
        >
          {animations.map((e, index) => (
            <Text key={index} m={"5px"}>
              {index + 1} {e.replaceState}
            </Text>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
