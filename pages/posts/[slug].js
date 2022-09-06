import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {marked} from "marked";
import Link from "next/link";
import Image from "next/image";

import styles from "/styles/components/button.module.scss";
import postStyles from "/styles/components/post.module.scss";
import pagePostStyles from "/styles/pages/posts/post.module.scss";
import { arraySlice } from "three/src/animation/AnimationUtils";

export default function PostPage({
  frontmatter: { title, tags, date, cover_image },
  slug,
  content,
}) {
  const goBack = "< GoBack";
  return (
    <div>
      {/* <Link href="/">
        <div className={styles.btn}>{goBack}</div>
      </Link> */}
      <div className={pagePostStyles.postWrapper}>
        <h1 className={pagePostStyles.title}>{title}</h1>
        <div className={pagePostStyles.dateWrapper}>
          Posted on {date}
        </div>
        <div className={pagePostStyles.tagWrapper}>
          {tags.map((tag, index) => {
            return (
                <div key={index}>{tag}</div>
            )
          })}
        </div>
        <div className={pagePostStyles.imgWrapper}></div>
        <Image src={cover_image} alt="me" layout="fill" objectFit="contain" />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
