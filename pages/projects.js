import { Box, Center, Text, Flex, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Projects, { workDataArray } from "../components/project";

export default function Project() {
  console.log(workDataArray);
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
      {workDataArray.map((each, index) => {
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
                  borderRadius="50vh"
                  w={{ base: "100%", sm: "350px" }}
                  h={{ base: "50%", sm: "350px" }}
                >
                  <Box
                    as={Image}
                    borderRadius="0.5rem"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 0%"
                    src={each.img[0]}
                    alt={each.alt}
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
