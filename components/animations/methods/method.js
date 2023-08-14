import { memo } from "react";
import { useRef, useEffect, useState } from "react";
import AbstractSvg from "../abstractSvg";
import { monthColors } from "../../../styles/colors";
import { Button, Box, Text, Heading, Flex } from "@chakra-ui/react";
import { MethodTab, OtherMethodTab } from "../../customTabs";
import { Persist, UpdatePlayback, CommitStyles } from "./types";
import UpdatePlaybackRateRadio from "../../customRadios/updatePlaybackrateRadio";
import firstLowerCase from "../../../lib/firstLowercase";
import { FillRadio } from "../../customRadios";

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
    console.log("EFE")
    setBaseAnimation()
  }, []);

  function setBaseAnimation({k, o}={}) {
    if (refs.current) {
      const anime = refs.current.animate(k?k:keyframs, o?o:options);
      anime.cancel();
      setAnimation(anime);
      setAnimations([...animations, anime]);
      setAnimationProperties(anime);
    }
  }
  const refs = useRef(null);
  const [animation, setAnimation] = useState({});
  const [animations, setAnimations] = useState([]);
  const defaultText =
    "The Animation \n object defines the following animation control methods.";
  const [currents, setCurrents] = useState({
    text: defaultText,
    subText: "",
    tab: "",
    component: "",
    fill:'none'
  });

  function setFill(val) {
    setCurrents({...currents, fill:val})
    const o={
      duration:1000,
      fill:val,
    }
    animation.effect.updateTiming(o);
  }
  const { text, subText, tab, component, fill } = currents;
  function setComponent(val) {
    const upper = val.toUpperCase()
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
  const keyframs = [
    { left: 0 },
    { transform: "rotateY(180deg)" },
    { left: "85%" },
  ];
  const [init, setInit] = useState(false);
  const options = {
    duration:1000,
    fill:'none',
  } 

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
  function ShowComponent() {
    switch (component) {
      case others.COMMITSTYLES.name:
        return <CommitStyles />;
      case others.PERSIST.name:
        return <Persist />;
      case others.UPDATEPLAYBACKRATE.name:
        return <UpdatePlayback />;
      default:
        return <>UNKO{component}</>;
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
    animation.playbackRate=1,
    animation.cancel()
    setAnimeObj({...animeObj, playbackRate:0})
    setCurrents({...currents, fill:'none'})
    animation.effect.updateTiming({ fill: 'none' });
  }
  function click(val) {
    // if (!init && methodTypes[upperVal].name === methodTypes.PLAY.name) {
    //   console.log("INIT")
    //   setAnimation(refs.current.animate(keyframs, options(1000)));
    //   setInit(true);
    //   animation.id= 'initial'
    // }
    setCurrentTexts(val);
    animation.onremove = (e) => {
      console.log("removed", animation);
    };
    animation.oncancel = (e) => {
      console.log("canceled", animation);
    };
    animation.onfinish = (e) => {
      console.log(e.target.effect.getComputedTiming(),console.log(animations), animation,animation.effect.getComputedTiming());
      setAnimationProperties(animation);
    };
    switch (methodTypes[val.toUpperCase()].name) {
      case methodTypes.PLAY.name:
        console.log("play", animation.effect.getComputedTiming());
        console.dir(animation.effect);
        animation.play();
        break;
      case methodTypes.PAUSE.name:
        console.log("PAYSE");
        animation.pause();
        break;
      case methodTypes.FINISH.name:
        console.log("FINISH");
        animation.finish();
        break;
      case methodTypes.CANCEL.name:
        console.log("CANCEL");
        animation.cancel();
        break;
      case methodTypes.REVERSE.name:
        animation.reverse();
        // animation.cancel()
        console.log(animation);
        break;
      case methodTypes.COMMITSTYLES.name:
        animations.forEach((e) => {
          console.log("e", e);
          e.play();
        });
        break;
      case methodTypes.PERSIST.name:
        console.log("PER")
        const persist = refs.current.animate(
          [{ left: 0 }, { transform: "scale(2.5)" }, { left: "85%" }],
          {
            duration: 1000,
            fill: "forwards",
            iterations: 2,
            // composite:'add'
          }
        );
        // persist.cancel();
        persist.id = "persist";
        setAnimation(persist);
        console.log(animation);
        // animation.persist();
        setAnimations([...animations, persist]);
        break;
      // case methodTypes.UPDATEPLAYBACKRATE.name:
      //     console.log(typeof currents.playbackRate)
      //     animation.updatePlaybackRate(currents.playbackRate);
      //     break;
    }
    // setAnimationProperties(animation)
    console.log(currents.tab);
  }
  return (
    <>
      <Flex flexDirection={"column"} w={"100%"} alignItems={"center"}>
        <Heading as="h1" size="2xl">
          Methods
        </Heading>
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
        <AbstractSvg
          refs={refs}
          //   color={monthColors[Math.floor(Math.random() * monthColors.length)]}
        />
        {/* <ShowComponent/> */}
        <Box>
          <Box textAlign={"center"}>
            <Text>playState : {animation.playState}</Text>
            <Text>playbackRate : {animation.playbackRate}</Text>
            <Text>fill : {fill}</Text>
            <Button onClick={reset}>RESET</Button>
          </Box>
          <FillRadio set={setFill} option={fill}/>
          <MethodTab set={click} />
          <OtherMethodTab set={setComponent} />
        </Box>
        {component === methodTypes.UPDATEPLAYBACKRATE.name && (
          <UpdatePlaybackRateRadio
            option={animeObj.playbackRate}
            set={playbackSetter}
          />
          // {currents.playbackRate}
        )}
      </Flex>
    </>
  );
}
export default memo(Method);
