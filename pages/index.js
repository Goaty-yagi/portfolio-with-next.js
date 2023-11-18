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
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import CustomImage from "../components/customImage";
import { openWindow } from "../components/footer";
import { PiCertificateDuotone } from "react-icons/pi";
import {
  FcSelfServiceKiosk,
  FcFilingCabinet,
  FcServices,
  FcPlus,
  FcSupport,
} from "react-icons/fc";

export const Context = React.createContext();

export default function Home({ posts, projects }) {
  const { colorMode } = useColorMode();
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
      tagStyle: { dark: "teal", light: "orange" },
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
      tagStyle: { dark: "pink", light: "blue" },
      stacks: ["python", "c-language", "django", "django rest framework"],
    },
    {
      category: "DevOps",
      icon: FcServices,
      tagStyle: { dark: "blue", light: "green" },
      stacks: ["shell", "aws", "heroku", "vercel", "apache"],
    },
    {
      category: "Tools",
      icon: FcSupport,
      tagStyle: { dark: "orange", light: "pink" },
      stacks: ["git", "postman"],
    },
    {
      category: "Others",
      icon: FcPlus,
      tagStyle: { dark: "green", light: "yellow" },
      stacks: ["JWT-authentication", "seo", "cookies", "pwa"],
    },
  ];
  const certifications = [
    {
      icon: "aws-logo.svg",
      name: "AWS Certified Cloud Practitioner",
      url: "https://www.credly.com/badges/83a1ce2a-70d5-4498-99c3-9d34a4dfccab/linked_in_profile",
    },
    {
      icon: "python-logo.svg",
      name: "PCAP – Certified Associate in Python Programming",
      url: "https://verify.openedg.org/?id=edKm.8BVu.VEaG",
    },
    {
      icon: "javascript-logo.svg",
      name: "General Assembly JavaScript Development",
      url: "https://drive.google.com/file/d/1bUWCbzCqu4oOuF8SxpynQVxpMu-8SP-c/view",
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
      <Divider/>
      <Flex ml="1rem" flexDirection={"column"}>
        <Heading as="h2" size="md">
          Skills
        </Heading>
        <Box textAlign={"center"} spacing={4} display="block">
          {skills.map((category, index) => (
            <Box key={index} textAlign={"left"} m={"0.8rem 0"}>
              <Flex alignItems={"center"}>
                <category.icon fontSize={"1.5rem"} />
                <Box ml={"0.5rem"} fontWeight={"bold"}>
                  {category.category.toUpperCase()}
                </Box>
              </Flex>
              <Box>
                {category.stacks.map((skill) => (
                  <Tag
                    key={index}
                    variant="solid"
                    m="0.3rem"
                    colorScheme={
                      colorMode === "light"
                        ? category.tagStyle.light
                        : category.tagStyle.dark
                    }
                  >
                    {skill.toUpperCase()}
                  </Tag>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Flex>
      <Divider />
      <Flex ml="1rem" flexDirection={"column"}>
        <Heading as="h2" size="md">
          Certifications
        </Heading>
        <Box spacing={4} display="block">
          {certifications.map((c, index) => (
            <Flex
              key={index}
              m={"0.8rem 0"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box minW={"40px"} h={"40px"} position={"relative"}>
                <CustomImage
                  props={{
                    src: `/svgs/${c.icon}`,
                    alt: c.icon,
                    layout: "fill",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box flexGrow={1}>
                <Text ml={"0.5rem"} fontWeight={"boid"}>
                  {c.name}
                </Text>
              </Box>
              <Flex
                onClick={() => {
                  openWindow(c.url);
                }}
                minW={"2.5rem"}
                alignItems={"center"}
                border={"solid gray"}
                borderRadius={"10px"}
                p={"0.3rem"}
                transition={"300ms"}
                cursor={"pointer"} 
                _hover={{
                  border: "solid #ECE698",
                }}
              >
                <PiCertificateDuotone fontSize={"1.5rem"}/>
              </Flex>
            </Flex>
          ))}
        </Box>
        <Divider />
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
