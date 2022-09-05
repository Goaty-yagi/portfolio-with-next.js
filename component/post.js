import Image from "next/image"
import Link from "next/link"

export default function Post({posts}) {
    return (
            <section>
              <h1>Post</h1>
                {posts.map((post, index) => {
                  return ( 
                    <div key={index}>
                        <h3>{post.frontmatter.title}</h3>
                        {/* <Image layout="fill" src={post.frontmatter.cover_image}/> */}
                        <div>{post.frontmatter.date}</div>
                        <p>{post.frontmatter.excerpt}</p>
                        <Link href={`/post/${post.slug}`}>
                            <a>Read More</a>
                        </Link>
                    </div>
                  )
                })}
            </section>
    )
}