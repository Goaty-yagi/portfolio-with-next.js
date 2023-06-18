import { BsLinkedin } from "react-icons/bs";
import {
  Box,
  Center,
  Flex,
  Heading,
} from "@chakra-ui/react";


export default function Footer() {
  const copyLight = "© 2022 Bing. All Rights Reserved."
  const goToLinkedin = () => {
    const url = "https://www.linkedin.com/in/%F0%9F%90%BEbing-li-89256b158/"
    window.open(url)
  }
  return (
    <Flex position={"relative"} w="100%" h="200px" justifyContent={"center"} mt="1rem">
      <Box position={"absolute"} bottom="0" color={"lightgray"}>
        <Center>
          <Box
            as={BsLinkedin}
            onClick={goToLinkedin}
            fontSize="2rem"
            textAlign={"center"}
            mb="0.5rem"
            transition={".5s"}
            _hover={{ color: "aquamarine" }}
            />
        </Center>
        <Heading as="h4" size="sm" mb="1rem">{copyLight}</Heading>
      </Box>
    </Flex>
  );
}
