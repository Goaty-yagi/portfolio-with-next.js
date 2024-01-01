import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  Tags,
  Dates,
  Git,
  Thumbnail,
  PreviousNotice,
  UpdateExcerpt,
  PreAndNext,
  Markdown,
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
        {isMounted && <Markdown content={content} />}
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
