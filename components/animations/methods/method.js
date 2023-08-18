import { memo } from "react";
import { useRef, useEffect, useState } from "react";
import AbstractSvg from "../abstractSvg";
import { monthColors } from "../../../styles/colors";
import { Button, Box, Text, Heading, Flex, Center } from "@chakra-ui/react";
import { MethodTab, OtherMethodTab } from "../../customTabs";
import { Persist, UpdatePlayback, CommitStyles } from "./types";
import firstLowerCase from "../../../lib/firstLowercase";
import { FillRadio } from "../../customRadios";
import { ExpandableAnimationWrapper } from "../../customWrappers";

export const methodTypes = {
  CANCEL: {
    name: "cancel",
    text: "The cancel() method clears all KeyframeEffects caused by this animation and aborts its playback.",
    subText:
      "When an animation is cancelled, its startTime and currentTime are set to null.",
  },
  FINISH: {
    name: "finish",
    text: `The finish() method sets the current playback time to the end of the animation corresponding to the current playback direction.

    That is, if the animation is playing forward, it sets the playback time to the length of the animation sequence, and if the animation is playing in reverse (having had its reverse() method called), it sets the playback time to 0.`,
  },
  PAUSE: {
    name: "pause",
    text: `The pause() method suspends playback of the animation.`,
  },
  PLAY: {
    name: "play",
    text: `The play() method starts or resumes playing of an animation. If the animation is finished, calling play() restarts the animation, playing it from the beginning.`,
  },
  REVERSE: {
    name: "reverse",
    text: `The Animation.reverse() method reverses the playback direction, meaning the animation ends at its beginning. If called on an unplayed animation, the whole animation is played backwards. If called on a paused animation, the animation will continue in reverse.`,
  },
  COMMITSTYLES: {
    name: "commitStyles",
    text: `The commitStyles() method writes the computed values of the animation's current styles into its target element's style attribute. commitStyles() works even if the animation has been automatically removed.`,
  },
  PERSIST: {
    name: "persist",
    text: `The persist() method explicitly persists an animation, preventing it from being automatically removed when it is replaced by another animation.`,
  },
  UPDATEPLAYBACKRATE: {
    name: "updatePlaybackRate",
    text: `The updatePlaybackRate() method sets the speed of an animation after first synchronizing its playback position. 
      updatePlaybackRate() is an asynchronous method that sets the speed of an animation after synchronizing with its current playback position, ensuring that the resulting change in speed does not produce a sharp jump. After calling updatePlaybackRate() the animation's playbackRate is not immediately updated. It will be updated once the animation's ready promise is resolved.`,
  },
};

function Method() {
  useEffect(() => {
    console.log("EFE");
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
  const refs = useRef(null);
  const expandWrapperRefs = useRef(null);
  const [animation, setAnimation] = useState({});
  const defaultText =
    "The Animation \n object defines the following animation control methods.";
  const [currents, setCurrents] = useState({
    text: methodTypes.CANCEL.text,
    subText: "",
    tab: "",
    component: "",
    fill: "none",
  });

  function setFill(val) {
    setCurrents({ ...currents, fill: val });
    const o = {
      duration: 1000,
      fill: val,
    };
    animation.effect.updateTiming(o);
  }
  const { text, subText, tab, component, fill } = currents;

  function setComponent(val) {
    const upper = val.toUpperCase();
    setCurrents({
      ...currents,
      component: firstLowerCase(val),
      text: methodTypes[upper].text,
      subText: methodTypes[upper].subText,
      tab: methodTypes[upper].name,
    });
  }

  const [animeObj, setAnimeObj] = useState({
    playbackRate: 0,
    playState: "",
  });

  const keyframs = [{ left: 0 }, { left: "85%" }];

  const [init, setInit] = useState(false);
  const options = {
    duration: 1000,
    fill: "none",
  };

  function playbackSetter(o) {
    if (!init) {
      click("UpdatePlaybackRate");
      setInit(true);
    }
    setAnimeObj({ ...currents, playbackRate: o });
    animation.updatePlaybackRate(o);
  }

  function setAnimationProperties(obj) {
    setAnimeObj({
      ...currents,
      playbackRate: obj.playbackRate,
      playState: obj.playState,
    });
  }
  function showComponent() {
    switch (component) {
      case methodTypes.COMMITSTYLES.name:
        return <CommitStyles />;
      case methodTypes.PERSIST.name:
        return <Persist refs={refs} animation={animation} />;
      case methodTypes.UPDATEPLAYBACKRATE.name:
        return (
          <UpdatePlayback option={animeObj.playbackRate} set={playbackSetter} />
        );
    }
  }
  function setCurrentTexts(val) {
    const upper = val.toUpperCase();
    setCurrents({
      ...currents,
      text: methodTypes[upper].text,
      subText: methodTypes[upper].subText,
      tab: methodTypes[upper].name,
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
      console.log(
        e.target.effect.getComputedTiming(),
        animation,
        animation.effect.getComputedTiming()
      );
      setAnimationProperties(animation);
    };
    switch (methodTypes[val.toUpperCase()].name) {
      case methodTypes.PLAY.name:
        console.dir(animation.effect);
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
      <Flex flexDirection={"column"} w={"100%"} alignItems={"center"}>
        <Heading as="h1" size="2xl">
          Methods
        </Heading>
        <Text as="h4" p={"0.5rem"}>
          {defaultText}
        </Text>
        <Flex
          w={"100%"}
          minH={"90px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          m={"1rem"}
          p={"0.5rem"}
        >
          {Object.keys(methodTypes).map((e) => (
            <Flex
              border={"solid gray"}
              fontWeight={"bold"}
              bg={"#c75c6fc4"}
              borderRadius={"10px"}
              p={1}
              m={1}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={{base:'0.8rem', md:'1rem'}}
            >
              {e}
            </Flex>
          ))}
        </Flex>
        <Box
          border={"solid gray"}
          borderRadius={"10px"}
          fontWeight={"bold"}
          w={"100%"}
          h={"100px"}
          overflow={"auto"}
          mb={"1rem"}
          p={"1rem"}
          resize={"vertical"}
        >
          {text}
          <Text color={"red"}> {subText}</Text>
        </Box>
        <Flex w={"100%"} alignItems={"center"}>
          <Flex w={{ base: "100%", md: "600px" }} justifyContent={"center"}>
            <ExpandableAnimationWrapper trigger={component === "persist"}>
              {/* {component !== methodTypes.PERSIST.name && ( */}
              <Center flexDirection={"column"}>
                <AbstractSvg
                  refs={refs}
                  // color={monthColors[Math.floor(Math.random() * monthColors.length)]}
                />
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
              </Center>
              {/* )} */}
            </ExpandableAnimationWrapper>
          </Flex>
        </Flex>
        <OtherMethodTab set={setComponent} />
        {showComponent()}
      </Flex>
    </>
  );
}
export default memo(Method);
