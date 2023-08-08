import { useState, useEffect, useRef, forwardRef } from "react";

const optionTypes = {
  EASING: "easing",
  DEYAL: "delay",
  DIRECTION: "direction",
  DURATION: "duration",
  ENDDELAY: "endDelay",
  FILL: "fill",
  ITERATIONSTART: "iterationStart",
  ITERATIONS: "iterations",
  COMPOSITE: "composite",
  ITERATIONCOMPOSITE: "iterationComposite",
  PSEUDOELEMENT: "pseudoElement",
};

function useAnimation() {
  const [options, setOptions] = useState({
    type: "",
    delay: "",
    duration:0,
    easing: "",
    direction: "normal",
    fill: "",
    iterations: "",
    refs: useRef(null),
  });

  const { type, delay, easing, duration, direction, fill, iterations, refs } = options;
  function optionConfigure(type, key, val) {
    setOptions({ ...options, type: type, [key]: val });
  }
  function animationHandler() {
    const element = refs.current;
    const baseAnimation = [{ left: 0 }, { left: "85%" }]
    switch (type) {
      case optionTypes.EASING:
        element.animate([{ left: 0 }, { left: "85%" }], {
          easing: easing,
          duration: 1000,
          fill: "forwards",
          // iterations: ''
        });
        break;
      case optionTypes.DIRECTION:
        element.animate([{ left: 0 }, { left: "85%" }], {
          easing: "linear",
          duration: 1000,
          fill: "forwards",
          direction: direction,
          iterations: 3,
        });
        break;
      case optionTypes.FILL:
        element.animate([{ left: 0 }, { left: "85%" }], {
          easing: "linear",
          duration: 1000,
          fill: fill,
        });
        break;
        case optionTypes.DURATION:
        element.animate(baseAnimation, {
          easing: "linear",
          duration: duration,
          fill: "forwards",
        });
        break;
    }
    // refs.current.animate(
    //   [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
    //   {
    //     // sync options
    //     duration: 2000,
    //     // fill:"forwards"
    //     // iterations: ''
    //   }
    // );
  }

  return {
    type,
    delay,
    easing,
    direction,
    fill,
    iterations,
    refs,
    optionConfigure,
    animationHandler,
  };
}

export { useAnimation, optionTypes };
