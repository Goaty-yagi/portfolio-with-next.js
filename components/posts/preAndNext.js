import { Flex, Box, Text } from "@chakra-ui/react";
import { CustomLink } from "../commons";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

export default function PreAndNext({ previous, next }) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <Flex
      justifyContent={"space-between"}
      mt={"1rem"}
      fontWeight={"bold"}
      fontSize={"1.2rem"}
    >
      <Box>
        {previous ? (
          <CustomLink href={origin + previous} scroll={true}>
            <Flex
              alignItems={"center"}
              cursor={"pointer"}
              border={"solid lightgray"}
              borderRadius={"0.5rem"}
              color={"white"}
              bg={"#775a85"}
              p={"0.2rem 0.3rem"}
              transition={"300ms"}
              _hover={{ bg: "white", color: "black", border: "solid gray" }}
            >
              <TbArrowBigLeftLine />
              <Text ml={"0.5rem"}>PREVIOUS</Text>
            </Flex>
          </CustomLink>
        ) : (
          <></>
        )}
      </Box>
      <Box>
        {next ? (
          <CustomLink href={origin + next} scroll={true}>
            <Flex
              alignItems={"center"}
              cursor={"pointer"}
              border={"solid lightgray"}
              borderRadius={"0.5rem"}
              color={"white"}
              bg={"#775a85"}
              p={"0.2rem 0.3rem"}
              transition={"300ms"}
              _hover={{ bg: "white", color: "black", border: "solid gray" }}
            >
              <Text mr={"0.5rem"}>NEXT</Text>
              <TbArrowBigRightLine />
            </Flex>
          </CustomLink>
        ) : (
          <></>
        )}
      </Box>
    </Flex>
  );
}
