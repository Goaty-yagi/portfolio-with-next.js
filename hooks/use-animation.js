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
    iterationStart: 0.0,
    composite: "",
    iterationComposite: "",
    pseudoElement:"",
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
    iterationStart,
    composite,
    iterationComposite,
    pseudoElement,
    refs,
  } = options;

  const onlyEffectOptions = {delay,
    easing,
    endDelay,
    duration,
    direction,
    fill,
    iterations,
    iterationStart,
    composite,
    iterationComposite,
    pseudoElement,}
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
          delay:500,
          iterationStart:0.5

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
      case optionTypes.ITERATIONSTART:
        element.animate(baseAnimation, {
          easing: "linear",
          duration: 1000,
          fill: "forwards",
          iterationStart: iterationStart,
        });
        break;
      case optionTypes.COMPOSITE:
        element.animate(
          [{ left: 0 }, { transform: "scale(2.5)" }, { left: "85%" }],
          {
            easing: "linear",
            duration: 1000,
          }
        );
        element.animate(
          [
            { transform: "scale(1)" },
            { transform: "scale(2)" },
            { transform: "scale(1)" },
          ],
          {
            easing: "linear",
            duration: 1000,
            composite: composite,
          }
        );
        break;
      case optionTypes.ITERATIONCOMPOSITE:
        element.animate(
          [{ left: 0 }, { transform: "scale(2.5)" }, { left: "85%" }],
          {
            easing: "linear",
            duration: 1000,
            iterations: 2,
            iterationComposite: iterationComposite,
          }
        );
        break;
      case optionTypes.PSEUDOELEMENT:
        element.animate(baseAnimation, {
          easing: "linear",
          duration: 1000,
          fill: "forwards",
          pseudoElement:pseudoElement
        });
        break;
      default :
      element.animate(baseAnimation, onlyEffectOptions);
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
