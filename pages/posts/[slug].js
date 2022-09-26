import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";

import prismjs from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python.min";
import "prismjs/components/prism-bash.min";

import { Box, Flex, Heading, Tag } from "@chakra-ui/react";
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
      return `<Box><pre><code>${code}</code></pre></Box>`;
    }
    const langClass = "language-" + lang;
    return `<Box><pre class="${langClass}"><code class="${langClass}">${code}</code></pre></Box>`;
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
    <Flex
      position={"relative"}
      flexDirection="column"
      p={{ base: "0.5rem", md: "0" }}
    >
      <Heading size="lg" textAlign={"center"}>
        {title}
      </Heading>
      <Box m="0.2rem 0.5rem">
        <Flex mt="1rem" w="100%">
          <Box
            fontSize="0.9rem"
            bg="lightgray"
            borderRadius={"0.2rem"}
            p="0 0.2rem"
            color={"black"}
            boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
          >
            Posted on {date}
          </Box>
        </Flex>
      </Box>
      <Box m="1rem 0">
        <Flex width={"100%"}>
          {tags.map((tag, index) => {
            return (
              <Tag
                border={"solid orange"}
                borderRadius="full"
                bg="navy"
                color={"white"}
                p="0.1rem 0.6rem"
                key={index}
              >
                {tag}
              </Tag>
            );
          })}
        </Flex>
      </Box>
      <Box m="1.5rem 0">
        <Image src={cover_image} alt={alt} width={"600px"} height={"300px"} />
      </Box>
      {isMounted ? (
        <Box
          w="100%"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></Box>
      ) : null}
    </Flex>
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
