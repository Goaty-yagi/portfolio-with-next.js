import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { sortByDate } from "../utils";
import Image from "next/image";

import styles from "../styles/pages/post.module.scss";
import postStyles from "/styles/components/post.module.scss";
import pagePostStyles from "/styles/pages/posts/post.module.scss";
import Link from "next/link";

export default function PostPage({ posts }) {
  console.log("PRO", posts);
  return (
    <div className={styles.postWrapper}>
      <h1 className={styles.mainTitle}>POST</h1>
      {posts.map((post, index) => {
        return (
          <div className={styles.eachPost} key={index}>
            <div className={styles.titleOnTop}>{post.frontmatter.title}</div>
            <Link href={"posts/" + post.slug}>
              <div className={styles.post}>
                <Image
                  className={styles.image}
                  // layout="fill"
                  height={"150px"}
                  width={"280px"}
                  // objectFit="contain"
                  src={post.frontmatter.cover_image}
                />
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
