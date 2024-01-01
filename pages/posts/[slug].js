import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { openWindow } from "../../components/footer";
import { TiSocialGithubCircular } from "react-icons/ti";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

import { FcLink } from "react-icons/fc";
import { GlobalContext } from "../../components/provider";
import prismjs from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python.min";
import "prismjs/components/prism-bash.min";

import { Box, Flex, Heading, Tag, Text } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import CustomLink from "../../components/customLink";
import CustomImage from "../../components/customImage";

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
  const context = useContext(GlobalContext);
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const imageProps = {
    src: cover_image,
    alt: alt,
    layout: "fill",
    objectFit: "cover",
  };

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
          <Flex mt="1rem" w="100%">
            <Box
              fontSize="0.9rem"
              bg="lightgray"
              border={"solid yellow"}
              borderRadius={"0.2rem"}
              p="0 0.2rem"
              color={"black"}
              fontWeight={"bold"}
              boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
            >
              Updated on {last_update}
            </Box>
          </Flex>
        </Box>
        <Box m="1rem 0">
          <Box width={"100%"} overflow={"auto"}>
            {tags.map((tag, index) => {
              return (
                <Tag
                  border={"solid orange"}
                  borderRadius="full"
                  bg="navy"
                  color={"white"}
                  p="0.1rem 0.6rem"
                  m="0.2rem 0"
                  key={index}
                >
                  {tag}
                </Tag>
              );
            })}
          </Box>
        </Box>
        {git ? (
          <Flex>
            <Box
              display={"block"}
              onClick={() => {
                openWindow(git);
              }}
              cursor={"pointer"}
              transition={"500ms"}
              _hover={{
                color: "gray",
              }}
            >
              <TiSocialGithubCircular fontSize={"45px"} />
            </Box>
          </Flex>
        ) : null}
        <Box
          position={"relative"}
          m="1.5rem 0"
          w={{ base: context.currentW - 16, md: "600px" }}
          h={{ base: context.currentW * 0.6, md: "360px" }}
        >
          <CustomImage props={imageProps} />
        </Box>
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
            <Text>{update_excerpt} on {last_update}</Text>
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
