import EachSvg from "./eachSvg";
import { SlideAnimatioWrapper } from "../../../customWrappers";
import { Box, Center, Button } from "@chakra-ui/react";


export default function DefaultLayout({
  text,
  additionalText,
  type,
  configs,
  currentTab,
  setCurrentTab,
  funArray,
  CustomTab,
}) {
  function checkAttribute(e) {
    if (typeof e.types !== "undefined") {
      return e.types.includes(currentTab);
    } else {
      return true;
    }
  }
  function animationStart() {
    funArray.forEach((f) => {
      f.fun();
    });
  }
  return (
    <>
      <Box w="100%">
        <Center flexDirection={"column"}>
          <Box
            border={"solid gray"}
            borderRadius={"10px"}
            fontWeight={"bold"}
            w={"100%"}
            minH={"20px"}
            mb={"1rem"}
            p={"1rem"}
          >
            {text}
            <Box color={"red"}>{additionalText}</Box>
          </Box>
          <Button
            textAlign={"center"}
            colorScheme="teal"
            variant="solid"
            onClick={animationStart}
          >
            Start
          </Button>
        </Center>
        <Center mt={"1rem"}>
          {CustomTab && <CustomTab set={setCurrentTab} />}
        </Center>
        <Box mt={"3rem"}>
          <SlideAnimatioWrapper id={currentTab}>
            {configs.map((e, index) => (
              <Box key={index}>
                {checkAttribute(e) && (
                  <EachSvg
                    type={type}
                    val={e.name}
                    funArray={funArray}
                    currentTab={currentTab}
                  />
                )}
              </Box>
            ))}
          </SlideAnimatioWrapper>
        </Box>
      </Box>
    </>
  );
}
