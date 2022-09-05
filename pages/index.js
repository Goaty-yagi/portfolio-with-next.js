import fs from "fs"
import path from "path"
import matter from "gray-matter"

import Image from "next/image"
import { Suspense } from "react"
import styles from "../styles/home.module.scss"
import Fish from "../component/fish3d"
import Work from "../component/project"
import Post from "../component/post"

export default function Home({posts}) {
  // function PostComponent() {
  //   return (
  //     <section>
  //       <h1>Post</h1>
  //         {posts.map((post, index) => {
  //           return ( 
  //             <Post post={post} key={index}/>
  //           )
  //         })}
  //     </section>
  //   )
  // }
   
  const introText = "Hi, I'm Nobuhiro based in Melbourne."
  return (
    <div className={styles.pageProps}>
      <Suspense>
        <Fish/>
      </Suspense>
      <div className={styles.box}>
        <div className={styles.test}>{introText}</div>
      </div>
      <div className={styles.introContainer}>
        <div className={styles.myInfo}>
          <h2>Nobuhiro</h2>
          <h3>Entry-level Developer</h3>
        </div>
        <div className={styles.imgFlexBox}>
          <div className={styles.myImg}>
          <Image
            src="/me.jpeg" 
            alt="me"
            layout="fill"
            objectFit="contain"
          >
          </Image>
          </div>
        </div>
      </div>
      <div>
        something...
      </div>
      <Work/>
      <Post posts={posts} />
    </div>
    
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))
  
  //Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')
    // Get frontmatter¥
    const markdownWithMeta = fs.readFileSync(path.join(
      "posts",
      filename,
      ), "utf-8")
    
    const {data:frontmatter} = matter(markdownWithMeta)

    console.log(matter(markdownWithMeta))
    return {
      slug,
      frontmatter
    }
  })
  console.log(posts)
  return {
    props: {
      posts
    }
  }
}