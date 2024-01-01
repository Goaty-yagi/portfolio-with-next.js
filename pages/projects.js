import { Box, Center, Text, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import fs from "fs";
import path from "path";
import { CustomImage, CustomLink } from "../components/commons";

export default function Project({ projectsdata }) {
  const imageProps = (obj) => {
    return {
      src: obj.img[0],
      alt: obj.alt,
      layout: "fill",
      objectFit: "cover",
      objectPosition: "50% 0",
    };
  };
  const data = projectsdata.workdata;
  return (
    <Box w="100%">
      <Center>
        <Heading
          as="b"
          fontSize="3xl"
          textDecoration={"underline"}
          textAlign={"center"}
        >
          PROJECT
        </Heading>
      </Center>
      <Flex
        w={{ base: "auto", lg: "600px" }}
        flexDirection={"column"}
        mb="3rem"
        mt="1rem"
      ></Flex>
      {data.map((each, index) => {
        return (
          <CustomLink
            href={"projects/" + each.title}
            scroll={false}
            key={index}
          >
            <Box
              mt="2rem"
              minH="300px"
              border={"solid transparent"}
              borderBottom={"solid gray"}
              m="0 0.5rem"
              p={"1rem"}
              transition=".5s"
              cursor={"pointer"}
              _hover={{ border: "solid orange" }}
            >
              <Flex
                w="100%"
                h="350px"
                justifyContent={"center"}
                flexDirection="column"
                alignItems={"center"}
              >
                <Box
                  as={motion.div}
                  whileHover={{
                    scale: 1.05,
                  }}
                  boxShadow={"0px 5px 15px 0px rgba(0, 0, 0, 0.35)"}
                  position={"relative"}
                  w={{ base: "100%", sm: "450px" }}
                  h={{ base: "50%", sm: "300px" }}
                >
                  <Box
                    as={CustomImage}
                    borderRadius="0.5rem"
                    props={imageProps(each)}
                  />
                </Box>
                <Heading>{each.title}</Heading>
                <Text nimh="100%">{each.description}</Text>
              </Flex>
            </Box>
          </CustomLink>
        );
      })}
    </Box>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "json");
  const data = fs.readFileSync(filePath + "/workdata.json", "utf8");
  const projectsdata = JSON.parse(data);
  return {
    props: {
      projectsdata,
    },
  };
}
