import { memo } from "react";
import { useState } from "react";
import { Box, Text, Heading, Flex, Tooltip } from "@chakra-ui/react";
import { OtherMethodTab } from "../../customTabs";
import { Persist, CommitStyles } from "./types";
import firstLowerCase from "../../../utils/firstLowercase";
import Default from "./types/default";
import { SlideAnimatioWrapper } from "../../customWrappers";

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
  UPDATEPLAYBACKRATE: {
    name: "updatePlaybackRate",
    text: `The updatePlaybackRate() method sets the speed of an animation after first synchronizing its playback position. 
      updatePlaybackRate() is an asynchronous method that sets the speed of an animation after synchronizing with its current playback position, ensuring that the resulting change in speed does not produce a sharp jump. After calling updatePlaybackRate() the animation's playbackRate is not immediately updated. It will be updated once the animation's ready promise is resolved.`,
  },
  PERSIST: {
    name: "persist",
    text: `The persist() method explicitly persists an animation, preventing it from being automatically removed when it is replaced by another animation.`,
  },
  COMMITSTYLES: {
    name: "commitStyles",
    text: `The commitStyles() method writes the computed values of the animation's current styles into its target element's style attribute. commitStyles() works even if the animation has been automatically removed.`,
    subText: `commitStyles() can be used in combination with fill to cause the final state of an animation to persist after the animation ends. The same effect could be achieved with fill alone, but using indefinitely filling animations is discouraged. Animations take precedence over all static styles, so an indefinite filling animation can prevent the target element from ever being styled normally.`,
  },
};

function Method() {
  const defaultText =
    "The Animation object defines the following animation control methods.";
  const [currents, setCurrents] = useState({
    text: methodTypes.CANCEL.text,
    subText: "",
    component: "updatePlaybackRate",
    fill: "none",
  });

  const { text, subText, component, fill } = currents;

  function setComponent(val) {
    const upper = val.toUpperCase();
    setCurrents({
      ...currents,
      component: firstLowerCase(val),
      text: methodTypes[upper].text,
      subText: methodTypes[upper].subText,
    });
  }

  const [animeObj, setAnimeObj] = useState({
    playbackRate: 0,
    playState: "",
  });

  function showComponent() {
    switch (component) {
      case methodTypes.COMMITSTYLES.name:
        return <CommitStyles />;
      case methodTypes.PERSIST.name:
        return <Persist />;
      case methodTypes.UPDATEPLAYBACKRATE.name:
        return (
          <Default
            fill={fill}
            currents={currents}
            setCurrentTexts={setCurrentTexts}
            setCurrents={setCurrents}
            animeObj={animeObj}
            setAnimeObj={setAnimeObj}
          />
        );
    }
  }
  function setCurrentTexts(val) {
    const upper = val.toUpperCase();
    setCurrents({
      ...currents,
      text: methodTypes[upper].text,
      subText: methodTypes[upper].subText,
    });
  }
  return (
    <>
      <Flex flexDirection={"column"} w={"100%"} alignItems={"center"}>
        <Heading as="h1" size="2xl">
          Methods
        </Heading>
        <Text textAlign={"center"} as="h4" p={"0.5rem"}>
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
          {Object.keys(methodTypes).map((e, index) => (
            <Flex
              key={index}
              border={"solid gray"}
              fontWeight={"bold"}
              bg={"#c75c6fc4"}
              borderRadius={"10px"}
              p={1}
              m={1}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={{ base: "0.8rem", md: "1rem" }}
            >
              {e}
            </Flex>
          ))}
        </Flex>
        <Tooltip
          label="Resizable"
          bg="gray.300"
          color="black"
          placement="bottom-end"
        >
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
            <Text mt={"0.5rem"}> {subText}</Text>
          </Box>
        </Tooltip>
        <OtherMethodTab set={setComponent} />
        <SlideAnimatioWrapper id={component}>
          {showComponent()}
        </SlideAnimatioWrapper>
      </Flex>
    </>
  );
}
export default memo(Method);
