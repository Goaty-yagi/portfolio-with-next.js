import { useAnimation } from "../../../hooks/use-animation";
import { monthColors } from "../../../styles/colors";
import { memo } from "react";
import { Box, Button } from "@chakra-ui/react";
import AbstractSvg from "../abstractSvg";
import { useEffect } from "react";

function EachSvg({ type, val, funArray, currentTab }) {
    const { refs, optionConfigure, animationHandler } = useAnimation();
    useEffect(() => {
      optionConfigure(type, type, val);
      
    }, []);
    (function push() {
      if(funArray.length) {
        const vals = funArray.map((e) => {
          return e.val
        })
        if(!vals.includes(val)) {
          console.log("not include")
          funArray.push({fun:animationHandler,type:type,val:val});
        } else {
          console.log(vals.indexOf(val))
          const index = vals.indexOf(val)
          funArray.splice(index, 1)
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