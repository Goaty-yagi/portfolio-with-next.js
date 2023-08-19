import AbstractSvg from "../../abstractSvg";
import { Center, Flex, Box, Text, Button } from "@chakra-ui/react";
import { methodTypes } from "../method";
import { useEffect, useState, useRef } from "react";
import { FillRadio } from "../../../customRadios";
import { MethodTab } from "../../../customTabs";
import UpdatePlayback from "./updatePlayback";

export default function Default({
  fill,
  currents,
  setCurrentTexts,
  setCurrents,
  animeObj,
  setAnimeObj,
}) {
  useEffect(() => {
    setBaseAnimation();
  }, []);

  function setBaseAnimation({ k, o } = {}) {
    if (refs.current) {
      const anime = refs.current.animate(k ? k : keyframs, o ? o : options);
      anime.cancel();
      setAnimation(anime);
      setAnimationProperties(anime);
    }
  }
  const keyframs = [{ left: 0 }, { left: "85%" }];

  const options = {
    duration: 1000,
    fill: "none",
  };
  const [init, setInit] = useState(false);

  function playbackSetter(o) {
    if (!init) {
      click("UpdatePlaybackRate");
      setInit(true);
    }
    setAnimeObj({ ...currents, playbackRate: o });
    animation.updatePlaybackRate(o);
  }

  const refs = useRef(null);
  const [animation, setAnimation] = useState({});

  function setFill(val) {
    setCurrents({ ...currents, fill: val });
    const o = {
      duration: 1000,
      fill: val,
    };
    animation.effect.updateTiming(o);
  }
  function setAnimationProperties(obj) {
    setAnimeObj({
      ...currents,
      playbackRate: obj.playbackRate,
      playState: obj.playState,
    });
  }

  function reset() {
    (animation.playbackRate = 1), animation.cancel();
    setAnimeObj({ ...animeObj, playbackRate: 0 });
    setCurrents({ ...currents, fill: "none" });
    animation.effect.updateTiming({ fill: "none" });
  }
  function click(val) {
    setCurrentTexts(val);
    animation.onfinish = (e) => {
      setAnimationProperties(animation);
    };
    switch (methodTypes[val.toUpperCase()].name) {
      case methodTypes.PLAY.name:
        animation.play();
        break;
      case methodTypes.PAUSE.name:
        animation.pause();
        break;
      case methodTypes.FINISH.name:
        animation.finish();
        break;
      case methodTypes.CANCEL.name:
        animation.cancel();
        break;
      case methodTypes.REVERSE.name:
        animation.reverse();
        break;
    }
  }
  return (
    <>
      <Center flexDirection={"column"}>
        <AbstractSvg refs={refs} />
        <Flex
          justifyContent={"space-between"}
          w={"80%"}
          m={"1rem"}
          alignItems={"center"}
          p={"1rem"}
          bg={"#5f4d61c7"}
          borderRadius={"10px"}
          border={"solid #ca6666"}
        >
          <Box textAlign={"left"}>
            <Text>playState : {animation.playState}</Text>
            <Text>playbackRate : {animation.playbackRate}</Text>
            <Text>fill : {fill}</Text>
          </Box>
          <Button onClick={reset}>RESET</Button>
        </Flex>
        <FillRadio set={setFill} option={fill} />
        <MethodTab set={click} />
        <UpdatePlayback option={animeObj.playbackRate} set={playbackSetter} />
      </Center>
    </>
  );
}
