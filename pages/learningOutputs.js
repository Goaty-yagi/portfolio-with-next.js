import { Box, Center, Text, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import fs from "fs";
import path from "path";
import AbstractMenu from "../components/customMenus/abstractMenu";
import CustomImage from "../components/customImage";
import CustomLink from "../components/customLink";

export default function LearningOutputs({ outputsdata }) {
  const mainText = `This page is representing to my learning outputs in the software engineer course at the Holberton school.`;
  const imageProps = (obj) => {
    return {
      src: obj.img[0],
      alt: obj.alt,
      layout: "fill",
      objectFit: "cover",
      objectPosition: "50% 0",
    };
  };
  const configs = []
  const data = outputsdata.outputs;
  return (
    <Box w="100%">
      <Center>
        <Heading
          as="b"
          fontSize="3xl"
          textDecoration={"underline"}
          textAlign={"center"}
        >
          Learning Outputs
        </Heading>
      </Center>
      <Box mt={'1rem'} p={'1rem'} fontWeight={'bold'} border={'1px'} borderRadius={'10px'}>
        <Text>{mainText}</Text>
      </Box>
      <AbstractMenu config={configs} btnText={'Semester'}/>
      {data.map((each, index) => {
        return (
          <CustomLink
            href={"learningOutputs/" + each.title}
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
                  {/* <Box
                    as={CustomImage}
                    borderRadius="0.5rem"
                    props={imageProps(each)}
                  /> */}
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
  const data = fs.readFileSync(filePath + "/learningOutput.json", "utf8");
  const outputsdata = JSON.parse(data);
  return {
    props: {
      outputsdata,
    },
  };
}
