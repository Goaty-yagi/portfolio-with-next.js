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
import {
  FcSelfServiceKiosk,
  FcFilingCabinet,
  FcServices,
  FcPlus,
  FcSupport,
} from "react-icons/fc";

export const Context = React.createContext();

export default function Home({ posts, projects }) {
  const imageProps = {
    src: "/me.jpeg",
    alt: "me",
    layout: "fill",
    objectFit: "contain",
  };
  const skills = [
    {
      category: "Front-End",
      icon: FcSelfServiceKiosk,
      tagStyle:{dark:"teal", light:"pink"},
      stacks: [
        "next.js",
        "react.js",
        "vue.js",
        "redux",
        "chakra-ui",
        "framer-motion",
        "three.js",
        "typescript",
        "javascript",
        "accessibility",
        "html",
        "css",
      ],
    },
    {
      category: "Back-End",
      icon: FcFilingCabinet,
      tagStyle:{dark:"red", light:"blue"},
      stacks: ["python", "c-language", "django", "django rest framework"],
    },
    {
      category: "DevOps",
      icon: FcServices,
      tagStyle:{dark:"blue", light:"green"},
      stacks: ["shell", "aws", "heroku", "vercel", "apache"],
    },
    { category: "Tools", icon: FcSupport,tagStyle:{dark:"yellow", light:"red"}, stacks: ["git", "postman"] },
    {
      category: "Others",
      icon: FcPlus,
      tagStyle:{dark:"green", light:"yellow"},
      stacks: ["JWT-authentication", "seo", "cookies", "pwa"],
    },
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
            Full-Stack Developer
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
          <Text p="0.7rem" fontSize={"1.2rem"} boxShadow={"dark-lg"} w="90%">
            {selfIntro}
          </Text>
        </Center>
      </Box>
      <Flex ml="1rem" flexDirection={"column"}>
        <Heading as="h3" size="md">
          Skills
        </Heading>
        <Box textAlign={"center"} spacing={4} display="block">
          {skills.map((category, index) => (
            <Box key={index} textAlign={"left"} m={"0.8rem 0"}>
              <Flex alignItems={"center"}>
                <category.icon fontSize={"1.5rem"}/>
                <Box ml={"0.5rem"} fontWeight={"bold"}>{category.category.toUpperCase()}</Box>
              </Flex>
              <Box>
                {category.stacks.map((skill) => (
                  <Tag
                    key={index}
                    variant="solid"
                    m="0.3rem"
                    colorScheme={useColorModeValue(category.tagStyle.light,category.tagStyle.dark)}
                  >
                    {skill.toUpperCase()}
                  </Tag>
                ))}
              </Box>
            </Box>
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
