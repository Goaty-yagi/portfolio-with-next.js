import { Box, Flex } from "@chakra-ui/react";

export default function Dates({ date, last_update }) {
  return (
    <Box m="0.2rem 0.5rem">
      <Flex mt="1rem" w="100%">
        <Box
          fontSize="0.9rem"
          bg="lightgray"
          borderRadius={"0.2rem"}
          p="0 0.2rem"
          color={"black"}
          boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
        >
          Posted on {date}
        </Box>
      </Flex>
      {last_update && (
        <Flex mt="1rem" w="100%">
          <Box
            fontSize="0.9rem"
            bg="lightgray"
            border={"solid yellow"}
            borderRadius={"0.2rem"}
            p="0 0.2rem"
            color={"black"}
            fontWeight={"bold"}
            boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
          >
            Updated on {last_update}
          </Box>
        </Flex>
      )}
    </Box>
  );
}
