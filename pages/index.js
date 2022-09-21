import fs from "fs";
import path from "path";
import matter from "gray-matter";

// import Image from "next/image"
import styles from "../styles/components/home.module.scss";
import Work from "../components/project";
import Post from "../components/post";
import { sortByDate } from "../utils";
import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BsHeartFill } from "react-icons/bs";

export default function Home({ posts }) {
  const introText = "Hi, I'm Nobuhiro based in Melbourne.";
  const selfIntro =
    "Newly trained web developer seeking an entry-level or internship position where I can earn professional experience in programming and offer my skills in coding and program design.";
  return (
    <Box maxW="600px" p="0.3rem">
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
          >
            <Image
              src="/me.jpeg"
              alt="me"
              layout="fill"
              objectFit="contain"
            ></Image>
          </Box>
        </Flex>
      </Flex>
      <Box m="2rem 0" p="0 1rem">
        <Center>
          <Text className={styles.self}>{selfIntro}</Text>
        </Center>
      </Box>
      <Work />
      <Post posts={posts.slice(0, 2)} />
    </Box>
  );
}

export async function getStaticProps() {
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
      posts: posts.sort(sortByDate),
    },
  };
}
