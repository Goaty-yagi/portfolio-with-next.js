import { Box, Flex, Text } from "@chakra-ui/react";
import { CustomLink } from "../commons";
import { FcLink } from "react-icons/fc";

export default function PreviousNotice({ previous }) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <Box textAlign={"center"} fontSize={"1.3rem"} whiteSpace={"pre-wrap"}>
        <span
          style={{
            border: "1px solid #767717",
            borderRadius: "0.5rem",
            padding: "0.3rem 0.5rem",
            display: "inline-block",
          }}
        >
          <Flex alignItems={"center"}>
            <FcLink />
            <Text ml={"0.5rem"}>In continuation from </Text>
            <Box className={"customA"} style={{ display: "inline-block" }}>
              <CustomLink href={origin + previous} scroll={true}>
                this article
              </CustomLink>
            </Box>
          </Flex>
        </span>
      </Box>
    </>
  );
}
