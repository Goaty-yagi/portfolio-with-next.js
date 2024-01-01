import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import prismjs from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python.min";
import "prismjs/components/prism-bash.min";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  Tags,
  Dates,
  Git,
  Thumbnail,
  PreviousNotice,
  UpdateExcerpt,
  PreAndNext,
} from "../../components/posts";

export default function PostPage({
  frontmatter: {
    title,
    tags,
    date,
    last_update,
    update_excerpt,
    cover_image,
    git,
    alt,
    previous,
    next,
  },
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
    <>
      <Flex
        position={"relative"}
        flexDirection="column"
        h="100%"
        w="100%"
        p={{ base: "0.5rem", md: "0" }}
      >
        <Heading size="lg" textAlign={"center"}>
          {title}
        </Heading>
        <Dates date={date} last_update={last_update} />
        <Tags tags={tags} />
        {git && <Git git={git} />}
        <Thumbnail cover_image={cover_image} alt={alt} />
        {previous && <PreviousNotice previous={previous} />}
        {update_excerpt && (
          <UpdateExcerpt
            update_excerpt={update_excerpt}
            last_update={last_update}
          />
        )}
        {isMounted && (
          <Box w="100%" dangerouslySetInnerHTML={{ __html: marked(content) }} />
        )}
        <PreAndNext previous={previous} next={next} />
      </Flex>
    </>
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
