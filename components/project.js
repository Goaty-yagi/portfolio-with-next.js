import { FaGithubSquare } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Context } from "../pages";
import CustomImage from "./customImage";

export default function Project({ hideTitle }) {
  const projectContext = useContext(Context)
  const imageProps = (obj) => {
    return {
      src:obj.img[0],
      alt:obj.alt,
      layout:"fill",
      objectFit:"cover",
      objectPosition:"50% 0",
    }
  }

  const gitClick = (obj) => {
    window.open(obj.githubUrl);
  };
  const postClick = (obj) => {
    window.open(obj["post-url"]);
  };
  const [workData, setData] = useState();

  useEffect(() => {
    setData(projectContext.workdata.slice(0,2));
  }, []);
  let markup;
  if (workData) {
    markup = workData.map((obj, index) => {
      return (
        <Link href={`/projects/${obj.title}`} key={index} scroll={false}>
          <Box
            flexBasis={{ base: "auto", md: "50%" }}
            minH="450px"
            p="0.4rem"
            m="0.5rem"
            boxShadow={"0px 5px 15px 0px rgba(0, 0, 0, 0.35)"}
            border="solid transparent"
            transition={".3s"}
            _hover={{ border:"solid teal" }}
          >
            <Heading as="h3" size={"md"} p="0.5rem 0">
              <Center>{obj.title}</Center>
            </Heading>
            <Box
              w="100%"
              h={{ base: "200px", sm: "250px", md: "35%" }}
              position="relative"
              overflow={"hidden"}
              boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
            >
              <CustomImage props={imageProps(obj)}/>
            </Box>
            <Box h="150px" overflowY={"scroll"} mt="1rem">
              <Text>{obj.description}</Text>
            </Box>
            <Center>
              {obj.githubUrl&&(
                <Box
                as={FaGithubSquare}
                onClick={(e) => {
                  e.stopPropagation(), gitClick(obj);
                }}
                size={"2.5rem"}
                m="0 0.4rem"
                transition={".5s"}
                _hover={{ color: "gray" }}
              />
              )}
              <Box
                as={BiRocket}
                onClick={(e) => {
                  e.stopPropagation(), postClick(obj);
                }}
                size={"2.5rem"}
                m="0 0.4rem"
                transition={".5s"}
                _hover={{ color: "gray" }}
              />
            </Center>
          </Box>
        </Link>
      );
    });
  }

  return (
    <Box as="section">
      {!hideTitle && (
        <Heading
          as="h1"
          size={"lg"}
          textAlign={{ base: "center", md: "left" }}
          textDecoration="underline"
        >
          Projects
        </Heading>
      )}
      <Box display={{ base: "block", md: "flex" }}>{markup}</Box>
      <Center>
        <Link
          href={"projects/"} scroll={false}>
          <Button
            bg="rgb(178, 224, 212)"
            color="rgb(0, 58, 53)"
            fontSize="sm"
            height="40px"
            width="120px"
            border="2px"
            m="0.5rem"
            borderColor="green.300"
            _hover={{ bg: "green.50" }}
          >
            <Text>More Projects?</Text>
          </Button>
        </Link>
      </Center>
    </Box>
  );
}
