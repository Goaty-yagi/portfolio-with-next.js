import { Button, Flex, Box, Text, ButtonGroup } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import AbstractSvg from "../../abstractSvg";

export default function CommitStyles() {
  const fillRefs = useRef(null);
  const commitRefs = useRef(null);
  const [offset1, setOffset1] = useState(400);
  const [offset2, setOffset2] = useState(400);
  const [baseTranslate, setBaseTranslate] = useState(400);
  const [update, setUpdate] = useState(false);

  const [fillAnimation, setFillAnimation] = useState({});
  const [commitAnimation, setCommitAnimation] = useState({});

  useEffect(() => {
    const offsetWidth = document.body.offsetWidth;
    if (offsetWidth < 600) {
      setBaseTranslate(offsetWidth - 70);
      setOffset1(offsetWidth - 70);
      setOffset2(offsetWidth - 70);
    }
  }, []);

  async function setAnimation(index) {
    const element = index ? commitRefs.current : fillRefs.current;
    const offset = index ? offset1 : offset2;
    const anime = element.animate(
      { transform: `translate(${baseTranslate + offset}%)` },
      { duration: 1000, fill: "forwards" }
    );
    if (index === 1) {
      setOffset1((pre) => pre * -1);
    } else {
      setOffset2((pre) => pre * -1);
    }
    anime.cancel();
    anime.onfinish = (e) => {
      setUpdate((pre) => !pre);
    };
    anime.play();
    if (index) {
      setCommitAnimation(anime);
      await anime.finished;
      anime.commitStyles();
      anime.cancel();
    } else {
      setFillAnimation(anime);
    }
  }
  return (
    <>
      <Box w={"100%"} p={"0.3rem"}>
        <Text fontWeight={"bold"}>Fill</Text>
        <AbstractSvg refs={fillRefs} />
        <Flex w={"100%"}>
          <Button onClick={() => setAnimation(0)} border={'solid #94091E'}>Start</Button>
          <Flex ml={"1rem"} flexDir={"column"}>
            <Text>PlayState : {fillAnimation.playState}</Text>
            <Text>Fill : forwards</Text>
          </Flex>
        </Flex>
      </Box>
      <Box w={"100%"} mt={"1rem"} p={"0.3rem"}>
        <Text fontWeight={"bold"}>CommitStyle</Text>
        <AbstractSvg refs={commitRefs} />
        <Flex>
          <Button onClick={() => setAnimation(1)} border={'solid #94091E'}>Start</Button>
          <Flex ml={"1rem"} flexDir={"column"}>
            <Text>PlayState :  {commitAnimation.playState}</Text>
            <Text>Fill : forwards</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
