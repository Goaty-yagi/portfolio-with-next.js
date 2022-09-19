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
    <div className={styles.postWrapper}>
      <h1 className={styles.mainTitle}>POST</h1>
      <div className={styles.selectContainer}>
        <Selector/>
      </div>
      {allPosts.map((post, index) => {
        return (
          <div className={styles.eachPost} key={index}>
            <div className={styles.titleOnTop}>{post.frontmatter.title}</div>
            <Link href={"posts/" + post.slug} scroll={false}>
              <div className={styles.post}>
                <div className={styles.imageWrapper}>
                  <Image
                    className={styles.image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 0"
                    alt={post.frontmatter.alt}
                    src={post.frontmatter.cover_image}
                  />
                </div>
                <div className={styles.postFrontmatter}>
                  <div className={styles.titleIn}>{post.frontmatter.title}</div>
                  <div className={styles.dateWrapper}>
                    <div className={postStyles.dateWrapper}>
                      <div>Posted on {post.frontmatter.date}</div>
                    </div>
                  </div>
                  <div className={styles.tagWrapper}>
                    <div className={pagePostStyles.tagWrapper}>
                      {post.frontmatter.tags.map((tag, index) => {
                        return <div key={index}>{tag}</div>;
                      })}
                    </div>
                  </div>
                  <div className={styles.excerptWrapper}>
                    {post.frontmatter.excerpt}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
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
