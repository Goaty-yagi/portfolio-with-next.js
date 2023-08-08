import { useAnimation } from "../../../hooks/use-animation";
import { monthColors } from "../../../styles/colors";
import { memo } from "react";
import { Box, Button } from "@chakra-ui/react";
import AbstractSvg from "../abstractSvg";
import { useEffect, useState } from "react";

function EachSvg({ type, val, funArray }) {
  console.log("EACHSVG")
    const { refs, optionConfigure, animationHandler } = useAnimation();
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
      console.log("EFFECT", animationHandler)
      optionConfigure(type, type, val);
      if(type==='composite') {
        refs.current.animate([{ transform: "rotate(0deg)", left:'50%' }, { transform: "rotate(360deg)", left:'50%' }], {
          easing: "linear",
          duration: 1000,
          iterations:Infinity
        });
      }
    }, []);
    (function push() {
      if(funArray.length) {
        if(funArray[funArray.length - 1].val!==val) {
          funArray.push({fun:animationHandler,type:type,val:val});
        }
      } else {
        funArray.push({fun:animationHandler,type:type,val:val});
      }
    }())

    function customHandler() {
      if(type==='composite'){
        animationHandler()
        animationHandler()
      } else {
        animationHandler()
      }
    }
    return (
      <>
        <Box>
          <Button onClick={customHandler}>{val}</Button>
          <AbstractSvg refs={refs} color={monthColors[(Math.floor(Math.random() * monthColors.length))]} />
        </Box>
      </>
    );
  }

export default memo(EachSvg);