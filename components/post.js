import Link from "next/link";
import { Box, Center, Flex, Heading, Text, Button } from "@chakra-ui/react";
import CustomImage from "./customImage";
import CustomLink from "./customLink";

export default function Post({ posts }) {
  const btnText = "Read More >";
  const morePosts = "More Posts >";
  const imageProps = (obj) => {
    return {
      src: obj.cover_image,
      alt: obj.alt,
      layout: "fill",
      objectFit: "cover",
      objectPosition: "50% 50%",
    };
  };
  return (
    <Box as="section" mt="2rem">
      <Heading
        as="h1"
        textAlign={{ base: "center", md: "left" }}
        size={"lg"}
        textDecoration="underline"
      >
        Blog Posts
      </Heading>
      <Box display={{ base: "block", md: "flex" }}>
        {posts.map((post, index) => {
          return (
            <Flex
              flexBasis={{ base: "auto", md: "50%" }}
              minHeight="400px"
              position="relative"
              borderRadius={"0 0 0.5rem 0.5rem"}
              bg="rgba(255,255,255,0.6)"
              flexDirection={"column"}
              m="1rem 0.5rem"
              key={index}
            >
              <Box
                position={"relative"}
                h={{ base: "200px", sm: "250px", md: "150px" }}
              >
                <CustomImage props={imageProps(post.frontmatter)} />
              </Box>
              <Box m="0.2rem 0.5rem">
                <Flex p="0 0.4rem" w="100%">
                  <Box
                    fontSize="0.9rem"
                    bg="lightgray"
                    borderRadius={"0.2rem"}
                    p="0 0.2rem"
                    color={"black"}
                    boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
                  >
                    Posted on {post.frontmatter.date}
                  </Box>
                </Flex>
              </Box>
              <Text
                overflow={"scroll"}
                fontSize="1.2rem"
                fontWeight={"bold"}
                ml="0.2rem"
              >
                {post.frontmatter.title}
              </Text>
              <Box p="0 0.4rem" h="100px" mt="0.5rem" overflowY={"scroll"}>
                <Text>{post.frontmatter.excerpt}</Text>
              </Box>
              <Center>
                <CustomLink path={"posts/" + post.slug}>
                  <Button
                    position={"absolute"}
                    bottom="0"
                    left="50%"
                    transform="translateX(-50%)"
                    size="md"
                    height="30px"
                    width="150px"
                    border="2px"
                    m="0.5rem"
                    color={"black"}
                    borderRadius="full"
                    bg="orange.50"
                    borderColor="orange.200"
                    _hover={{ borderColor: "orange" }}
                  >
                    <Text as="a"> {btnText} </Text>
                  </Button>
                </CustomLink>
              </Center>
            </Flex>
          );
        })}
      </Box>
      <Center>
        <Link href={"posts/"} scroll={false}>
          <Button
            bg="rgb(178, 224, 212)"
            color="rgb(0, 58, 53)"
            fontSize="sm"
            height="40px"
            width="120px"
            border="2px"
            m="0.5rem"
            borderColor="green.300"
            _hover={{ bg: "green.50" }}
          >
            <Text>{morePosts}</Text>
          </Button>
        </Link>
      </Center>
    </Box>
  );
}
