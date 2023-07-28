import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Work from "../components/project";
import Post from "../components/post";
import { sortByDate } from "../utils";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import CustomImage from "../components/customImage";

export const Context = React.createContext();

export default function Home({ posts, projects }) {
  const imageProps = {
    src: "/me.jpeg",
    alt: "me",
    layout: "fill",
    objectFit: "contain",
  };
  const colorScheme = useColorModeValue("pink", "teal");
  const skills = [
    "next.js",
    "react.js",
    "chakra-ui",
    "framer-motion",
    "three.js",
    "vue-cli",
    "django",
    "git",
    "apache",
    "aws-practitioner",
    "firebase-authentication",
    "python",
    "typescript",
    "javascript",
    "html",
    "css",
  ];
  const introText = "Hi, I'm Nobuhiro based in Melbourne.";
  const selfIntro =
    "Newly trained full stack developer with an interest in cloud engineering seeking an entry-level or internship position. Check out my personal projects and articles down below: ";
  return (
    <Box maxW="750px" p="0.3rem">
      
      <Box
        bg="rgba(0,0,0,0.8)"
        w="100%"
        p="0.5rem 2rem"
        border="solid rgb(99, 99, 99)"
        borderRadius="md"
        color="rgb(240, 240, 240)"
        boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
      >
        <Center>
          <Text>{introText}</Text>
        </Center>
      </Box>
      <Flex alignItems="center" m="3">
        <Flex flexDirection="column" flexBasis="50%">
          <Heading as="h2" size="lg">
            Nobuhiro
          </Heading>
          <Heading as="h3" size="md">
            Developer
          </Heading>
        </Flex>
        <Flex flexBasis={"50%"} justifyContent="center">
          <Box
            w="100px"
            h="100px"
            border="solid lightgray"
            borderRadius="50vh"
            overflow="hidden"
            position={"relative"}
          >
            <CustomImage props={imageProps} />
          </Box>
        </Flex>
      </Flex>
      <Box m="2rem 0" p="0 1rem">
        <Center>
          <Text p="0.5rem" boxShadow={"lg"} w="90%">
            {selfIntro}
          </Text>
        </Center>
      </Box>
      <Flex ml="1rem" flexDirection={"column"}>
        <Heading as="h3" size="md">
          Skills
        </Heading>
        <Box textAlign={"center"} spacing={4} display="block">
          {skills.map((skill) => (
            <Tag
              key={skill}
              variant="solid"
              m="0.3rem"
              colorScheme={colorScheme}
            >
              {skill.toUpperCase()}
            </Tag>
          ))}
        </Box>
      </Flex>
      <Context.Provider value={projects}>
        <Work />
      </Context.Provider>
      <Post posts={posts.slice(0, 2)} />
    </Box>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "json");
  const data = fs.readFileSync(filePath + "/workdata.json", "utf8");
  const objectData = JSON.parse(data);
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  //Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");
    // Get frontmatter¥
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      projects: objectData,
      posts: posts.sort(sortByDate),
    },
  };
}
