import { Box, Flex } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

export default function AbstractTab({ tabs, color, hover }) {
  const wrapperRefs = useRef(null)
  const animeRefs = useRef(null)
  const [transition, setTransition] = useState('')
  useEffect(() => {
    const tag = document.querySelectorAll(".tag");
    setAttributes({
      ...attributes,
      width: tag[0].offsetWidth,
      height: tag[0].offsetHeight,
    });
  }, []);
  function ratioCul(e) {
    const wapperPos = wrapperRefs.current.getBoundingClientRect()
    const wrapperWidth = wapperPos.width
    const wrapperHeight = wapperPos.height - 18
    const targetPos = e.target.getBoundingClientRect()
    const deffLeft = wapperPos.left - targetPos.left +8
    const deffTop = wapperPos.top - targetPos.top + 8
    const ratioL =  deffLeft / wrapperWidth
    const ratioT =  deffTop / wrapperHeight
    return {left:ratioL * -1 * 100,
    top:ratioT * -1 * 100}
  }
  const [attributes, setAttributes] = useState({
    height: 0,
    width: 0,
    relativeTop:0,
    relativeLeft:0,
    moveLength: 0,
    currentIndex: 0,
  });

  const { width, height, relativeTop, relativeLeft, currentIndex } = attributes;

  const tabStyle = {
    m: "0.5rem",
    p: "0.5rem",
    border: "solid gray",
    borderRadius: "8px",
    fontWeight:'bold',
    zIndex: 1,
    cursor: "pointer",
    transition:'background .3s',
    _hover:{background:'#5f5f5f5c'},
  };
  const animeStyle = () => {
    return {
      position: "absolute",
      w: width + "px",
      h: height,
      m: "0.5rem",
      top:relativeTop,
      left: relativeLeft + '%',
      background: color?color:"#ff000073",
      borderRadius: "8px",
      transition: transition,
    };
  };
  function click(e, index) {
    if(!transition) {
      setTransition("all .5s")
    }
    if (currentIndex !== index) {
      setAttributes(() => {
        return {
          ...attributes,
          width: e.target.offsetWidth,
          height: e.target.offsetHeight,
          relativeLeft: ratioCul(e).left,
          relativeTop:ratioCul(e).top,
          currentIndex: index,
        };
      });
    }
  }
  return (
    <>
      <Flex ref={wrapperRefs} flexWrap={'wrap'} position={"relative"}>
        {tabs.map((e, index) => (
          <Box
            key={index}
            className="tag"
            onClick={(e) => click(e, index)}
            {...tabStyle}
          >
            {e}
          </Box>
        ))}
        <Box ref={animeRefs} {...animeStyle()} />
      </Flex>
    </>
  );
}
