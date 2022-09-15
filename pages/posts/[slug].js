import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";

import prismjs from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python.min";
import "prismjs/components/prism-bash.min";
// import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js";

import postStyles from "/styles/components/post.module.scss";
import pagePostStyles from "/styles/pages/posts/post.module.scss";
import { useEffect, useState } from "react";

export default function PostPage({
  frontmatter: { title, tags, date, cover_image, alt },
  slug,
  content,
}) {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  const renderer = new marked.Renderer();
  renderer.code = function (code, lang, escaped) {
    code = this.options.highlight(code, lang);
    if (!lang) {
      return `<pre><code>${code}</code></pre>`;
    }
    const langClass = "language-" + lang;
    return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
  };

  marked.setOptions({
    renderer,
    highlight: function (code, lang) {
      try {
        return prismjs.highlight(code, prismjs.languages[lang], lang);
      } catch {
        return code;
      }
    },
  });

  return (
    // <div>
    <div className={pagePostStyles.postWrapper}>
      <h1 className={pagePostStyles.title}>{title}</h1>
      <div className={postStyles.dateWrapper}>
        <div>Posted on {date}</div>
      </div>
      <div className={pagePostStyles.tagContainer}>
        <div className={pagePostStyles.tagWrapper}>
          {tags.map((tag, index) => {
            return <div key={index}>{tag}</div>;
          })}
        </div>
      </div>
      <div className={pagePostStyles.imgWrapper}>
        <Image
          src={cover_image}
          alt={alt}
          width={"600px"}
          height={"300px"}
          // layout="fill"
        />
      </div>
      {isMounted ? (
          <div className="post-body" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      ) : null}
    </div>
    // </div>
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
