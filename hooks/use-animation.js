import { useState, useEffect, useRef, forwardRef } from "react";

const optionTypes = {
  DEYAL: "delay",
  DIRECTION: "direction",
  DURATION: "duration",
  EASING: "easing",
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
    type: "unko",
    delay: "",
    easing: "",
    direction: "",
    fill: "",
    iterations: "",
    refs: useRef(null),
  });

  const { type, delay, easing, direction, fill, iterations, refs } = options;
  function optionConfigure(type, key, val) {
    setOptions({ ...options, type: type, [key]: val });
  }
  function animationHandler() {
    // console.log("CLICK", totalLength, pathRefs);
    // const length = pathRefs.current.getTotalLength();
    console.log(type, easing)
    console.log(refs.current)
    const element = refs.current;
    switch (type) {
      case optionTypes.EASING:
        element.animate(
          [{ transform: "translateX(0%)" }, { transform: "translateX(100%)" }],
          {
            easing:easing,
            duration: 1000,
            fill: "forwards",
            // iterations: ''
          }
        );
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
