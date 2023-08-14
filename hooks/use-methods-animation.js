import { useState, useEffect, useRef } from "react";

const methodTypes = {
  CANCEL: "cancel",
  FINISH: "finish",
  PAUSE: "pause",
  PLAY: "play",
  REVERSE: "reverse",
  COMMITSTYLES: "commitStyles",
  PERSISTS: "persist",
  UPDATEPLAYBACKRATE: "updatePlaybackRate",
};

function useMethodsAnimation(ref) {
  useEffect(() => {
    if (refs.current) {
      const anime = refs.current.animate(baseKeyframes, baseOptions)
      anime.cancel()
      setAnimeObj(anime)
    }
  }, []);
  const [currentType, setCurrentType] = useState(methodTypes.CANCEL);
  const [animeObj,setAnimeObj] = useState({})

  const refs = ref ? ref : useRef(null);
  const baseKeyframes = [{ left: 0 }, { left: "85%" }];
  const baseOptions = {
    easing: easing,
    duration: 1000,
    fill: "forwards",
  };
  function animationHandler() {

    switch (currentType) {
      case methodTypes.CANCEL:
        animeObj.cancel();
        break;
      case methodTypes.FINISH:
        animeObj.finish();
        break;
      case methodTypes.PAUSE:
        animeObj.pause();
        break;
      case methodTypes.PLAY:
        animeObj.play();
        break;
      case methodTypes.REVERSE:
        animeObj.reverse();
        break;
      case methodTypes.COMMITSTYLES:
        animeObj.commitStyles();
        break;
      case methodTypes.PERSISTS:
        animeObj.persist();
        break;
      case methodTypes.UPDATEPLAYBACKRATE:
        animeObj.updatePlaybackRate();
        break;
    }
  }

  return {
    currentType,
    refs,
    setCurrentType,
    animationHandler,
  };
}

export { methodTypes, useMethodsAnimation };
