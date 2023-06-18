import fs from "fs";
import path from "path";

import { useRouter } from "next/router";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import BreadcrumbCompo from "../../components/breadcrumb";
import CustomImage from "../../components/customImage";
import Head from "next/head";

export default function ProjectPage({ work }) {
  const router = useRouter();
  const workData = work;
  const path = {
    type: "projects",
    name: router.query.slug,
  };
  const imageProps = (obj) => {
    return {
      src: obj,
      alt: "image",
      layout: "fill",
      objectFit: "cover",
      objectPosition: "50% 50%",
    };
  };
  const tabs = ["project-type", "stack", "post-url"];
  const goToSource = (src) => {
    window.open(src);
  };
  return (
    <>
      {/* <Head>
        <title>{`Bing - Projects - ${workData.title}`}</title>
      </Head> */}
      <Flex p={{ base: "0 0.5rem", lg: "0" }} flexDirection={"column"}>
        {workData && (
          <>
            <BreadcrumbCompo path={path}></BreadcrumbCompo>
            <Heading>{workData.title}</Heading>
            <Text>{workData.productDescription}</Text>

            <Flex mt="1rem" flexDirection={"column"}>
              {tabs.map((each, index) => (
                <Flex key={index} mt="0.5rem">
                  <Box
                    bg="rgba(251, 192, 147,0.7)"
                    color="#FF8C32"
                    fontWeight={"bold"}
                    display={"inline"}
                    p="0 0.3rem"
                    textShadow={"0.5px 0.5px black"}
                    borderRadius={"0.2rem"}
                  >
                    {each.toUpperCase()}
                  </Box>
                  <Text
                    ml="0.5rem"
                    transition={".3s"}
                    _hover={{
                      bg: each === "post-url" ? "rgba(200,200,200,.7)" : "",
                    }}
                    onClick={
                      each === "post-url"
                        ? () => {
                            goToSource(workData[each]);
                          }
                        : () => {}
                    }
                  >
                    {Array.isArray(workData[each])
                      ? workData[each].join(", ").toUpperCase()
                      : workData[each]}
                  </Text>
                </Flex>
              ))}
              <UnorderedList mt="1rem" ml="2rem">
                {workData.features.map((each, index) => (
                  <Box as={ListItem} key={index}>
                    {each}
                  </Box>
                ))}
              </UnorderedList>
            </Flex>
            <Flex mt="2rem" flexDirection={"column"}>
              {workData.img.map((each, index) => (
                <Box
                  key={index}
                  mt="1.5rem"
                  position={"relative"}
                  w="100%"
                  h={{ base: "200px", sm: "280px", md: "300px", lg: "350px" }}
                >
                  <Box
                    as={CustomImage}
                    borderRadius={"0.5rem"}
                    src={each}
                    props={imageProps(each)}
                  />
                </Box>
              ))}
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "json");
  const data = fs.readFileSync(filePath + "/workdata.json", "utf8");
  const a = JSON.parse(data);
  console.log("DATA", typeof a, a);
  const paths = a.workdata.map((filename) => ({
    params: {
      slug: filename.title,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log("SLUG", slug);
  const filePath = path.join(process.cwd(), "json");
  const data = fs.readFileSync(filePath + "/workdata.json", "utf8");
  const projectsdata = JSON.parse(data);

  return {
    props: {
      work: projectsdata.workdata.find((each) => each.title === slug),
    },
  };
}
