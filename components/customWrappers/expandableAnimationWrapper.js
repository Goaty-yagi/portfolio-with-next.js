import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

// only height animation.

export default function ExpandableAnimationWrapper({ children, trigger }) {
  const outerRefs = useRef(null);
  const innerRefs = useRef(null);
  const [originalHeight, setOriginalHeight] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    if (outerRefs.current) {
      setInnerHeight()
    }
  }, []);

  useEffect(() => {
    if(isMounted) {
      changeHeight()
    } else {
      return setIsMounted(true)
    }
  },[trigger])

  function setInnerHeight() {
    setOriginalHeight(innerRefs.current.offsetHeight)
    outerRefs.current.style.height =
      innerRefs.current.offsetHeight > 100
        ? innerRefs.current.offsetHeight + "px"
        : "100px";
    innerRefs.current.style.height = outerRefs.current.offsetHeight + "px";
  }
  function changeHeight(){
    if(!trigger) {
      outerRefs.current.style.height = originalHeight + "px"
    } else {
      outerRefs.current.style.height = 0
    }
  }
  return (
    <>
      <Box className={'outerWrapper'} ref={outerRefs} transition={'900ms'} overflow={'hidden'} position={"relative"} w={"100%"} h={"100%"}>
        <Box  w={"100%"} ref={innerRefs}>{children}</Box>
      </Box>
    </>
  );
}
