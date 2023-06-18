import { Box, Center, Text, Flex, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

import Projects, { workDataArray } from "../components/project";
import CustomImage from "../components/customImage";
import Head from "next/head";

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
      {/* <Head>
        <title>Bing - Projects</title>
      </Head> */}
      <Center>
        <Heading
          as="b"
          fontSize="3xl"
          textDecoration={"underline"}
          textAlign={"center"}
        >
          PROJECTS
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
          <Link href={"projects/" + each.title} scroll={false} key={index}>
            <Box
              mt="2rem"
              minH="300px"
              border={"solid transparent"}
              borderBottom={"solid gray"}
              m="0 0.5rem"
              p={"1rem"}
              transition=".5s"
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
                  // whileTap={{ scale: 0.99 }}
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
          </Link>
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
