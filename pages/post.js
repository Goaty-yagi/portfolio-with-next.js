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
import { BsCaretDownFill } from "react-icons/bs"
import { FaHome, FaGithubAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Button
} from "@chakra-ui/react";


const currentType = 'filterByTag'
function filterByTag(tag, posts) {
  return posts.filter(post => {
    if(post.frontmatter.tags.includes(tag)) {
      return post
    }
  })
}

export default function PostPage({ posts }) {
  const [pullDown, setData] = useState(false)
  const [currentTag, setTag] = useState('Select Tag')
  const [allPosts, setPost] = useState(posts)

  function postHandler(tag) {
    setPost(filterByTag(tag, posts).sort(sortByDate))
    console.log("All",currentTag,allPosts)
  }
  function setArrayFromTags() {
    const set = new Set()
    for(let i = 0; i < posts.length; i ++) {
      posts[i].frontmatter.tags.forEach(tag => {
        set.add(tag)
      })
    }
    return Array.from(set)
  }
  function pullDownHandler() {
    setData(!pullDown)
  }
  function clickedOption(tag) {
    setTag(tag)
    postHandler(tag)
    pullDownHandler()
  }
  function Options() {
    if(pullDown) {
      const tags = setArrayFromTags()
      return (
        <ul className={styles.optionContainer}>
          {tags.map((tag, index) => {
            return(
              <li 
                key={index}
                className={styles.eachOption}
                onClick={() => clickedOption(tag)}>
              <div className={styles.tag}>{tag}</div>
            </li>
            )
          })}
        </ul>
      )
    } else {
      return ''
    }
    
  }
  function Selector() {
    return(
      <div className={styles.selectBoxWrapper}>
        <div className={styles.selectBox}>
          <div
            onClick={pullDownHandler} 
            className={styles.defaOption}>
            <div className={styles.defaTag}>{ currentTag }</div>
            <div className={styles.iconWrapper}>
              <BsCaretDownFill
                className={!pullDown ? styles.arrowDefa : styles.arrowUp}/>
            </div>
          </div>
        </div>
        <Options/>
      </div>
    )
  }
  return (
    <>
      <Center>
        <Text as="b" fontSize="3xl" textDecoration={"underline"} textAlign={"center"}>POST</Text>
      </Center>
      <div className={styles.selectContainer}>
        <Selector/>
      </div>
      {allPosts.map((post, index) => {
        return (
          <Box mt="1.3rem" key={index}>
            <Text as="b" fontSize={"1.5rem"} ml="0.5rem">{ post.frontmatter.title }</Text>
            <Link href={"posts/" + post.slug} >
              <Flex 
                border="solid gray"
                bg="rgba(255,255,255,0.6)"
                boxShadow={"0px 5px 15px 0px rgba(0, 0, 0, 0.35)"}
                transition=".5s"
                _hover={{border:"solid orange"}}
              >
                <Box flexBasis={"40%"} position={"relative"} h="150px" w="250px">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 0"
                    alt={post.frontmatter.alt}
                    src={post.frontmatter.cover_image}
                  />
                </Box>
                <Box flexBasis={"60%"} p="0.5rem">
                  {/* <Text as="b" mb="0.4rem" h="1rem"	>{post.frontmatter.title}</Text> */}
                  <Box m="0.5rem 0">
                    <Box
                      display={"inline-block"}
                      fontSize="0.9rem" 
                      bg="lightgray" 
                      borderRadius={"0.2rem"} 
                      p="0 0.5rem" 
                      color={"black"}
                      boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
                    >
                      Posted on {post.frontmatter.date}
                    </Box>
                  </Box>
                  <Box m="0.3rem 0">
                    <Flex width={"100%"}>
                      {post.frontmatter.tags.map((tag, index) => {
                        return <Box as="b" border={"solid orange"} borderRadius="full" bg="navy" color={"white"} p="0.1rem 0.6rem" key={index}>{tag}</Box>;
                      })}
                    </Flex>
                  </Box>
                  <Box 
                    h="50px" 
                    p="0.3rem" 
                    boxShadow={"0px 5px 15px 0px rgba(0, 0, 0, 0.35)"}
                    overflowY="scroll">
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
