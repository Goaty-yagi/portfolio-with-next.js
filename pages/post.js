import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { sortByDate } from "../utils";
import Image from "next/image";

import styles from "../styles/pages/post.module.scss";
import postStyles from "/styles/components/post.module.scss";
import pagePostStyles from "/styles/pages/posts/post.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { FaHome, FaGithubAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Tag,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";


function filterByTag(tag, posts) {
  return posts.filter((post) => {
    if (post.frontmatter.tags.includes(tag)) {
      return post;
    }
  });
}

export default function PostPage({ posts }) {
  const [currentTag, setTag] = useState("Search Tag");
  const [allPosts, setPost] = useState(posts);

  function postHandler(tag) {
    setPost(filterByTag(tag, posts).sort(sortByDate));
  }
  function setArrayFromTags() {
    const set = new Set();
    for (let i = 0; i < posts.length; i++) {
      posts[i].frontmatter.tags.forEach((tag) => {
        set.add(tag);
      });
    }
    return Array.from(set);
  }
  function clickedOption(tag) {
    setTag(tag);
    postHandler(tag);
  }
  function Selector() {
    const tags = setArrayFromTags();
    return (
      <Menu>
        <MenuButton 
          as={Button} 
          color="black" 
          size={{base:"xs", md:"sm"}} 
          mr="0.5rem"
          border={"solid navy"} 
          rightIcon={<FiChevronDown/>}>
          { currentTag } 
        </MenuButton>
        <MenuList>
           {tags.map((tag, index) => {
            return (
              <MenuItem

                color={"black"}
                key={index}
                onClick={() => clickedOption(tag)}
              >
                <Text as="b"  fontSize={"sm"}>{tag}</Text>
              </MenuItem>
            );
          })}
        
        </MenuList>
      </Menu>
    );
  }
  return (
    <>
      <Center>
        <Heading
          as="b"
          fontSize="3xl"
          textDecoration={"underline"}
          textAlign={"center"}
        >
          POST
        </Heading>
      </Center>
      <Flex justifyContent={"flex-end"} mb="3rem" mt="1rem">
        <Selector />
      </Flex>
      {allPosts.map((post, index) => {
        return (
          <Box w={{base:"auto", md:"600px"}} mt="1.3rem" m={{base:"0 0.5rem"}} key={index}>
            <Text as="b" fontSize={{base:"1.2rem", md:"1.5rem"}} ml="0.5rem">
              {post.frontmatter.title}
            </Text>
            <Link href={"posts/" + post.slug} scroll={false}>
              <Flex
                border="solid gray"
                bg="rgba(255,255,255,0.6)"
                boxShadow={"0px 5px 15px 0px rgba(0, 0, 0, 0.35)"}
                transition=".5s"
                _hover={{ border: "solid orange" }}
              >
                <Box
                  flexBasis={"40%"}
                  position={"relative"}
                  h={{base:"110px", md:"150px"}}
                  w={{base:"150px", md:"250px"}}
                >
                  <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={post.frontmatter.alt}
                    src={post.frontmatter.cover_image}
                  />
                </Box>
                <Box flexBasis={"60%"} p={{base:"0.2rem", md:"0.5rem"}}>
                  {/* <Text as="b" mb="0.4rem" h="1rem"	>{post.frontmatter.title}</Text> */}
                  <Box m="0.5rem 0">
                    <Box
                      display={"inline-block"}
                      fontSize="0.9rem"
                      bg="lightgray"
                      borderRadius={"0.2rem"}
                      p="0 0.2rem"
                      color={"black"}
                      h="1.3rem"
                      boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
                    >
                      Posted on {post.frontmatter.date}
                    </Box>
                  </Box>
                  <Box m="0.3rem 0">
                    <Flex width={"100%"}>
                      {post.frontmatter.tags.map((tag, index) => {
                        return (
                          <Tag
                            border={"solid orange"}
                            borderRadius="full"
                            bg="navy"
                            color={"white"}
                            p="0.1rem 0.6rem"
                            key={index}
                          >
                            {tag}
                          </Tag>
                        );
                      })}
                    </Flex>
                  </Box>
                  <Box
                    h={{base:"2rem", md:"50px" }}
                    p="0.3rem"
                    boxShadow={"0px 5px 15px 0px rgba(0, 0, 0, 0.35)"}
                    overflowY="scroll"
                  >
                    {post.frontmatter.excerpt}
                  </Box>
                </Box>
              </Flex>
            </Link>
          </Box>
        );
      })}
    </>
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
