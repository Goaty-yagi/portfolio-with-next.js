import { Flex, Box } from "@chakra-ui/react";
import { TiSocialGithubCircular } from "react-icons/ti";

export default function Git({ git }) {
  return (
    <Flex>
      <Box
        display={"block"}
        onClick={() => {
          openWindow(git);
        }}
        cursor={"pointer"}
        transition={"500ms"}
        _hover={{
          color: "gray",
        }}
      >
        <TiSocialGithubCircular fontSize={"45px"} />
      </Box>
    </Flex>
  );
}
