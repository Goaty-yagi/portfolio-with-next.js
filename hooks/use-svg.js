import { useState, useEffect, useRef, forwardRef } from "react";

function useSvg() {
  // useEffect(() => {
  //     console.log("USEEFFECT")
  //     if(pathRefs.current) {
  //         console.log("REF",pathRefs.current, pathRefs.current.getTotalLength())
  //         setPaths({...paths, totalLength: pathRefs.current.getTotalLength()})
  //     }
  // },[pathRefs])
  // stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  const animationAttribute = ["strokeDashoffset", "offsetDistance"];
  const animationTypes = [""];
  const childTag = {
    tagName: "",
    d: "",
    totalLength: 0,
    styles: {},
    refs: useRef(null),
    animation: {
      type: "",
      options: {
        duration: 1,
        iterations: "",
      },
    },
  };
  const [svgs, setSvgs] = useState({
    viewBox: "",
    styles: {},
  });
  const [paths, setPaths] = useState({
    tagName: "",
    d: "",
    totalLength: 0,
    styles: {},
  });
  const [animations, setAnimation] = useState({
    type: "",
    options: {
      duration: 1,
      iterations: "",
    },
  });
  function setChildTag() {}
  function configureSvgs(obj) {
    Object.keys(obj).forEach((e) => {
      if (e === "viewBox") {
      }
    });
  }
  function animationHandler() {
    console.log("CLICK", totalLength, pathRefs);
    const length = pathRefs.current.getTotalLength();
    pathRefs.current.animate(
      [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
      {
        // sync options
        duration: 2000,
        // fill:"forwards"
        // iterations: ''
      }
    );
  }
  const pathRefs = useRef(null);
  const { viewBox } = svgs;
  const { d, totalLength, styles } = paths;
  return {
    svgs,
    viewBox,
    setSvgs,
    paths,
    d,
    styles,
    setPaths,
    pathRefs,
    animationHandler,
  };
}

export { useSvg };
