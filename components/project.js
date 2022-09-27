import { FaGithubSquare } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
// import workData from "./workData";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Box,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Project({ hideTitle }) {
  const gitClick = (obj) => {
    window.open(obj.githubUrl);
  };
  const postClick = (obj) => {
    window.open(obj.postUrl);
  };
  const [workData, setData] = useState();
  
  useEffect(() => {
    setData([
      {
        img: "/neko-japanese.png",
        alt: "image",
        title: "Neko-Japanese",
        description:
          "This is my first project built with Vue-CLI and Django, might be published as a product.",
        productDescription:
          "Neko Japanese is a platform where learn Japanese, test and evaluate japanese knowledge, access viewable weakness and strong point in each component, community to discuss Japanese topics. Currently, this is for portfolio purpose, but might be published as a product.",
        githubUrl: "https://github.com/Goaty-yagi/quiz_project",
        postUrl: "https://neko-japanese.herokuapp.com/",
      },
      {
        img: "/quiz-ranking-dojo.png",
        alt: "image",
        title: "Quiz-Ranking-Dojo",
        description: `This is my final project in General Assembly development course.
          I built SPA from scratch to understand how SPA works, I believe that this experience definitely help my future-self
          when I learn new frameworks or libraries.
          `,
        githubUrl: "https://github.com/Goaty-yagi/GA_SPA_Final_Project",
        postUrl: "https://quiz-ranking-dojo.herokuapp.com/",
      },
    ]);
  }, []);
  let markup;
  if (workData) {
    markup = workData.map((obj, index) => {
      return (
        <Box
          flexBasis={{base:"auto", md: "50%"}}
          minH="450px"
          p="0.4rem"
          m="0.5rem"
          boxShadow={"0px 5px 15px 0px rgba(0, 0, 0, 0.35)"}
          key={index}
        >
          <Heading as="h3" size={"md"} p="0.5rem 0">
            <Center>{obj.title}</Center>
          </Heading>
          <Box
            w="100%"
            h={{base: "200px", sm:"250px", md: "35%"}}
            position="relative"
            overflow={"hidden"}
            boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
          >
            <Image
              src={obj.img}
              alt={obj.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="50% 0"
            ></Image>
          </Box>
          <Box h="150px" overflowY={"scroll"} mt="1rem">
            <Text>{obj.description}</Text>
          </Box>
          <Center>
            <Box
              as={FaGithubSquare}
              onClick={() => gitClick(obj)}
              size={"2.5rem"}
              m="0 0.4rem"
              transition={".5s"}
              _hover={{ color: "gray" }}
            />
            <Box
              as={BiRocket}
              onClick={() => gitClick(obj)}
              size={"2.5rem"}
              m="0 0.4rem"
              transition={".5s"}
              _hover={{ color: "gray" }}
            />
          </Center>
        </Box>
      );
    });
  }

  return (
    <Box as="section">
      {!hideTitle && (
        <Heading as="h1" size={"lg"} textAlign={{base:"center", md:"left"}} textDecoration="underline">
          Project
        </Heading>
      )}
      <Box display={{ base: "block", md: "flex" }}>{markup}</Box>
    </Box>
  );
}
