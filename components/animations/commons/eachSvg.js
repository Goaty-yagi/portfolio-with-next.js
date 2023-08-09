import { useAnimation } from "../../../hooks/use-animation";
import { monthColors } from "../../../styles/colors";
import { memo } from "react";
import { Box, Button } from "@chakra-ui/react";
import AbstractSvg from "../abstractSvg";
import { useEffect } from "react";

function EachSvg({ type, val, funArray }) {
    const { refs, optionConfigure, animationHandler } = useAnimation();
    useEffect(() => {
      optionConfigure(type, type, val);
      
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

    return (
      <>
        <Box>
          <Button onClick={animationHandler}>{val}</Button>
          <AbstractSvg refs={refs} isDisplay={type==='pseudoElement'} color={monthColors[(Math.floor(Math.random() * monthColors.length))]} />
        </Box>
      </>
    );
  }

export default memo(EachSvg);