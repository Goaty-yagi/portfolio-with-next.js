import { Box, Flex } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import firstUpperCase from "../../lib/firstUpperCase";

export default function AbstractTab({ tabs, set, color, tabStyle, animeStyle }) {
  const wrapperRefs = useRef(null);
  const animeRefs = useRef(null);
  const [transition, setTransition] = useState("");
  const tagRef = useRef(null);
  useEffect(() => {
    setAttributes({
      ...attributes,
      width: tagRef.current.offsetWidth,
      height: tagRef.current.offsetHeight,
      relativeTop:ratioCul(tagRef.current).top,
      relativeLeft:ratioCul(tagRef.current).left
    });
  }, []);

  function ratioCul(e) {
    const wapperPos = wrapperRefs.current.getBoundingClientRect();
    const wrapperWidth = wapperPos.width;
    const wrapperHeight = wapperPos.height;
    const targetPos = e.getBoundingClientRect();
    const deffLeft = wapperPos.left - targetPos.left + 8;
    const deffTop = targetPos.top - wapperPos.top - 8;
    const ratioL = deffLeft / wrapperWidth;
    const ratioT = deffTop / wrapperHeight;
    return { left: ratioL * -1 * 100, top: ratioT * 100 };
  }

  const [attributes, setAttributes] = useState({
    height: 0,
    width: 0,
    relativeTop: 0,
    relativeLeft: 0,
    currentIndex: 0,
  });

  const { width, height, relativeTop, relativeLeft, currentIndex } = attributes;

  const defaultTabStyle = {
    m: "0.5rem",
    p: "0.5rem",
    border: "solid gray",
    borderRadius: "8px",
    fontWeight: "bold",
    zIndex: 1,
    cursor: "pointer",
    transition: "background .3s",
    fontSize: { base: "0.8rem", md: "1rem" },
    _hover: { background: "#5f5f5f5c" },
  };

  const defaultAnimeStyle = () => {
    return {
      position: "absolute",
      w: width + "px",
      h: height + "px",
      m: "0.5rem",
      top: relativeTop + "%",
      left: relativeLeft + "%",
      background: color ? color : "#ff000073",
      borderRadius: "8px",
      transition: transition,
    };
  };

  function click(e, index) {
    if (!transition) {
      setTransition("all .5s");
    }
    if (currentIndex !== index) {
      console.log("CLICK",e.innerText)
      set(e.innerText);
      setAttributes(() => {
        return {
          ...attributes,
          width: e.offsetWidth,
          height: e.offsetHeight,
          relativeLeft: ratioCul(e).left,
          relativeTop: ratioCul(e).top,
          currentIndex: index,
        };
      });
    }
  }

  return (
    <>
      <Flex ref={wrapperRefs} flexWrap={"wrap"} justifyContent={'center'} position={"relative"}>
        {tabs.map((e, index) => (
          <Box
            key={index}
            ref={index === 0 ? tagRef : null}
            onClick={(e) => click(e.target, index)}
            {...defaultTabStyle}
            {...tabStyle}
          >
            {firstUpperCase(e)}
          </Box>
        ))}
        <Box ref={animeRefs} {...defaultAnimeStyle()} {...animeStyle} />
      </Flex>
    </>
  );
}