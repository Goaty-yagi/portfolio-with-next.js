import { Flex, Heading, Text } from "@chakra-ui/react";

export default function UpdateExcerpt({ update_excerpt, last_update }) {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      border={"solid #ff84e0"}
      bg={"lightcyan"}
      color={"gray"}
      p={"0.2rem 0.5rem"}
      mt={"1rem"}
    >
      <Heading>What is updated?</Heading>
      <Text>
        {update_excerpt} on {last_update}
      </Text>
    </Flex>
  );
}
