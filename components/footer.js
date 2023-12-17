import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Box, Text, Flex } from "@chakra-ui/react";

export const openWindow = (url) => {
  console.log("CLICKED");
  if (typeof window !== "undefined") {
    window.open(url);
  }
};
export default function Footer() {
  const copyLight = "© 2022 Nobuhiro. All Rights Reserved.";
  const configs = [
    {
      name: "linked_in",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/nobuhiro-funahashi-1b725322b/",
    },
    {
      name: "github",
      icon: FaGithubSquare,
      url: "https://github.com/Goaty-yagi/portfolio-with-next.js",
    },
  ];
  return (
    <Flex
      position={"relative"}
      w="100%"
      h="200px"
      justifyContent={"center"}
      mt="1rem"
    >
      <Box position={"absolute"} bottom="0" color={"lightgray"}>
        <Flex gap={2} justifyContent={"center"}>
          {configs.map((e, index) => (
            <Box
              key={index}
              as={e.icon}
              onClick={() => openWindow(e.url)}
              fontSize="2.5rem"
              textAlign={"center"}
              mb="0.5rem"
              transition={".5s"}
              cursor={"pointer"}
              _hover={{ color: "aquamarine" }}
            />
          ))}
        </Flex>
        <Text fontWeight={"bold"} size="sm" mb="1rem">
          {copyLight}
        </Text>
      </Box>
    </Flex>
  );
}
