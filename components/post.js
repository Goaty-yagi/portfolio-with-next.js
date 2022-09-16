import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/post.module.scss";
import globalStyles from "/styles/components/global_components/text.module.scss";
import btn from "../styles/components/button.module.scss";



export default function Post({ posts }) {
  const btnText = "Read More >";
  console.log(posts)
  function Button() {
    const text = " More Posts >"
    return (
      <div 
          className={btn.btnContainer}>
            <Link href={"/post"} scroll={false}>
                <button className={btn.btn}>
                   {text}
                </button>
            </Link>
        </div>
    )
  }
  return (
    <section>
      <h1 className={globalStyles.sectionH1}>Post</h1>
      <div className={styles.gridContainer}>
        {posts.map((post, index) => {
          return (

            <div className={styles.post} key={index}>
              <div className={styles.image}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  src={post.frontmatter.cover_image}
                />
              </div>
              <div className={styles.dateContainer}>
                <div className={styles.dateWrapper}>
                  <div>Posted on {post.frontmatter.date}</div>
                </div>
              </div>
              <div className={styles.title}>
                {post.frontmatter.title}
              </div>
              <div className={styles.excerptWrapper}>
                <p>{post.frontmatter.excerpt}</p>
              </div>
              <div className={btn.btnContainer}>
                <Link href={"posts/" + post.slug} scroll={false}>
                  <div className={btn.btnOrange}>{btnText}</div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Button/>
    </section> 
  );
}
