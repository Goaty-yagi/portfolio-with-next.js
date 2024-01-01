import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

import { FcLink } from "react-icons/fc";
import prismjs from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python.min";
import "prismjs/components/prism-bash.min";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CustomLink from "../../components/customLink";
import { Tags, Dates, Git, Thumbnail } from "../../components/posts";

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
  const origin = typeof window !== "undefined" ? window.location.origin : "";

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
        {previous && (
          <>
            <Box
              textAlign={"center"}
              fontSize={"1.3rem"}
              whiteSpace={"pre-wrap"}
            >
              <span
                style={{
                  border: "1px solid #767717",
                  borderRadius: "0.5rem",
                  padding: "0.3rem 0.5rem",
                  display: "inline-block",
                }}
              >
                <Flex alignItems={"center"}>
                  <FcLink />
                  <Text ml={"0.5rem"}>In continuation from </Text>
                  <Box
                    className={"customA"}
                    style={{ display: "inline-block" }}
                  >
                    <CustomLink href={origin + previous} scroll={true}>
                      this article
                    </CustomLink>
                  </Box>
                </Flex>
              </span>
            </Box>
          </>
        )}
        {update_excerpt && (
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            border={"solid #ff84e0"}
            bg={"lightcyan"}
            color={"gray"}
            p={"0.2rem 0.5rem"}
            mt={"1rem"}
          >
            <Heading>What is updated?</Heading>
            <Text>
              {update_excerpt} on {last_update}
            </Text>
          </Flex>
        )}
        {isMounted && (
          <Box w="100%" dangerouslySetInnerHTML={{ __html: marked(content) }} />
        )}
        <Flex
          justifyContent={"space-between"}
          mt={"1rem"}
          fontWeight={"bold"}
          fontSize={"1.2rem"}
        >
          <Box>
            {previous ? (
              <CustomLink href={origin + previous} scroll={true}>
                <Flex
                  alignItems={"center"}
                  cursor={"pointer"}
                  border={"solid lightgray"}
                  borderRadius={"0.5rem"}
                  color={"white"}
                  bg={"#775a85"}
                  p={"0.2rem 0.3rem"}
                  transition={"300ms"}
                  _hover={{ bg: "white", color: "black", border: "solid gray" }}
                >
                  <TbArrowBigLeftLine />
                  <Text ml={"0.5rem"}>PREVIOUS</Text>
                </Flex>
              </CustomLink>
            ) : (
              <></>
            )}
          </Box>
          <Box>
            {next ? (
              <CustomLink href={origin + next} scroll={true}>
                <Flex
                  alignItems={"center"}
                  cursor={"pointer"}
                  border={"solid lightgray"}
                  borderRadius={"0.5rem"}
                  color={"white"}
                  bg={"#775a85"}
                  p={"0.2rem 0.3rem"}
                  transition={"300ms"}
                  _hover={{ bg: "white", color: "black", border: "solid gray" }}
                >
                  <Text mr={"0.5rem"}>NEXT</Text>
                  <TbArrowBigRightLine />
                </Flex>
              </CustomLink>
            ) : (
              <></>
            )}
          </Box>
        </Flex>
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
