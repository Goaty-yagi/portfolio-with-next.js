import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/post.module.scss";
import btn from "../styles/components/button.module.scss";

export default function Post({ posts }) {
  const bunText = "Read More >";
  console.log(posts)
  return (
    <section>
      <h1>Post</h1>
      <div className={styles.gridContainer}>
        {posts.map((post, index) => {
          return (
            <div className={styles.post} key={index}>
              <div className={styles.image}>
                <Image
                  layout="fill"
                  // height={"200px"}
                  // width={"600px"}
                  objectFit="contain"
                  src={post.frontmatter.cover_image}
                />
              </div>
              <h3>{post.frontmatter.title}</h3>
              <p>{post.frontmatter.excerpt}</p>
              <div className={styles.dateWrapper}>
                <div>Posted on {post.frontmatter.date}</div>
              </div>
              <div className={btn.btnContainer}>
                <Link href={"posts/" + post.slug}>
                  <div className={btn.btnOrange}>{bunText}</div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section> 
  );
}
