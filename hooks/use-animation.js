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
    easing: "",
    direction: "normal",
    fill: "",
    iterations: "",
    refs: useRef(null),
  });

  const { type, delay, easing, direction, fill, iterations, refs } = options;
  function optionConfigure(type, key, val) {
    setOptions({ ...options, type: type, [key]: val });
  }
  function animationHandler() {
    const element = refs.current;
    
    switch (type) {
      case optionTypes.EASING:
        console.log("EASING", type)
        element.animate(
          [{ left:0 }, { left: "85%" }],
          {
            easing:easing,
            duration: 1000,
            fill: "forwards",
            // iterations: ''
          }
        );
        break
        case optionTypes.DIRECTION:
          console.log("DIRECTION", type)
        element.animate(
          [{ left:0 }, { left: "85%" }],
          {
            easing:'linear',
            duration: 1000,
            fill: "forwards",
            direction:direction,
            iterations: 3
          }
        );
        break
        break
        case optionTypes.FILL:
          console.log("DIRECTION", type)
        element.animate(
          [{ left:0 }, { left: "85%" }],
          {
            easing:'linear',
            duration: 1000,
            fill: fill,
          }
        );
        break
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
