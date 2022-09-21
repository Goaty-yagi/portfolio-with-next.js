import fs from "fs"
import path from "path"
import matter from "gray-matter"

// import Image from "next/image"
import styles from "../styles/components/home.module.scss"
import Work from "../components/project"
import Post from "../components/post"
import { sortByDate } from "../utils"
import { Box, Flex, Image } from '@chakra-ui/react'

export default function Home({posts}) {
  const introText = "Hi, I'm Nobuhiro based in Melbourne."
  const selfIntro = "Newly trained web developer seeking an entry-level or internship position where I can earn professional experience in programming and offer my skills in coding and program design."
  return (
    <Box bg="tomato" w="600px">
      {/* <Suspense>
        <Fish/>
      </Suspense> */}
      <div className={styles.box}>
        <div className={styles.test}>{introText}</div>
      </div>
      <div className={styles.introContainer}>
        <div className={styles.myInfo}>
          <h2 >Nobuhiro</h2>
          <h3>Developer</h3>
        </div>
        <Flex flexBasis={"50%"} justifyContent="center">
          <Box width={"600px"} w="100px" h="100px">
          <Image
            src="/me.jpeg" 
            alt="me"
            layout="fill"
            objectFit="contain"
          >
          </Image>
          </Box>
        </Flex>
      </div>
      <div className={styles.selfWrapper}>
        <p className={styles.self}>{ selfIntro }</p>
      </div>
      <Work/>
      <Post posts={posts.slice(0,2)} />
    </Box>
    
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
    return {
      slug,
      frontmatter
    }
  })
  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}