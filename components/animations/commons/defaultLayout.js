import EachSvg from "./eachSvg";
import SlideAnimatioWrapper from "../../customWrappers/slideAnimationWrapper";
import { Box, Center, Button } from "@chakra-ui/react";


export default function DefaultLayout({ type, configs, currentTab,setCurrentTab,funArray, animationStart, CustomTab}) {

    function checkAttribute(e) {
        if(typeof e.types !== 'undefined') {
            return e.types.includes(currentTab)
        } else {
            return true
        }
    }
  return (
    <>
      <Box w="100%">
        <Center>
          <Button
            textAlign={"center"}
            colorScheme="teal"
            variant="solid"
            onClick={animationStart}
          >
            Start
          </Button>
        </Center>
        <Center mt={"2rem"}>
            {CustomTab&&(
                <CustomTab set={setCurrentTab} />
            )}
        </Center>
        <Box mt={"3rem"}>
          <SlideAnimatioWrapper id={currentTab}>
            {configs.map((e, index) => (
              <Box key={index}>
                {checkAttribute(e) && <EachSvg type={type} val={e.name} funArray={funArray} />}
              </Box>
            ))}
          </SlideAnimatioWrapper>
        </Box>
      </Box>
    </>
  );
}
