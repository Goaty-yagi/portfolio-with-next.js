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
        funArray.push(animationHandler);
    }())
    return (
      <>
        <Box>
          <Button onClick={animationHandler}>{val}</Button>
          <AbstractSvg refs={refs} color={monthColors[(Math.floor(Math.random() * monthColors.length))]} />
        </Box>
      </>
    );
  }

export default memo(EachSvg);