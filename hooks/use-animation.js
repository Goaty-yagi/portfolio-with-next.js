import { useState, useEffect, useRef, forwardRef } from "react";

const optionTypes = {
  EASING: "easing",
  DELAY: "delay",
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
    delay: 0,
    endDelay: 0,
    duration: 0,
    easing: "",
    direction: "normal",
    fill: "",
    iterations: 1,
    refs: useRef(null),
  });

  const {
    type,
    delay,
    easing,
    endDelay,
    duration,
    direction,
    fill,
    iterations,
    refs,
  } = options;
  function optionConfigure(type, key, val) {
    setOptions({ ...options, type: type, [key]: val });
  }
  function animationHandler() {
    const element = refs.current;
    const baseAnimation = [{ left: 0 }, { left: "85%" }];

    switch (type) {
      case optionTypes.EASING:
        element.animate(baseAnimation, {
          easing: easing,
          duration: 1000,
          fill: "forwards",
        }).onfinish = () => {};
        break;
      case optionTypes.DIRECTION:
        element.animate(baseAnimation, {
          easing: "linear",
          duration: 1000,
          fill: "forwards",
          direction: direction,
          iterations: 3,
        });
        break;
      case optionTypes.FILL:
        element.animate(baseAnimation, {
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
      case optionTypes.ITERATIONS:
        element.animate(baseAnimation, {
          easing: "linear",
          duration: 1000,
          fill: "forwards",
          iterations: iterations,
        });
        break;
      case optionTypes.DELAY:
        element.animate(baseAnimation, {
          easing: "linear",
          duration: 1000,
          delay: delay,
        });
        break;
      case optionTypes.ENDDELAY:
        element.animate(baseAnimation, {
          easing: "linear",
          duration: 1000,
          fill: "forwards",
          endDelay: endDelay,
        }).onfinish = () => {
          element.animate(
            [
              { transform: "rotateY(0deg)", left: "85%", offset: 0 },
              { transform: "rotateY(180deg)", left: "85%", offset: 0.5 },
              { transform: "rotateY(180deg)", left: 0, offset: 0.9 },
              { transform: "rotateY(0deg)", left: 0, offset: 1 },
            ],
            {
              easing: "linear",
              fill: "forwards",
              duration: 2000,
            }
          );
        };
        break;
    }
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
