import { Box, Tag } from "@chakra-ui/react";

export default function Tags({ tags }) {
  return (
    <Box m="1rem 0">
      <Box width={"100%"} overflow={"auto"}>
        {tags.map((tag, index) => {
          return (
            <Tag
              border={"solid orange"}
              borderRadius="full"
              bg="navy"
              color={"white"}
              p="0.1rem 0.6rem"
              m="0.2rem 0"
              key={index}
            >
              {tag}
            </Tag>
          );
        })}
      </Box>
    </Box>
  );
}
